import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import SpaceBarIcon from '@mui/icons-material/SpaceBar'
import KeyboardIcon from '@mui/icons-material/Keyboard'

export const listOptions = [
  { icon: <ArrowBackIcon />, label: 'Стрелка влево: сдвигает фигурку влево' },
  {
    icon: <ArrowForwardIcon />,
    label: 'Стрелка вправо: сдвигает фигурку вправо'
  },
  {
    icon: <ArrowDownwardIcon />,
    label: 'Стрелка вниз: ускоряет падение фигурки'
  },
  {
    icon: <SpaceBarIcon />,
    label: 'Пробел: поворачивает фигурку на 90 градусов по часовой стрелке'
  },
  {
    icon: <KeyboardIcon />,
    label: 'Ctrl: поворачивает фигурку на 90 градусов против часовой стрелки'
  },
  { icon: <KeyboardIcon />, label: 'Ctrl + N: подсказка следующей фигуры' },
  { icon: <KeyboardIcon />, label: 'Ctrl + P: подсказка места падения фигуры' }
]
