import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form';
import { AuthForm } from './types';


export function Auth() {
    const dispatch = useDispatch()
    const defaultValues = {     
      login: '',     
      password: '',      
    }
    const methods = useForm<AuthForm>({ defaultValues })
  
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
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Вход
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="login"
                        label="Логин"
                        name="login"
                        autoComplete="login"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Авторизация
                    </Button>
                    <Link to="/register">
                        {"У вас нет акаунта? Регистрация"}
                    </Link>
                </Box>
            </Box>
        </Container>
    )
}
