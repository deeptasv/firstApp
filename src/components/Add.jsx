import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Add = ({person}) => {
    const[page,setPage]=useState('parvathi')
    const [count,setCount]=useState(0)
    const[form,setForm]=useState({
      name:person.name,
      email:person.email,
      password:person.password,
      address:person.address
    })
    function valueAdd()
    {
        //setCount(count+1)
        console.log(form)
    }
    function valueCap(e)
    {
      //console.log(e)
      setForm({...form,[e.target.name]:e.target.value})
     
    }
  return (
   
    <Box
    style={{marginTop:'5%'}}
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  ><h1>Welcome to {page} page</h1>
    <div>
      <TextField
        required
        id="outlined-required"
        label="NAME"
        value={form.name}
        name="name"
        onChange={valueCap}
      />
      </div>
      <div>
      <TextField
        
        id="outlined-disabled"
        label="EMAIL"
        type="email"
        name="email"
        value={form.email}
        onChange={valueCap}
      />
      </div>
      <div>
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        value={form.password}
        name='password'
        onChange={valueCap}
      />
      </div>
      <div>
      <TextField
        id="outlined-read-only-input"
        label="ADDRESS"
        value={form.address}
       name='address'
       onChange={valueCap}
      />
      </div>
      <div>
        <Button variant='contained' onClick={valueAdd}>Register</Button>
        <br></br>
        <small>Button is clicked {count} times</small>
      </div>
      </Box>
  )
}

export default Add