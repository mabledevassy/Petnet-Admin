import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import Sidebar from '../Adminpanel/Sidebar';
import Topbar from '../Adminpanel/Topbar';
import './Category.css'

const Category = () => {
  var[inputs,setInputs]=useState({
    "Cname":'',
    "Status":'Active'
  })
  

  const inputHandler =(event) =>{
    const{name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
  }

    const addHandler=() =>{
      console.log("Clicked")

      console.log(inputs)
      axios.post("http://localhost:3005/new",inputs)
      .then((response)=>{
        alert("Record Saved")
      })
      .catch(err=>console.log(err))
      
  }


  return (
   
    <div className='aa'>
       <Topbar/>
      <Sidebar/>
      <h3>Category</h3>
      <TextField label="category name" variant="outlined" name="Cname" value={inputs.Cname}onChange={inputHandler}/><br/><br/>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
  <InputLabel id="demo-simple-select-label">Status</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    name="Status" value={inputs.Status}
onChange={inputHandler}    
   
  >
    <MenuItem value={"Active"}>Active</MenuItem>
    <MenuItem value={"InActive"}>InActive</MenuItem>
    
  </Select>
</FormControl><br/><br/><br/>
      <Button variant="contained"onClick={addHandler}>Submit</Button>
    </div>
  )
}

export default Category