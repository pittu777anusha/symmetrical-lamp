
import React, { useState, useEffect } from "react";
import FormRender from "../common/FormRender";
import CommonTable from "../common/CommonTable";
import DashBoard from "../DashBoard";
import Header from "../common/Header";

function Subject() {
  // State to store the form data
  const [formData, setFormData] = useState([
    {
      label: "Subject Name",
      type: "text",
      name: "subjectName",
      value: "",
    },
    {
      label: "Description",
      type: "text",
      name: "description",
      value: "",
    },
    {
      label: "Course",
      type: "text",
      name: "code",
      value: "",
    },
    {
      label: "Duration (in hours)",
      type: "number",
      name: "duration",
      value: "",
    },
    {
      label: "Price",
      type: "number",
      name: "price",
      value: "",
    },
  ]);

  
  const [selectedRow, setSelectedRow] = useState(null);

  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("subjects")) || [];
    setTableData(data);
  }, []);

  
  const [tableData, setTableData] = useState([]);

  
  const saveData = (data) => {
    localStorage.setItem("subjects", JSON.stringify(data));
    setTableData(data);
  };

  
  const addSubject = (subject) => {

    const data = [...tableData, subject];
    saveData(data);
  };

  
  const updateSubject = (subject) => {

    const data = [...tableData];
    data[selectedRow] = subject;
    saveData(data);
    setSelectedRow(null);
  };

 
  const deleteSubject = (index) => {
    const data = [...tableData];
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
      <CommonTable
        tableData={tableData}
        onEdit={(index) => setSelectedRow(index)}
        onDelete={(index) => deleteSubject(index)}
      />
    </div>
  );
};

export default Subject;
