import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AddTopicForm, AddTopicProps } from './types'
import { addTopicSchema } from '../../../../shared/utils/formSchema'
import * as uuid from "uuid";
import { FormInput } from '../../../../components/FormInput'
import { Popover } from '@mui/material'
import { FC } from 'react'

export const AddTopic: FC<AddTopicProps> = ({ showAddTopic, setShowAddTopic }) => {
  const methods = useForm<AddTopicForm>({
    defaultValues: { title: '' },
    resolver: yupResolver(addTopicSchema),
  })

  const { handleSubmit } = methods
  const formSubmit = handleSubmit(data => {
    const requestData = {
      id: uuid.v4(),
      title: data.title,
      comments: []
    }
    // todo метод отправки данных
    //post(requestData)
    console.log(requestData)
    setShowAddTopic(false)

  })

  return (
    <Popover
      open={showAddTopic}
      onClose={() => setShowAddTopic(false)}
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
            Название топика
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
