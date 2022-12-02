
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
import SearchBar from '../../Components/SearchBar';

import {
  Divider,
  Box,
  Typography,
  Container
} from "@mui/material";


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




export default function CustomizedTables(props: any) {
  const [searchInput, setSearchInput] = React.useState("");


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
    <>
      <Container sx={{ m: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", width: "fit-content" }}>
          <Typography variant="h5" sx={{ mr: 1.5 }}>
            Admin Home
          </Typography>
          {/* <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ borderColor: "secondary.main" }}
          /> */}

        </Box>
      </Container>
      <hr></hr>
      <Box>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput}></SearchBar>
      </Box>
      <TableContainer component={Paper} sx={{ m: 7, maxWidth: '85%', maxHeight: '70vh' }}>

        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">ID</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Challenges</StyledTableCell>
              <StyledTableCell align="center">Tricks</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {brandStats.filter((row: any) => {
              return searchInput === ""
                ? row
                : row.email
                  ?.includes(searchInput.toLowerCase());
            }).map((row: any) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="center">{row?.id}</StyledTableCell>
                <StyledTableCell align="center">{row?.name}</StyledTableCell>
                <StyledTableCell align="center">{row?.email}</StyledTableCell>
                <StyledTableCell align="center">{row?.challenges.length}</StyledTableCell>
                <StyledTableCell align="center">{row?.tricks.length}</StyledTableCell>

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </>
  );

}
