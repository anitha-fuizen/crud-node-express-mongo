import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Update = () => {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [age,setAge]=useState('')
  const navigate= useNavigate()
  const {id} =useParams();

  const update=(e)=>{
    e.preventDefault();
    axios.put('http://localhost:3001/Update/'+id,{name,email,age})
    .then(result=>{
        console.log(result)
        navigate('/')
    })
    .catch(err=>console.log(err))
  }

  useEffect(() => {
    axios.get('http://localhost:3001/getUser/'+id)
    .then(result=>{console.log(result)
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
    })
    .catch(err=>console.log(err))
   
  }, [])
  
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={update}>
            <h2>update user</h2>
            <div className='mb-2'>
            <label htmlFor=''>Name</label>
            <input type='text' placeholder='enter your name' className='form-control' value={name}  onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='mb-2'>
            <label htmlFor=''>Email</label>
            <input type='email' placeholder='enter your mail' className='form-control' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='mb-2'>
            <label htmlFor=''>Age</label>
            <input type='text' placeholder='enter your age' className='form-control' value={age}  onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <button className='btn btn-success'>Submit</button>
        </form>
        </div>
        </div>
      )
}

export default Update