import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { useEffect, useState } from 'react'
import { AppStoreDispatch } from '../../store'
import { Avatar, Box, Button, Card, Grid } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { FormInput } from '../../components/FormInput'
import { ProfileForm } from './types'
import { UserUpdateRequest } from '../../store/user/types'
import { putUser } from '../../store/user/actions'
import { BASE_URL } from '../../shared/consts'
import { AvatarPopup } from './AvatarPopup/AvatarPopup'
import { defaultValues } from './const'
import {
  avatarStyles,
  buttonContainerStyles,
  cardStyles,
  pageStyles
} from './styles'
import { PasswordPopup } from './PasswordPopup/PasswordPopup'
import { yupResolver } from '@hookform/resolvers/yup'
import { profileSchema } from '../../shared/utils/formSchema'

export const Profile = () => {
  const { user } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch<AppStoreDispatch>()
  const [avatar, setAvatar] = useState<string>()
  const [showChangeAvatarPopup, setShowChangeAvatarPopup] =
    useState<boolean>(false)
  const [showChangePasswordPopup, setShowChangePasswordPopup] =
    useState<boolean>(false)

  const methods = useForm<ProfileForm>({
    defaultValues,
    resolver: yupResolver(profileSchema)
  })

  const { handleSubmit, reset } = methods

  useEffect(() => {
    document.title = 'Профиль'
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
        login: user.login
      })
      setAvatar(`${BASE_URL}/resources${user.avatar}`)
    }
  }, [user])

  const formSubmit = handleSubmit(data => {
    const requestData: UserUpdateRequest = {
      first_name: data.name,
      second_name: data.lastName,
      display_name: data.displayName,
      login: data.login,
      email: data.email,
      phone: data.phone
    }
    dispatch(putUser(requestData))
  })

  return (
    <Box sx={pageStyles}>
      <Card sx={cardStyles} variant="outlined">
        <Avatar sx={avatarStyles} src={avatar} />
        <Box sx={buttonContainerStyles}>
          <Button size="small" onClick={() => setShowChangeAvatarPopup(true)}>
            Изменить аватар
          </Button>
          <Button size="small" onClick={() => setShowChangePasswordPopup(true)}>
            Изменить пароль
          </Button>
        </Box>
        <FormProvider {...methods}>
          <form onSubmit={formSubmit}>
            <Grid container justifyContent="center">
              <FormInput name="name" placeholder="Имя" />
              <FormInput name="lastName" placeholder="Фамилия" />
              <FormInput name="displayName" placeholder="Никнейм" />
              <FormInput name="email" placeholder="Email" type="email" />
              <FormInput name="phone" placeholder="Телефон" type="tel" />
              <FormInput name="login" placeholder="Логин" />
              <Button type="submit" variant="contained">
                Сохранить
              </Button>
            </Grid>
          </form>
        </FormProvider>
      </Card>
      <AvatarPopup
        open={showChangeAvatarPopup}
        onClose={() => setShowChangeAvatarPopup(false)}
      />
      <PasswordPopup
        open={showChangePasswordPopup}
        onClose={() => setShowChangePasswordPopup(false)}
      />
    </Box>
  )
}
