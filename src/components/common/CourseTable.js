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

function CourseTable({courseData,setCourseData,onDelete,onEdit}){
  // State to store the table data
  // const [courseData, setCourseData] = useState([]);

  // // Fetch the data from local storage when the component mounts
  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("courseData")) || [];
  //   setCourseData(data);
  // }, []);

  // Helper function to save the data to local storage
  const saveData = (data) => {
    localStorage.setItem("courseData", JSON.stringify(data));
    setCourseData(data);
  };

  // Function to add a new row to the table
  const addRow = (newRow) => {
    // Validation can be added here
    const data = [...courseData, newRow];
    saveData(data);
  };

  // Function to update a row in the table
  const updateRow = (index, updatedRow) => {
    // Validation can be added here
    const data = [...courseData];
    data[index] = updatedRow;
    saveData(data);
  };

  // Function to delete a row from the table
  const deleteRow = (index) => {
    const data = [...courseData];
    data.splice(index, 1);
    saveData(data);
  };

  return (
    // <table>
    //   <thead>
    //     <tr>
    //       <th>Course Id</th>
    //       <th>Course Name</th>
    //       <th>Instructor</th>
    //       <th>Enrolled Courses</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {courseData.map((row, index) => (
    //       <tr key={index}>
    //         <td>{row.course_id}</td>
    //         <td>{row.course_name}</td>
    //         <td>{row.instructor}</td>
    //         <td>{row.enrolledCourses}</td>
    //         <td>
    //           <button onClick={() => onEdit(index, row)}>Edit</button>
    //           <button onClick={() => onDelete(index)}>Delete</button>
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
    <TableContainer>
    <Table sx={{ minWidth:700 }} aria-label="customized table">
    <TableHead>
    <TableRow>
    <StyledTableCell >Course Id</StyledTableCell>
    <StyledTableCell align="right">Course Name</StyledTableCell>
    <StyledTableCell align="right">Instructor</StyledTableCell>
    <StyledTableCell align="right">Enrolled Courses</StyledTableCell>
    <StyledTableCell align="right">Action</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {courseData.map((row, index) => (
        // <tr key={index}>
          <StyledTableRow key={index}>
            <StyledTableCell component="th" scope="row">{row.course_id}</StyledTableCell >
          <StyledTableCell align="right">{row.course_name} </StyledTableCell >
          <StyledTableCell align="right">{row.instructor} </StyledTableCell >
          <StyledTableCell align="right">{row.enrolledCourses} </StyledTableCell >
          
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

export default CourseTable;
