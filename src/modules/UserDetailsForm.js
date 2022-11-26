import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { TextField, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import {
  StyledUserWrapper,
  FormWrapper,
  LabelWrapper,
  AlignCenter,
} from './Styles'

const UserDetailsForm = ({ onSubmit, actionType = '' }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const params = useParams()
  const users = useSelector(store => store.usersInformation)
  const existingUser = users?.filter(user => user?.id === params?.id) || {}
  let name = ''
  let email = ''
  if (existingUser && existingUser[0]) {
    name = existingUser[0]?.name
    email = existingUser[0]?.email
  }

  return (
    <StyledUserWrapper>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <LabelWrapper>{actionType ? 'update' : 'create'} Employee</LabelWrapper>
        <TextField
          defaultValue={name}
          label="Name"
          inputProps={{ type: 'text', placeholder: 'Enter your name' }}
          autoComplete="off"
          {...register('name', {
            required: 'Valid Name required!',
            pattern: {
              value: /^[A-Z0-9._%+-\s]{2,}$/i,
              message: 'Invalid name',
            },
          })}
          error={!!errors?.name}
          helperText={errors?.name ? errors.name.message : null}
        />
        <TextField
          defaultValue={email}
          label="Email"
          inputProps={{ type: 'email', placeholder: 'Enter your email' }}
          autoComplete="off"
          {...register('email', {
            required: 'Valid Email required!',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          error={!!errors?.email}
          helperText={errors?.email ? errors.email.message : null}
        />
        <AlignCenter>
          <Button type="submit" variant="contained" color="primary">
            {actionType ? 'update' : 'add'} employee
          </Button>
        </AlignCenter>
      </FormWrapper>
    </StyledUserWrapper>
  )
}

export default UserDetailsForm
