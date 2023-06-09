import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { Box } from '@mui/material'
import { listOptions } from './const'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../../App'
import { useEffect } from 'react'
import { postYandexOAuth } from '../../store/auth/actions'
import { useDispatch } from 'react-redux'
import { AppStoreDispatch } from '../../store'
import { redirect_uri } from '../../processes/auth/const'

export const Home = () => {
  const dispatch = useDispatch<AppStoreDispatch>()
  
  // получение code пользователя Яндекс из url. Формат: http://localhost:3000/?code=4751985
  useEffect(() => {
    if (window.location.search.toString().split('=').length > 1)
      dispatch(
        postYandexOAuth({
          code: window.location.search.toString().split('=')[1],
          redirect_uri: redirect_uri,
        })
      )
  }, [window.location.search])

  const navigate = useNavigate()
  return (
    <>
      <Typography pt={2} variant="h3" textAlign="center" role="header">
        Тетрис
      </Typography>
      <Box sx={{ pt: 4, display: 'flex', gap: 4, pb: 4 }}>
        <img width="50%" src={'/tetris.jpeg'} alt="Tetris" />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Typography>
            Суть игры в тетрис состоит в том, что случайные фигурки (каждая из
            которых состоит строго из 4-х сегментов) падают сверху вниз на поле
            высотой в 20 клеток и шириной в 10 клеток. Игрок во время падения
            каждой фигурки может поворачивать ее вокруг своей оси и двигать
            влево-вправо по горизонтали, выбирая место, куда она должна упасть.
            Когда по горизонтали заполняется строка из 10 клеток – она исчезает.
            Очки начисляются за каждую исчезнувшую строку. Скорость падения
            каждой последующей фигурки нарастает. Игра заканчивается, когда
            новая фигурка уже не может поместиться в параметры поля и тогда
            подсчитываются итоговые набранные очки за игру.
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 4 }}
            onClick={() => navigate(RouteNames.GAME)}>
            Играть
          </Button>
        </Box>
      </Box>
      <Typography>
        Управление происходит через веб-интерфейс и с помощью клавиатуры:
      </Typography>
      <List disablePadding>
        {listOptions.map(option => (
          <ListItem key={option.label} disablePadding sx={{ pl: 0 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>{option.icon}</ListItemIcon>
            <ListItemText primary={option.label} />
          </ListItem>
        ))}
      </List>
    </>
  )
}
