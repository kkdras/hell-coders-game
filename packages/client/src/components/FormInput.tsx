import { TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { FC } from 'react'

export interface FormInputProps {
  name: string
  type?: string
  placeholder: string
}

export const FormInput: FC<FormInputProps> = ({
  name,
  type = 'text',
  placeholder
}) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextField
          error={!!errors[name]}
          helperText={errors[name]?.message as string}
          fullWidth
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          sx={{ mb: 2 }}
          type={type}
          placeholder={placeholder}
        />
      )}
    />
  )
}
