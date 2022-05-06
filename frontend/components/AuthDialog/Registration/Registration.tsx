import React, { useState } from 'react'
import TextButton from '../../UI/TextButton'
import { FormProvider, useForm } from 'react-hook-form'
import FormField from '../../FormField/FormField'
import { RegisterFormSchema } from '../../../utils/validations'
import { yupResolver } from '@hookform/resolvers/yup'
import { setCookie } from 'nookies'
import { UserApi } from '../../../API/API'
import { CreateUserDto } from '../../../API/types'
import { Alert } from '@mui/material'

const Registration = () => {
  const [errorMessage, setErrorMessage] = useState('')

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  })

  const register = async (dto: CreateUserDto) => {
    try {
      const data = await UserApi.register(dto)
      setCookie(null, 'authToken', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        parh: '/',
      })
      setErrorMessage('')
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
        <FormField name='name' label='Name' />
        <FormField name='email' label='Email' />
        <FormField type='password' name='password' label='Password' />
      </FormProvider>
      {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
      <form onSubmit={form.handleSubmit(register)}>
        <TextButton
          type='submit'
          variant='contained'
          disabled={!form.formState.isValid || form.formState.isSubmitting}
        >
          Регистрация
        </TextButton>
      </form>
    </>
  )
}

export default Registration
