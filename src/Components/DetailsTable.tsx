import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  position: number,
  members: string,
  rewards: string,
  points: string,

) {
  return { position, members, rewards, points };
}

const rows = [
  createData(1, "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"),
  createData(2, "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"),
  createData(3, "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"),
  createData(4, "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"),
  createData(5, "Lorem Ipsum", "Lorem Ipsum", 'Lorem Ipsum',),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: 'whitesmoke' }}>
          <TableRow>
            <TableCell>Position</TableCell>
            <TableCell align="right">Members</TableCell>
            <TableCell align="right">Rewards</TableCell>
            <TableCell align="right">Points</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.position}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.position}
              </TableCell>
              <TableCell align="right">{row.members}</TableCell>
              <TableCell align="right">{row.rewards}</TableCell>
              <TableCell align="right">{row.points}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export { }