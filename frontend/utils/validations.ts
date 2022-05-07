import * as yup from 'yup'

export const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Неверная почта').required('Обязательное поле'),
  password: yup.string().required('Обязательное поле'),
})

export const RegisterFormSchema = yup
  .object()
  .shape({
    name: yup.string().required('Обязательное поле'),
  })
  .concat(LoginFormSchema)

export const AddProductSchema = yup.object().shape({
  email: yup.string().email('Неверная почта').required('Обязательное поле'),
  password: yup.string().required('Обязательное поле'),
})
