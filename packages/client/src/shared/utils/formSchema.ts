import * as yup from 'yup'

const login = /^(?=.*[A-Za-z])[A-Za-z\d-_]{3,20}$/
const email = /^\S+@\S+\.([A-Za-z]{2,4})$/
const password = /^(?=.*[A-Z])(?=.*\d).{8,40}$/
const phone = /^[\d+][\d() -]{10,15}\d$/

const ERROR_MESSAGE = {
  name: 'Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис).',
  login:
    'От 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание).',
  email:
    'Латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы.',
  password:
    'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.',
  phone: 'От 10 до 15 символов, состоит из цифр, может начинается с плюса.',
  isRequired: 'Поле обязательно для заполнения ',
}
export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-ZЁА-Я][A-Za-zЁёА-Яа-я-]*$/, ERROR_MESSAGE.name),
  lastName: yup
    .string()
    .matches(/^[A-ZЁА-Я][A-Za-zЁёА-Яа-я-]*$/, ERROR_MESSAGE.name),
  email: yup.string().matches(email, ERROR_MESSAGE.email),
  password: yup.string().matches(password, ERROR_MESSAGE.password),
  phone: yup.string().matches(phone, ERROR_MESSAGE.phone),
  login: yup.string().matches(login, ERROR_MESSAGE.login),
})

export const profileSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-ZЁА-Я][A-Za-zЁёА-Яа-я-]*$/, ERROR_MESSAGE.name),
  lastName: yup
    .string()
    .matches(/^[A-ZЁА-Я][A-Za-zЁёА-Яа-я-]*$/, ERROR_MESSAGE.name),
  email: yup.string().matches(email, ERROR_MESSAGE.email),
  phone: yup.string().matches(phone, ERROR_MESSAGE.phone),
  login: yup.string().matches(login, ERROR_MESSAGE.login),
})

export const passwordSchema = yup.object().shape({
  oldPassword: yup.string().required(ERROR_MESSAGE.isRequired),
  newPassword: yup.string().matches(password, ERROR_MESSAGE.password),
})

export const authSchema = yup.object().shape({
  password: yup.string().required(ERROR_MESSAGE.isRequired),
  login: yup.string().required(ERROR_MESSAGE.isRequired),
})

export const addTopicSchema = yup.object().shape({
  title: yup.string().required(ERROR_MESSAGE.isRequired),
})

export const addCommentSchema = yup.object().shape({
  title: yup.string().required(ERROR_MESSAGE.isRequired),
})

export const addReplySchema = yup.object().shape({
  title: yup.string().required(ERROR_MESSAGE.isRequired),
})
