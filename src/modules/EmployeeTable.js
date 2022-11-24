import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material'

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledTableCell = styled(TableCell)`
  font-size: 18px !important;
  font-weight: 500 !important;
`

const ActionTableCell = styled(TableCell)`
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-evenly !important;
`
function EmployeeTable({ users, handleRemoveUser }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Employee Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(row => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row?.name}
              </TableCell>
              <TableCell align="center">{row?.email}</TableCell>
              <ActionTableCell align="right">
                <StyledLink to={`edit/${row?.id}`}>
                  <Button variant="contained" color="info">
                    Edit
                  </Button>
                </StyledLink>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleRemoveUser(row?.id)}
                >
                  Delete
                </Button>
              </ActionTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default EmployeeTable
