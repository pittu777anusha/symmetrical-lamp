import React, { useState, useEffect } from "react";
import FormRender from "../common/FormRender";
import CommonTable from "../common/CommonTable";
import StudentTable from "../common/StudentTable";
import DashBoard from "../DashBoard";
import Header from "../common/Header";

function Students() {
  // State to store the form data
  const [formData, setFormData] = useState([
    {
        label: "Student_id",
        type: "text",
        name: "student_id",
        value: "",
      },
      {
        label: "First Name",
        type: "text",
        name: "firstName",
        value: "",
      },
      {
        label: "Email",
        type: "email",
        name: "email",
        value: "",
      },
      {
        label: "Enrolled Courses",
        type: "select",
        name: "enrolledCourse",
        value: "",
      },
  ]);

  
  const [selectedRow, setSelectedRow] = useState(null);

  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    setStudentData(data);
  }, []);

  
  const [studentData, setStudentData] = useState([]);

  
  const saveData = (data) => {
    localStorage.setItem("students", JSON.stringify(data));
    setStudentData(data);
  };

  
  const addSubject = (subject) => {
    // Validation can be added here
    const data = [...studentData, subject];
    saveData(data);
  };

  
  const updateSubject = (subject) => {
    // Validation can be added here
    const data = [...studentData];
    data[selectedRow] = subject;
    saveData(data);
    setSelectedRow(null);
  };

 
  const deleteSubject = (index) => {
    const data = [...studentData];
    data.splice(index, 1);
    saveData(data);
  };

  return (
    <div>
       <Header/>
      {selectedRow === null ? (
        <FormRender
          formData={formData}
          onSubmit={(subject) => addSubject(subject)}
        />
      ) : (
        <FormRender
          formData={formData}
          onSubmit={(subject) => updateSubject(subject)}
        />
      )}
      <StudentTable
        studentData={studentData}
        onEdit={(index) => setSelectedRow(index)}
        onDelete={(index) => deleteSubject(index)}
      />
    </div>
  );
};

export default Students;
