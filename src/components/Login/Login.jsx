import React, { useState } from 'react'
import { Button, TextField } from '@mui/material' 
import axios from 'axios' 

import { useNavigate } from 'react-router-dom' 
 

const Login = () => {
  

var [inputs,setInputs]=useState({"username":'',"password":''}) 
 
const inputHandler = (event)=>{ 
const {name,value}=event.target 
setInputs((inputs)=>({...inputs,[name]:value})) 
console.log(inputs) 
     } 
 
const navigate=useNavigate() 
 
const checkData = async (event) => { 
    event.preventDefault(); 
 
    try { 
     const response = await 
     axios.post("http://localhost:3005/Loginsearch",
     { 
      username:inputs.username, 
      password:inputs.password, 
    }) 
    if (response.data.success) { 
        alert('Login successful'); 
        navigate('/Home'); 
      }  
      else { 
        alert('Invalid username and Password. Please try again.'); 
        console.log(response.data); 
 
      } 
    } catch (err) { 
      alert('Error occurred during login. Please try again.'); 
    } 
  }; 
     
   
  return (
    <div>
         <h3>Login</h3> 
          <TextField className="style2" required id="outlined-required" 
label="Required" 
        name="username"  value={inputs.username} 
        onChange={inputHandler} /> 
  <br /><br /> 
         <TextField 
          name="password" id="outlined-password-input" 
          label="Password" 
          type="password"  
          autoComplete="current-password" 
          value={inputs.password} 
          onChange={inputHandler}/> <br /><br />
     
         
               <Button variant="contained" onClick={checkData} >Login</Button> 
      
    </div>
  )
}

export default Login
