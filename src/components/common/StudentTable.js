import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


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

function StudentTable({studentData,setStudentData,onDelete,onEdit}){
  // State to store the table data
  // const [studentData, setStudentData] = useState([]);

  // // Fetch the data from local storage when the component mounts
  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("studentData")) || [];
  //   setStudentData(data);
  // }, []);

  // Helper function to save the data to local storage
  const saveData = (data) => {
    localStorage.setItem("studentData", JSON.stringify(data));
    setStudentData(data);
  };

  // Function to add a new row to the table
  const addRow = (newRow) => {
    // Validation can be added here
    const data = [...studentData, newRow];
    saveData(data);
  };

  // Function to update a row in the table
  const updateRow = (index, updatedRow) => {
    // Validation can be added here
    const data = [...studentData];
    data[index] = updatedRow;
    saveData(data);
  };

  // Function to delete a row from the table
  const deleteRow = (index) => {
    const data = [...studentData];
    data.splice(index, 1);
    saveData(data);
  };

  return (
    // <TableContainer>
    //   <Table sx={{ minWidth: 700 }} aria-label="customized table">
    //   <TableHead>
    //   <TableRow>
    //   <StyledTableCell>Student Id</StyledTableCell>
    //   <StyledTableCell>First Name</StyledTableCell>
    //   <StyledTableCell>Email</StyledTableCell>
    //   <StyledTableCell>Enrolled Course</StyledTableCell>
    //   <StyledTableCell>Action</StyledTableCell>
    //       </TableRow>
    //    </TableHead>
    //    <TableBody>
    //     {studentData.map((row, index) => (
    //       <StyledTableRow key={index}>
    //        <StyledTableCell component="th" scope="row">{row.student_id}</StyledTableCell>
    //        <StyledTableCell align="right">{row.firstName}</StyledTableCell>
    //        <StyledTableCell align="right">{row.email}</StyledTableCell>
    //        <StyledTableCell align="right">{row.enrolledCourses}</StyledTableCell>
    //        <StyledTableCell align="right">
    //           <button onClick={() => onEdit(index, row)}>Edit</button>
    //           <button onClick={() => onDelete(index)}>Delete</button>
    //           </StyledTableCell>
    //         </StyledTableRow>
    //     ))}
    //   </TableBody>
    //   </Table>

    //   </TableContainer>
    <TableContainer>
    <Table sx={{ minWidth:700 }} aria-label="customized table">
    <TableHead>
    <TableRow>
    <StyledTableCell >Student Id</StyledTableCell>
    <StyledTableCell align="right">First Name</StyledTableCell>
    <StyledTableCell align="right">Email</StyledTableCell>
    <StyledTableCell align="right">Enrolled Course</StyledTableCell>
    <StyledTableCell align="right">Action</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {studentData.map((row, index) => (
        // <tr key={index}>
          <StyledTableRow key={index}>
            <StyledTableCell component="th" scope="row">{row.student_id}</StyledTableCell >
          <StyledTableCell align="right">{row.firstName} </StyledTableCell >
          <StyledTableCell align="right">{row.email} </StyledTableCell >
          <StyledTableCell align="right">{row.enrolledCourse} </StyledTableCell >
          
          <StyledTableCell align="right">
            <button onClick={() => onEdit(index, row)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
            </StyledTableCell>
            </StyledTableRow>
        /* </tr> */
      ))}
    </TableBody>
    </Table>
  </TableContainer>
  );
};

export default StudentTable;
