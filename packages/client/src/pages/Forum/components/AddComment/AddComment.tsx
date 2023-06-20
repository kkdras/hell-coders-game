import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { addCommentSchema } from '../../../../shared/utils/formSchema'
import * as uuid from "uuid";
import { FormInput } from '../../../../components/FormInput'
import { Popover } from '@mui/material'
import { FC } from 'react'
import { AddCommentForm, AddCommentProps } from './types'

export const AddComment: FC<AddCommentProps> = ({ showAddComment, setShowAddComment, topicId }) => {
  const methods = useForm<AddCommentForm>({
    defaultValues: { title: '' },
    resolver: yupResolver(addCommentSchema),
  })

  const { handleSubmit } = methods
  const formSubmit = handleSubmit(data => {
    const requestData = {
      id: uuid.v4(),
      title: data.title,
      topicId: topicId,
      replyes: {}
    }
    // todo метод отправки данных
    //post(requestData)
    console.log(requestData)
    setShowAddComment(false)

  })

  return (
    <Popover
      open={showAddComment}
      onClose={() => setShowAddComment(false)}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
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
            Ваш комментарий
          </Typography>
          <FormProvider {...methods}>
            <form onSubmit={formSubmit}>
              <FormInput placeholder="Название" type="text" name="title" />
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
      </Container></Popover>
  )
}
