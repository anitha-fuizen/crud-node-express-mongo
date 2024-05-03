
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Users = () => {
   const [users,setUsers]=useState([])

   const handledelete=(id)=>{
    axios.delete('http://localhost:3001/deleteUser/'+id)
    .then(result=>{console.log(result)
        alert('deleted')
        window.location.reload()
    })
    .catch(err=>console.log(err))
   }

  useEffect(() => {
    axios.get('http://localhost:3001')
    .then(result=>setUsers(result.data))
    .catch(err=>console.log(err))
    {console.log(users)}
  }, [])
  
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center alifn-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to="/create" className="btn btn-success">Add+</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return(
                            <tr key={user.id}>
                           <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                            <Link to={`/update/${user._id}`}className='btn btn-success  btn-sm mr-1'style={{ marginRight: '5px' }}>update</Link>
                            <button  className='btn btn-success  btn-sm' onClick={(e)=>handledelete(user._id)}>Delete</button>
                            </td>
                            </tr>
                        )
                    }) 
                }
            </tbody>
        </table>
        </div>
        
    </div>
  )
}

export default Users