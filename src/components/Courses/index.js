import React,{useState,useEffect} from 'react'
import FormRender from '../common/FormRender';
import CommonTable from '../common/CommonTable';
import CourseTable from '../common/CourseTable';
import DashBoard from '../DashBoard';
import Header from '../common/Header';

function Courses() {
    const [formData, setFormData] = useState([
        {
          label: "Course_id",
          type: "text",
          name: "course_id",
          value: "",
        },
        {
          label: "Course Name",
          type: "text",
          name: "course_name",
          value: "",
        },
        {
          label: "Instructor",
          type: "text",
          name: "instructor",
          value: "",
        },
        {
          label: "Enrolled Courses",
          type: "text",
          name: "enrolledCourses",
          value: "",
        },
        
      ]);
    
      
      const [selectedRow, setSelectedRow] = useState(null);
    
      
      useEffect(() => {
        const data = JSON.parse(localStorage.getItem("courses")) || [];
        setCourseData(data);
      }, []);
    
      
      const [courseData, setCourseData] = useState([]);
    
      
      const saveData = (data) => {
        localStorage.setItem("courses", JSON.stringify(data));
        setCourseData(data);
      };
    
      
      const addSubject = (subject) => {
        
        const data = [...courseData, subject];
        saveData(data);
      };
    
      
      const updateSubject = (subject) => {
      
        const data = [...courseData];
        data[selectedRow] = subject;
        saveData(data);
        setSelectedRow(null);
      };
    
     
      const deleteSubject = (index) => {
        const data = [...courseData];
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
          <CourseTable
            courseData={courseData}
            onEdit={(index) => setSelectedRow(index)}
            onDelete={(index) => deleteSubject(index)}
          />
        </div>
      )
}

export default Courses
