import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { FC } from 'react'
import { AvatarForm, AvatarPopupProps } from './types'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { AppStoreDispatch } from '../../../store'
import { putAvatar } from '../../../store/user/actions'

export const AvatarPopup: FC<AvatarPopupProps> = ({ open, onClose }) => {
  const dispatch = useDispatch<AppStoreDispatch>()

  const methods = useForm<AvatarForm>()

  const { handleSubmit, register } = methods
  const formSubmit = handleSubmit(data => {
    const formData = new FormData()
    formData.append('avatar', data.avatar[0])
    dispatch(putAvatar(formData))
    onClose()
  })
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle alignSelf="center">Загрузите аватар</DialogTitle>
      <FormProvider {...methods}>
        <form onSubmit={formSubmit}>
          <DialogContent sx={{ mb: 2, mt: 2, width: 400, textAlign: 'center' }}>
            <Button component="label">
              Выберите файл на компьютере
              <input
                hidden
                accept="image/*"
                type="file"
                {...register('avatar')}
              />
            </Button>
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
