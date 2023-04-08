import React from 'react'
import { useLocation } from "react-router-dom";

const Resume = () => {
    const location = useLocation();
    //It contains any state that was passed to the component via the navigate function.
    const formData = location.state.formData;
    console.log("formData",formData);
    console.log(formData.skillDetails)
    
  return (
    <div>
    <div className="container">
    {/* <div className="row"> */}
      <div className="col-md-6">
        <h1>{formData.name}</h1>
        <h2>{formData.email}</h2>
        <h3>{formData.phoneNumber}</h3>
        <h3>{formData.address}</h3>
        <hr />
        <h3>Skills</h3>
        {formData.skillDetails.map((skills) => {
            return (
                <ul>
                    <li>{skills.text}</li>
              </ul>
            )
        })}
       
      </div>
      <hr />
      <div className="col-md-6">
        <h3>Education</h3>
        <p>{formData.educationInformation}</p>
        <p>{formData.extraEducationField}</p>
        <hr />
        <h3>Experience</h3>
        <h4>{formData.experienceInformation}</h4>
        <h4>{formData.extraExperienceField}</h4>
        <ul>
          <li>Developed and maintained the company website using HTML, CSS, and JavaScript</li>
          <li>Collaborated with the design team to create responsive and user-friendly interfaces</li>
        </ul>
      </div>
    {/* </div> */}
  </div>
</div>
  )
}

export default Resume