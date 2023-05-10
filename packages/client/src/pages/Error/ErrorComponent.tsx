import { ErrorBoundary } from '../../utils/errorBoundary'
import TestError from '../../components/testError'
import { useEffect } from 'react'
import { Box } from '@mui/material'

export function ErrorComponent() {
  useEffect(() => {
    document.title = 'Тест ошибки в дочернем компоненте'
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        m: 1,
        mt: 5,
      }}>
      <ErrorBoundary>
        <TestError />
      </ErrorBoundary>
    </Box>
  )
}
