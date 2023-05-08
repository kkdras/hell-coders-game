import { Box, Typography, Card, Button, Grid } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { FormInput } from '../../components/FormInput'
import { useDispatch } from 'react-redux'
import { postRegister } from '../../store/auth/actions'
import { SignUpRequest } from '../../store/auth/const'
import { RegisterForm } from './types'
import { AppStoreDispatch } from '../../store/index'
import { validationSchema } from '../../shared/utils/formSchema'
import { yupResolver } from '@hookform/resolvers/yup'

const defaultValues = {
  name: '',
  lastName: '',
  login: '',
  email: '',
  password: '',
  phone: '',
}

export const Register = () => {
  const dispatch = useDispatch<AppStoreDispatch>()

  const methods = useForm<RegisterForm>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  })

  const { handleSubmit } = methods
  const formSubmit = handleSubmit(data => {
    const requestData: SignUpRequest = {
      first_name: data.name,
      second_name: data.lastName,
      email: data.email,
      login: data.login,
      phone: data.phone,
      password: data.password,
    }
    dispatch(postRegister(requestData))
  })

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card sx={{ p: 4, mt: 10, mb: 10, maxWidth: 500 }} variant="outlined">
        <Typography variant="h4" sx={{ mb: 2 }}>
          Регистрация
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={formSubmit}>
            <Grid container justifyContent="center">
              <FormInput name="name" placeholder="Имя" />
              <FormInput name="lastName" placeholder="Фамилия" />
              <FormInput name="email" placeholder="Email" type="email" />
              <FormInput name="phone" placeholder="Телефон" type="tel" />
              <FormInput name="login" placeholder="Логин" />
              <FormInput name="password" placeholder="Пароль" type="password" />
              <Button type="submit" variant="contained">
                Создать аккаунт
              </Button>
            </Grid>
          </form>
        </FormProvider>
      </Card>
    </Box>
  )
}
