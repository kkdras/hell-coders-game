declare global {
  interface Document {
    mozCancelFullScreen?: () => Promise<void>
    msExitFullscreen?: () => Promise<void>
    webkitExitFullscreen?: () => Promise<void>
    mozFullScreenElement?: Element
    msFullscreenElement?: Element
    webkitFullscreenElement?: Element
  }

  interface HTMLElement {
    msRequestFullscreen?: () => Promise<void>
    mozRequestFullScreen?: () => Promise<void>
    webkitRequestFullscreen?: () => Promise<void>
  }
}

export function toggleFullscreen(elem?: Element) {
  const toggler = document.getElementById('toggler') as HTMLElement

  elem = elem || document.documentElement
  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    } else if ((elem as HTMLElement).msRequestFullscreen) {
      ;(elem as any).msRequestFullscreen()
    } else if ((elem as HTMLElement).mozRequestFullScreen) {
      ;(elem as any).mozRequestFullScreen()
    } else if ((elem as HTMLElement).webkitRequestFullscreen) {
      ;(elem as any).webkitRequestFullscreen(
        (<any>Element).ALLOW_KEYBOARD_INPUT
      )
    }
    toggler.textContent = 'Fullscreen'
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    }
    toggler.textContent = 'Fullscreen off'
  }
}
