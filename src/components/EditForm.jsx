import React,{useContext, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEditTodo } from '../features/todos/useEditTodo'
import { AppCreateContext } from '../App'
import { axiosInstance } from '../lib/axiosInstance'

export const EditForm = () => {
  const[namaLengkap,setNamaLengkap]=useState("")
  const[email,setEmail]=useState("")
  const[pekerjaan,setPekerjaan]=useState("")

  const {edit} = useEditTodo()
  const {id} = useParams()


  const tombolEdit = async ()=>{
    const newEdit = {
      nama_lengkap: namaLengkap,
      email,
      pekerjaan
    }  
   edit(id, newEdit)
  }

 
  return (
    <div className=' mb-10 flex flex-col p-2 mt-10'>
   
    <form className='bg-blue-400 p-2'>
      <label htmlFor="Nama Lengkap" className='mt-4 flex'>Nama Lengkap:</label>
      <input type="text" value={namaLengkap} onChange={(e)=> setNamaLengkap(e.target.value)} placeholder='Nama Lengkap' className='w-full rounded-sm mt-2 p-2' />

      <label htmlFor="Nama Lengkap" className="mt-4 flex">Email:</label>
      <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Nama Lengkap' className='w-full rounded-sm mt-2 p-2' />
      
      <label htmlFor="Nama Lengkap" className='mt-4 flex'>Pekerjaan:</label>
      <input type="text" value={pekerjaan} onChange={(e)=> setPekerjaan(e.target.value)} placeholder='Nama Lengkap' className='w-full rounded-sm p-2 mt-2' />

      <button type='button' className= "mt-4 flex bg-blue-900 p-2 rounded-md text-white" onClick={tombolEdit}>edit post</button>
    </form>
    </div>
  )
}
