import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import Categoryedit from './Categoryedit';
import Topbar from '../Adminpanel/Topbar';
import Sidebar from '../Adminpanel/Sidebar';
import './Categoryview.css'

const Categorydetails = () => {
  var [category, setCategory] = useState([]);
  var [selected, setSelected] = useState();
  var [update, setUpdate] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3005/view")
      .then(response => {
        setCategory(response.data)
      })
      .catch(err => console.log(err))
  }, [])
  const updateValues = (row) => {
    setSelected(row)
    setUpdate(true)
  }
  var result =
    <div className='bb'>
       <Topbar/>
      <Sidebar/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Categoryname</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {category.map((row, pos) => {

              return (
                <TableRow
                  key={pos}>
                  <TableCell>
                    {row.Cname}
                  </TableCell>
                  <TableCell>{row.Status}</TableCell>
                  <TableCell><EditIcon onClick={() => updateValues(row)} /></TableCell>

                </TableRow>

              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  if (update)
    result = <Categoryedit data={selected} method='put' />
  return (result)
}

export default Categorydetails
