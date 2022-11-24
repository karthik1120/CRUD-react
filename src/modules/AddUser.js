import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { TextField, Button } from '@mui/material'
import { addUser } from '../reduxConfig'
import { useForm } from 'react-hook-form'

const StyledAddUserWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 40px 32px;
  border-radius: 3px;
  max-width: 450px;
  width: 100%;
  margin: auto;
  box-shadow: rgb(99 116 135 / 20%) 0px 2px 10px;
`

const AddUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    console.log('check dta', data)
    dispatch(
      addUser({
        id: uuidv4(),
        ...data,
      })
    )
    navigate('/')
  }
  return (
    <StyledAddUserWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Name"
          inputProps={{ type: 'text', placeholder: 'Enter your name' }}
          autoComplete="off"
          {...register('name', {
            required: 'Valid Name required!',
            pattern: {
              value: /^[A-Z0-9._%+-]{2,}$/i,
              message: 'Invalid name address',
            },
          })}
          error={!!errors?.name}
          helperText={errors?.name ? errors.name.message : null}
        />
        <br />
        <TextField
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
        <Button type="submit" variant="contained" color="primary">
          add user
        </Button>
      </form>
    </StyledAddUserWrapper>
  )
}

export default AddUser
