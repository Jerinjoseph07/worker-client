import { Button,TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'


const WorkerReg = () => {

        var [inputs,setInputs]=useState({
          "name":'',
          "phone":'',
          "job":'',
          "experience":'',
          "location":'',
        });
      
  const inputHandler =(event) =>{
    const {name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
  }
  const addHandler=() =>{
    axios.post("http://localhost:3005/new",inputs)
    .then((Response)=>{
      alert("record saved")
    })
      .catch(err=>console.log(err))
    }
  return (
    <div>
      <TextField 
label=" Full Name" 
name="name"
 variant="outlined" 
 value={inputs.name}
  onChange={inputHandler} /> <br />
<TextField
id="outlined-basic"
label="Phone number" 
name="phone" 
variant="outlined" 
value={inputs.phone} 
onChange={inputHandler} /><br />
<TextField 
id="outlined-basic"
label="Applying for Position"
name="job"
variant="outlined"
value={inputs.job}
 onChange={inputHandler}/><br />
    <TextField 
id="outlined-basic"
label="experience"
name="experience"
variant="outlined"
value={inputs.experience}
 onChange={inputHandler}/><br />
  <TextField 
id="outlined-basic"
label="location"
name="location"
variant="outlined"
value={inputs.location}
 onChange={inputHandler}/><br />
  <Button variant="contained" onClick={addHandler}>OK</Button>
    </div>
  )
}

export default WorkerReg