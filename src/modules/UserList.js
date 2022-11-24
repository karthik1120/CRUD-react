import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../reduxConfig'
import EmployeeTable from './EmployeeTable'

const StyleWrapper = styled.div`
  /* padding: 40px 20px;
  height: 150vh;
  @media screen and (max-width: 480px) {
    padding: 20px 0px;
  } */
`

const StyledPlaceholder = styled.p`
  display: grid;
  place-content: center;
  color: #a1a1a1;
`

const UserList = () => {
  const dispatch = useDispatch()
  const users = useSelector(store => store.usersInformation)
  const handleRemoveUser = id => {
    dispatch(deleteUser({ id }))
  }

  return (
    <StyleWrapper>
      <div>
        {users.length ? (
          <div>
            <EmployeeTable users={users} handleRemoveUser={handleRemoveUser} />
          </div>
        ) : (
          <StyledPlaceholder>No Employees Found</StyledPlaceholder>
        )}
      </div>
    </StyleWrapper>
  )
}

export default UserList
