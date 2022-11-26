import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editUser } from '../reduxConfig'
import UserDetailsForm from './UserDetailsForm'

const EditUser = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  return <UserDetailsForm onSubmit={onSubmit} actionType />
}

export default EditUser
