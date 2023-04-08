import React, { useState } from 'react';
import { SkillList } from './SkillList';
import { WithContext as ReactTags } from 'react-tag-input';
import Resume from './Resume';
import { useNavigate } from 'react-router-dom';

//Mapping the skills list
const suggestions = SkillList.map(skills => {
    return{
        id: skills,
        text: skills
    }
})

//Define the keycodes for comma,enter in mac
const keyCodes = {
    comma: 43,
    enter: 76
}

//Adding the delimiters
//allows users to enter multiple tags at once, instead of having to enter them one by one.
const delimiters =[keyCodes.comma, keyCodes.enter]


const ResumeInformation = () => {
    const navigate = useNavigate();
    //Defining the state values using useState Hook to track the data and update the state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [educationInformation, setEducationInformartion] = useState("");
    const [experienceInformation, setExperienceInformation] = useState("");
    const [extraEducationField, setExtraEducationField] = useState("");
    const [extraExperienceField, setExtraExperienceField] = useState([]);
    //Creating a state variables for the adding Text fields
    const [addEducationFields, setAddEducationFields] = useState(0);
    const [addExperienceFields, setAddExperienceFields] = useState(0);
    //Create a state variable for skillslist 
    const [skillDetails, setSkillsDetails] = useState([]);

    //Trigerring the handleEducationTextFields
    const handleAddEducationTextFields = () => {
        setAddEducationFields(addEducationFields + 1)
    }

    //Trigerring the handleExperienceTextFields
    const handleAddExperienceTextFields = () => {
        setAddExperienceFields(addExperienceFields + 1)
    }

    //Adding the skills
    const handleAddition= (skill) => {
        setSkillsDetails([...skillDetails, skill])
    }

  

    //Deleting the skills based on id
    const handleDelete = (i) => {
        setSkillsDetails(skillDetails.filter((tag, index) => index !== i))
    }

    //Submitting the form
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            address: address,
            educationInformation: educationInformation,
            extraEducationField: extraEducationField,
            experienceInformation: experienceInformation,
            extraExperienceField: extraExperienceField,
            skillDetails: skillDetails
        }
        //Navigate to Resume component
        //Passing the formData in state options
        navigate("/resume", {state: { formData: formData }})

    }

 
  return (
    <div className='resume-information'>
       <form onSubmit={handleSubmit}>
        {/* 
            Profile Information details
        */}
        <h4 className='text-center mt-5'>Profile Information</h4>
        <section className='d-flex text-center flex-column'>
        <div className='profile-information d-flex justify-content-center mt-3'>
                <div className='form-group mr-5'>
                    <label htmlFor='name'>Name</label>
                    <input 
                        className='form-control'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='Email'>Email address</label>
                    <input 
                        className='form-control'
                        type='email'
                        value={email}
                        placeholder='john@email.com'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <div className='d-flex justify-content-center mt-3'>
            <div className='form-group mr-5'>
                <label htmlFor='phone'>Phone Number</label>
                <input 
                  className='form-control'
                  type='tel'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            <div className='form-group'>
              <label htmlFor='address'>Address</label>
                <input 
                  className='form-control'
                  type='text'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />  
            </div>
          </div>
        </section>
        <div className='dropdown-divider'></div>
        {/* 
            Education and Experience Details Information 
        */}
        <h4 className='title mt-5 text-center'>Education and Experience Information</h4>
        <section className='education-experience'>
            <div className='education-info form-group mr-5 d-flex flex-column align-items-center mt-5'>
                <label htmlFor='education-details'>Education Details</label>
                <input 
                    className='form-control'
                    type='text'
                    required
                    value={educationInformation}
                    placeholder='IIT Bombay, EEE, 2020'
                    onChange={(e) => setEducationInformartion(e.target.value)}
                    style={{ width: '20%'}}
                />
                {/* Adding the Text fields by button click */}
                {Array.from({ length: addEducationFields }).map((detail, index) => (
                    <input 
                        key={index}
                        type='text'
                        className='form-control'
                        required
                        value={detail}
                        placeholder='IIT Bombay, EEE, 2020'
                        onChange={(e) => setExtraEducationField(e.target.value)}
                        style={{ width: '20%', marginTop: 10 }}
                    />
                ))}
                <button 
                    type="button" 
                    className="btn btn-primary mt-3"
                    onClick={handleAddEducationTextFields}
                >
                    Add More
                </button>
            </div>
            <div className='experience-info form-group mr-5 d-flex flex-column align-items-center mt-5'>
                <label htmlFor='experience-details'>Experience Details</label>
                <input 
                    className='form-control'
                    type='text'
                    required
                    value={experienceInformation}
                    placeholder='impres.ai, software Engineer '
                    onChange={(e) => setExperienceInformation(e.target.value)}
                    style={{ width: '20%'}}
                />
                {/* Adding the Text fields by button click */}
                {Array.from({ length: addExperienceFields }).map((detail, index) => (
                    <input 
                        key={index}
                        type='text'
                        className='form-control'
                        required
                        value={detail}
                        placeholder='impres.ai, software Engineer '
                        onChange={(e) => setExtraExperienceField(e.target.value)}
                        style={{ width: '20%', marginTop: 10 }}
                    />
                ))}
                <button 
                    type="button" 
                    className="btn btn-primary mt-3"
                    onClick={handleAddExperienceTextFields}
                >
                    Add More
                </button>
            </div>
        </section>
        <div className='dropdown-divider'></div>

        {/* 
            Skill set Information
        */}
        <h4 className='title mt-5 text-center'>Skill set</h4>
        <section className='skillset-information d-flex flex-column align-items-center mt-3'>
        <ReactTags 
            tags={skillDetails}
            suggestions={suggestions}
            delimiters={delimiters}
            handleAddition={handleAddition}
            handleDelete={handleDelete}
            inputFieldPosition='top'
            autocomplete
        />
        </section>
        <div className='dropdown-divider'></div>
        <footer className='form-submission'>
            <button 
                className="btn btn-primary d-flex"
                style={{ margin: '0px auto' }}
                type="submit"
                >
                    Submit
                </button>
        </footer>
       </form>
    </div>
  )
}

export default ResumeInformation