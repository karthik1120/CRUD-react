import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { addUser } from '../reduxConfig'
import UserDetailsForm from './UserDetailsForm'

const AddUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = data => {
    dispatch(
      addUser({
        id: uuidv4(),
        ...data,
      })
    )
    navigate('/')
  }
  return <UserDetailsForm onSubmit={onSubmit} />
}

export default AddUser
