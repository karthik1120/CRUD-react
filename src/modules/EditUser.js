import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { TextField, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { editUser } from '../reduxConfig'

const StyledEditWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const EditUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm()
  const params = useParams()
  const dispatch = useDispatch()
  const users = useSelector(store => store.usersInformation)
  const navigate = useNavigate()
  const existingUser = users.filter(user => user.id === params.id)
  const { name, email } = existingUser[0]

  const handleEditUser = () => {
    setValues({ name: '', email: '' })
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        email: values.email,
      })
    )
    navigate('/')
  }

  const onSubmit = data => {
    console.log('check dta', data)

    dispatch(
      editUser({
        id: params.id,
        ...data,
      })
    )
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        defaultValue={name}
        label="Name"
        inputProps={{ type: 'text', placeholder: 'Enter your name' }}
        autoComplete="off"
        {...register('name', {
          required: 'Valid Name required!',
          pattern: {
            value: /^[A-Z0-9._%+-]{2,}$/i,
            message: 'Invalid name!',
          },
        })}
        error={!!errors?.name}
        helperText={errors?.name ? errors.name.message : null}
      />
      <br />
      <TextField
        defaultValue={email}
        label="Email"
        inputProps={{ type: 'email', placeholder: 'Enter your email' }}
        autoComplete="off"
        {...register('email', {
          required: 'Valid Email required!',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address!',
          },
        })}
        error={!!errors?.email}
        helperText={errors?.email ? errors.email.message : null}
      />
      <Button type="submit" variant="contained" color="primary">
        Update user
      </Button>
    </form>
  )
}

export default EditUser
