import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { addForumItemSchema } from '../../../../shared/utils/formSchema'
import * as uuid from 'uuid'
import { FormInput } from '../../../../components/FormInput'
import { Popover } from '@mui/material'
import { FC } from 'react'
import { AddReplyProps, AddReplyForm } from './types'
import { ReplyRequestData } from '../../../../store/forum/types'
import { useDispatch } from 'react-redux'
import { AppStoreDispatch } from '../../../../store'
import { postReply } from '../../../../store/forum/actions'

export const AddReply: FC<AddReplyProps> = ({
  showAddReply,
  setShowAddReply,
  commentId,
  authorLogin,
}) => {
  const dispatch = useDispatch<AppStoreDispatch>()

  const methods = useForm<AddReplyForm>({
    defaultValues: { text: '' },
    resolver: yupResolver(addForumItemSchema),
  })

  const { handleSubmit } = methods
  const formSubmit = handleSubmit(data => {
    const requestData: ReplyRequestData = {
      text: data.text,
      commentId: commentId,
      authorLogin: authorLogin,
      time: `${new Date().getDate()} ${new Date().getTime()}`,
    }
    dispatch(postReply(requestData))
    setShowAddReply(false)
  })

  return (
    <Popover
      open={showAddReply}
      onClose={() => setShowAddReply(false)}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}>
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
            Ваше мнение
          </Typography>
          <FormProvider {...methods}>
            <form onSubmit={formSubmit}>
              <FormInput placeholder="Название" type="text" name="title" />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}>
                Ответить
              </Button>
            </form>
          </FormProvider>
        </Box>
      </Container>
    </Popover>
  )
}
