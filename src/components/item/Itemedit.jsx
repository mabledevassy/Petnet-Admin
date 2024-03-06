import { Textarea } from '@mui/joy'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './itemview.css'
import Topbar from '../Adminpanel/Topbar'
import Sidebar from '../Adminpanel/Sidebar'

const Itemedit = (props) => {
  var[selectedimage,setSelectedimage]=useState(null);

    var[ca,setCa]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:3005/categoryview")
      .then(response=>{
        console.log(response.data)
        setCa(response.data)

      })
      .catch(err=>console.log(err))
    },[])
    var[subca,setSubca]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:3005/subview")
      .then(response=>{
        console.log(response.data)
        setSubca(response.data)

      })
      .catch(err=>console.log(err))
    },[])

    var[inputs,setInputs]=useState(props.data)
    const inputHandler =(event) =>{
        const{name,value}=event.target
        setInputs((inputs)=>({...inputs,[name]:value}))
        console.log(inputs)
      }
      const handleImage=(event)=>{
        const file=event.target.files[0];
        setSelectedimage(file)
        inputs.image1=file;
    }
      // const addHandler=()=>{
      //   if(props.method==='put'){
    
      //       axios.put("http://localhost:3005/editi/"+inputs._id,inputs)
      //         .then(response=>{
      //           console.log("post data"+response.data)
      //         alert("Success")
      //           window.location.reload(false)
      //       })
      //       .catch(err=>console.log(err))
      //   }
      const updatedata=()=>{
        const formdata=new FormData();
        formdata.append('Category',inputs.Category);
        formdata.append('Subcategory',inputs.Subcategory);
        formdata.append('Description',inputs.Description);
        formdata.append('Price',inputs.Price);
        formdata.append('image1',selectedimage)
        fetch('http://localhost:3005/editi/${inputs._id}',
        {
            method:'put',
            body:formdata,
        })
        .then((response)=>response.json())
        .then((data)=>{
            alert("record saved")
        })
        .catch((err)=>{
            console.log("error")
        })
    }
  return (
    <div className='vv'>
        <Topbar/>
        <Sidebar/>
         <h3>Item Registeration</h3>
       <FormControl sx={{ m: 1, minWidth: 120 }}>
  <InputLabel id="demo-simple-select-label">Category</InputLabel>
  <Select
   labelId="demo-simple-select-label"
    name='Category'value={inputs.Category} onChange={inputHandler}>
    {
      ca.map((value,index)=>{
        return(
          <MenuItem key={index}
          value={value.Cname} >{value.Cname}</MenuItem>
        )
      })
    }
  </Select>
</FormControl><br/><br/>
<FormControl sx={{ m: 1, minWidth: 120 }}>
  <InputLabel id="demo-simple-select-label">Subcategory</InputLabel>
  <Select
   labelId="demo-simple-select-label"
    name='Subcategory'value={inputs.Subcategory} onChange={inputHandler}>
    {
      subca.map((value,index)=>{
        return(
          <MenuItem key={index}
          value={value.Sname} >{value.Sname}</MenuItem>
        )
      })
    }
  </Select><br /><br />
  <Textarea name="Description" placeholder="Description" variant="outlined" value={inputs.Description} onChange={inputHandler}/>
</FormControl><br/><br/>
<TextField label="Price" variant="outlined" name="Price" value={inputs.Price} onChange={inputHandler}/><br/><br/>
<label>Upload file</label>
        <input type="file" onChange={handleImage}></input>
        <br /><br />
<Button variant="contained" onClick={updatedata} >Update</Button>
    </div>
   
  )
}

export default Itemedit