import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

const Createuser = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [age,setAge]=useState('')
  const navigate= useNavigate()

  const Submit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/Createuser',{name,email,age})
    .then(result=>{console.log(result)
    navigate('/')
  })
    .catch(err=>console.log(err))
  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
    <form onSubmit={Submit}>
        <h2>Add user</h2>
        <div className='mb-2'>
        <label htmlFor=''>Name</label>
        <input type='text' placeholder='enter your name' className='form-control' onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='mb-2'>
        <label htmlFor=''>Email</label>
        <input type='email' placeholder='enter your mail' className='form-control'onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='mb-2'>
        <label htmlFor=''>Age</label>
        <input type='text' placeholder='enter your age' className='form-control' onChange={(e)=>setAge(e.target.value)}/>
        </div>
        <button className='btn btn-success'>Submit</button>
    </form>
    </div>
    </div>
  )
}

export default Createuser