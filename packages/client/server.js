import express from 'express'
import fs from 'node:fs'
import path from 'node:path'
import serialize from 'serialize-javascript'

export async function startServer() {
  const port = Number(process.env.CLIENT_PORT) || 3000
  const isProd = process.env.NODE_ENV === 'production'
  const indexProd = isProd
    ? fs.readFileSync(path.resolve('dist/client/index.html'), 'utf-8')
    : ''
  const root = process.cwd()

  const app = express()

  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite
  if (!isProd) {
    vite = await import('vite')
    vite = await vite.createServer({
      root,
      server: { middlewareMode: true },
      appType: 'custom',
    })

    app.use(vite.middlewares)
  } else {
    app.use((await import('compression')).default())
    app.use(
      (await import('serve-static')).default(path.resolve('dist/client'), {
        index: false,
      })
    )
  }

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl

      let template, render
      if (!isProd) {
        template = fs.readFileSync(path.resolve('index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
      } else {
        template = indexProd
        render = (await import('./dist/server/entry-server.cjs')).render
      }

      const { appHtml, emotionCss, store } = render(url, {})

      // here we can dispatch actions to fill store

      const state = store.getState()

      const html = template
        .replace(`<!--app-html-->`, appHtml)
        .replace(`<!--emotionCss-->`, emotionCss)
        .replace(
          `<!--app-state-->`,
          `<script>window.__PRELOADED_STATE__=${serialize(
            state
          )}</script>`
        )
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      !isProd && vite.ssrFixStacktrace(e)
      console.log(e.stack)
      res.status(500).end(e.stack)
    }
  })

  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
  })
}

startServer()
