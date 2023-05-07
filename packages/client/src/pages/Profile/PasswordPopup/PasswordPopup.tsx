import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { AppStoreDispatch } from '../../../store'
import { PasswordForm, PasswordPopupProps } from './types'
import { defaultValues } from './const'
import { FormInput } from '../../../components/FormInput'
import { putPassword } from '../../../store/user/actions'

export const PasswordPopup: FC<PasswordPopupProps> = ({ open, onClose }) => {
  const dispatch = useDispatch<AppStoreDispatch>()

  const methods = useForm<PasswordForm>({ defaultValues })

  const { handleSubmit, reset } = methods
  const formSubmit = handleSubmit(data => {
    dispatch(putPassword(data))
    onClose()
    reset()
  })

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle alignSelf="center">Изменить пароль</DialogTitle>
      <FormProvider {...methods}>
        <form onSubmit={formSubmit}>
          <DialogContent>
            <FormInput
              name="oldPassword"
              placeholder="Старый пароль"
              type="password"
            />
            <FormInput
              name="newPassword"
              placeholder="Новый пароль"
              type="password"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} variant="contained" size="small">
              Отменить
            </Button>
            <Button type="submit" variant="contained" size="small">
              Сохранить
            </Button>
          </DialogActions>
        </form>
      </FormProvider>
    </Dialog>
  )
}
