import { TextField } from '@mui/material'
import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'

interface FormFieldProps {
  name: string
  label: string
  type?: string
}

const FormField: FC<FormFieldProps> = ({ name, label, type }) => {
  const { register, formState } = useFormContext()

  return (
    <TextField
      {...register(name)}
      name={name}
      label={label}
      variant='standard'
      type={type}
      error={!!formState.errors[name]?.message}
      helperText={formState.errors[name]?.message}
    />
  )
}

export default FormField
