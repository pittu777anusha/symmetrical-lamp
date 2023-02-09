import React, { useState } from "react";
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';

function FormRender ({ formData, onSubmit }){
  // State to store the form data
  const [values, setValues] = useState({});

  // Helper function to update the form data
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  // Helper function to submit the form
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values);
  };

  return (
   
    <form onSubmit={handleSubmit}>
      {formData.map((field, index) => (
        <div key={index}>

          {/* <label htmlFor={field.name}>{field.label}:</label> */}
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
          <TextField
          required
            type={field.type}
            label={field.label}
            name={field.name}
            value={values[field.name] || ""}
            
            onChange={handleChange}
          />
        </Box>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
    
    // <form onSubmit={handleSubmit}>
    //   {formData.map((field, index) => (
    //     <div key={index}>

    //       <label htmlFor={field.name}>{field.label}:</label>
    //       <input
    //         type={field.type}
    //         name={field.name}
    //         value={values[field.name] || ""}
    //         onChange={handleChange}
    //       />
    //     </div>
    //   ))}
    //   <button type="submit">Submit</button>
    // </form>
   

  );
};

export default FormRender;