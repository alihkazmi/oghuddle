
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { adminContext } from '../../Context/AdminContext';
import useAdminData from '../../Hooks/useAdminData';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




export default function CustomizedTables() {
  const { AdminData } = useAdminData();
  const navigate = useNavigate();
  const { userType } = useParams();
  useEffect(() => {
    navigate(`/${userType}/landingpage/homepage`)
    AdminData();

  }, []);
  const { brandStats } = React.useContext(adminContext);
  console.log('brand----------------', brandStats)

  return (
    <TableContainer component={Paper} sx={{ m: 7, maxWidth: '85%', maxHeight: '70vh' }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Challenges</StyledTableCell>
            <StyledTableCell align="right">Tricks</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {brandStats.map((row: any) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="right">{row?.id}</StyledTableCell>
              <StyledTableCell align="right">{row?.name}</StyledTableCell>
              <StyledTableCell align="right">{row?.email}</StyledTableCell>
              <StyledTableCell align="right">{row?.challenges.length}</StyledTableCell>
              <StyledTableCell align="right">{row?.tricks.length}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
