import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useDispatch } from 'react-redux'
import { FormProvider, useForm } from 'react-hook-form';
import { AuthForm } from './types';
import { SignInRequest } from '../../store/auth/const';
import { postAuth } from '../../store/auth/actions';
import { AnyAction } from '@reduxjs/toolkit';
import { FormInput } from '../../components/FormInput';


export function Auth() {
    const dispatch = useDispatch()
    const defaultValues = {
        login: '',
        password: '',
    }
    const methods = useForm<AuthForm>({ defaultValues })

    const { handleSubmit } = methods
    const formSubmit = handleSubmit(data => {
        const requestData: SignInRequest = {
            login: data.login,
            password: data.password,
        }
        console.log(data);
        dispatch(postAuth(requestData) as unknown as AnyAction)
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
                <Typography component="h1" variant="h5" mb={2}>
                    Вход
                </Typography>
                <FormProvider {...methods} >
                    <form onSubmit={formSubmit} >
                        <FormInput
                            placeholder='Логин'
                            type="text"
                            name="login"
                        />
                        <FormInput
                            name="password"
                            placeholder="Пароль"
                            type="password"
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

                    </form>
                </FormProvider>

            </Box>
        </Container>
    )
}
