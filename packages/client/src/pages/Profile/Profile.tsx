import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { useEffect } from 'react'
import { AppStoreDispatch } from '../../store'
import { getAuthUser } from '../../store/auth/actions'
import { Box, Button, Card, Grid } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { FormInput } from '../../components/FormInput'
import { ProfileForm } from './types'
import { DevTool } from '@hookform/devtools'
import { UserUpdateRequest } from '../../store/user/types'
import { putUser } from '../../store/user/actions'

const defaultValues = {
  name: '',
  lastName: '',
  displayName: '',
  email: '',
  phone: '',
  login: '',
}

export const Profile = () => {
  const { user } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch<AppStoreDispatch>()

  const methods = useForm<ProfileForm>({ defaultValues })

  const { handleSubmit, control, reset } = methods

  useEffect(() => {
    dispatch(getAuthUser())
  }, [])

  useEffect(() => {
    // тк мы получаем данные о себе асинхронно:
    if (user) {
      reset({
        name: user.first_name,
        lastName: user.second_name,
        displayName: user.display_name,
        email: user.email,
        phone: user.phone,
        login: user.login,
      })
    }
  }, [user])

  const formSubmit = handleSubmit(data => {
    const requestData: UserUpdateRequest = {
      first_name: data.name,
      second_name: data.lastName,
      display_name: data.displayName,
      login: data.login,
      email: data.email,
      phone: data.phone,
    }
    dispatch(putUser(requestData))
  })

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card sx={{ p: 4, mt: 10, mb: 10, maxWidth: 500 }} variant="outlined">
        <FormProvider {...methods}>
          <form onSubmit={formSubmit}>
            <Grid container justifyContent="center">
              <FormInput name="name" placeholder="Имя" />
              <FormInput name="lastName" placeholder="Фамилия" />
              <FormInput name="displayName" placeholder="Никнейм" />
              <FormInput name="email" placeholder="Email" type="email" />
              <FormInput name="phone" placeholder="Телефон" type="tel" />
              <FormInput name="login" placeholder="Логин" type="tel" />
              <Button type="submit" variant="contained">
                Сохранить
              </Button>
            </Grid>
            <DevTool control={control} />
          </form>
        </FormProvider>
      </Card>
    </Box>
  )
}
