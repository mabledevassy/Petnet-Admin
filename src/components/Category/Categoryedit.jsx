import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import Topbar from '../Adminpanel/Topbar'
import Sidebar from '../Adminpanel/Sidebar'
import './Category.css'

const Categoryedit = (props) => {
    var[inputs,setInputs]=useState(props.data)
    const inputHandler=(event)=>
    {

        const { name, value } =event.target
        setInputs((inputs) => ({ ...inputs,[name]: value }))
        console.log(inputs)
    }
    const addHandler=()=>{
        if(props.method==='put'){
            axios.put("http://localhost:3005/edit/"+inputs._id,inputs)
            .then(response=>{
                console.log("post data"+response.data)
                alert("Success")
                window.location.reload(false)
            })
            .catch(err=>console.log(err))
        }
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
          <Button variant="contained"onClick={addHandler}>Update</Button>
        </div>
      )
  
}

export default Categoryedit
