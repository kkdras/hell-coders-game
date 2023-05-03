import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export function Start() {
    useEffect(() => {
        document.title = 'Старт игры!'
    }, [])

    const [secondsBefore, setSecondsBefore] = useState<number>(3);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: 40,
            }}>
            <Box sx={{ color: 'text.primary', margin: 2 }}>
                <Typography variant="h3">GAME STARTING...</Typography>
            </Box>
            <Box sx={{ color: 'error.main', margin: 2 }}>
                <Typography variant="h3">{secondsBefore}</Typography>
            </Box>
        </Box>
    )
}
