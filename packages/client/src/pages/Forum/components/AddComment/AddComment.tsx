import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { addCommentSchema } from '../../../../shared/utils/formSchema'
import { FormInput } from '../../../../components/FormInput'
import { Popover } from '@mui/material'
import { FC } from 'react'
import { AddCommentForm, AddCommentProps } from './types'
import { CommentAndReplyRequestData } from '../../../../store/forum/types'
import { useDispatch, useSelector } from 'react-redux'
import { AppStoreDispatch, RootState } from '../../../../store'
import { createComment } from '../../../../store/forum/actions'

export const AddComment: FC<AddCommentProps> = ({
  showAddComment,
  setShowAddComment,
  topicId
}) => {
  const dispatch = useDispatch<AppStoreDispatch>()
  const { localUser } = useSelector((state: RootState) => state.user)

  const methods = useForm<AddCommentForm>({
    defaultValues: { content: '' },
    resolver: yupResolver(addCommentSchema)
  })

  const { handleSubmit } = methods
  const formSubmit = handleSubmit(data => {
    console.log('subit')
    if (localUser) {
      const requestData: CommentAndReplyRequestData = {
        content: data.content,
        topicId: topicId,
        userId: localUser?.id
      }
      dispatch(createComment(requestData))
      setShowAddComment(false)
    }
  })

  return (
    <Popover
      open={showAddComment}
      onClose={() => setShowAddComment(false)}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <Typography component="h1" variant="h5" mb={2}>
            Ваш комментарий
          </Typography>
          <FormProvider {...methods}>
            <form onSubmit={formSubmit}>
              <FormInput placeholder="Название" type="text" name="content" />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}>
                Добавить
              </Button>
            </form>
          </FormProvider>
        </Box>
      </Container>
    </Popover>
  )
}
