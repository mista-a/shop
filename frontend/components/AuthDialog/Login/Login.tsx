import { Alert } from '@mui/material'
import React, { useState } from 'react'
import styles from './Login.module.sass'
import TextButton from '../../UI/TextButton'
import { useForm, FormProvider } from 'react-hook-form'
import { LoginFormSchema } from '../../../utils/validations'
import { yupResolver } from '@hookform/resolvers/yup'
import FormField from '../../FormField/FormField'
import { LoginDto } from '../../../API/types'
import { setCookie } from 'nookies'
import { useAppDispatch } from '../../../redux/hooks'
import { setUserData } from '../../../redux/slices/user'
import { Api } from '../../../API'

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('')

  const dispatch = useAppDispatch()

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  })

  const login = async (dto: LoginDto) => {
    try {
      const data = await Api().user.login(dto)
      setCookie(null, 'shopToken', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        parh: '/',
      })
      setErrorMessage('')
      dispatch(setUserData(data))
    } catch (err) {
      console.warn('Register error', err)
      if (err.response) {
        setErrorMessage(err.response.data.message)
      }
    }
  }

  return (
    <>
      <FormProvider {...form}>
        <FormField name='email' label='Email' />
        <FormField name='password' label='Password' type='password' />
      </FormProvider>
      {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
      <form className={styles.form} onSubmit={form.handleSubmit(login)}>
        <TextButton
          type='submit'
          variant='contained'
          disabled={!form.formState.isValid || form.formState.isSubmitting}
        >
          Войти
        </TextButton>
      </form>
    </>
  )
}

export default Login
