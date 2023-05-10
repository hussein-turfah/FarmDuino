import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'; 
import UseHttp from '../../../hooks/http-request';


const UsersTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [users, setUsers] = React.useState([]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {

    const userData = async () => {
      try {
        const users = await UseHttp("admin/users", "GET", "",{Authorization: "bearer " + localStorage.getItem("token")})
        const rowdata = []

        for (let i = 0; i < users.length; i++) {
          rowdata.push(users[i]['id'],users[i]['first_name'],users[i]['last_name'], users[i]['email'], users[i]['plant_name'], users[i]['is_admin'])
        }
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    userData();
  }, []);


  return (
    <div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
             </TableRow>
          </TableHead>
          <TableBody>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  )
}
export default UsersTable