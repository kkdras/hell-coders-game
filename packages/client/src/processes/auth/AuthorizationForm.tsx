import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useDispatch } from 'react-redux'
import { FormProvider, useForm } from 'react-hook-form'
import { AuthForm } from './types'
import { postAuth } from '../../store/auth/actions'
import { AppStoreDispatch } from '../../store'
import { FormInput } from '../../components/FormInput'
import { RouteNames } from '../../App'
import { defaultValues } from './const'
import { yupResolver } from '@hookform/resolvers/yup'
import { authSchema } from '../../shared/utils/formSchema'
import { getAuthUser } from '../../store/user/actions'

export function AuthorizationForm() {
  const dispatch = useDispatch<AppStoreDispatch>()

  const methods = useForm<AuthForm>({
    defaultValues,
    resolver: yupResolver(authSchema),
  })

  const { handleSubmit } = methods
  const formSubmit = handleSubmit(data => {
    dispatch(postAuth(data))
    dispatch(getAuthUser())
  })

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography component="h1" variant="h5" mb={2}>
          Вход
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={formSubmit}>
            <FormInput placeholder="Логин" type="text" name="login" />
            <FormInput name="password" placeholder="Пароль" type="password" />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Авторизация
            </Button>
            <Link to={RouteNames.REGISTER}>
              У вас нет аккаунта? Регистрация
            </Link>
          </form>
        </FormProvider>
      </Box>
    </Container>
  )
}
