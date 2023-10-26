import React, { useState } from 'react'
import { useCreateTodo } from '../features/todos/useCreateTodo'

export const CreateForm = () => {
  const[namaLengkap,setNamaLengkap]=useState("")
  const[email,setEmail]=useState("")
  const[pekerjaan,setPekerjaan]=useState("")
  const {createTodo, eror,setEror} =useCreateTodo()

  const sendPost = ()=>{
    const newPost ={
      nama_lengkap: namaLengkap,
      email:email,
      pekerjaan:pekerjaan
    }  
  
    if(newPost.nama_lengkap === "" && newPost.email === "" && newPost.pekerjaan === ""){
      setEror(true)
      
      setTimeout(()=>{
        setEror(false)
      },1000)
    }else{
      createTodo(newPost)
    }
  }

  return (
    <div className=' mb-10 flex flex-col p-2 mt-10'>
    {eror ? <p className='bg-red-300 my-3 flex p-1 px-3 rounded-md font-bold text-white'>input tidak boleh kosong!!!</p> : null}
    <form className='bg-blue-400 p-2'>
      <label htmlFor="Nama Lengkap" className='mt-4 flex'>Nama Lengkap:</label>
      <input type="text" value={namaLengkap} onChange={(e)=> setNamaLengkap(e.target.value)} placeholder='Nama Lengkap' className='w-full rounded-sm mt-2 p-2' />

      <label htmlFor="Nama Lengkap" className="mt-4 flex">Email:</label>
      <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Nama Lengkap' className='w-full rounded-sm mt-2 p-2' />
      
      <label htmlFor="Nama Lengkap" className='mt-4 flex'>Pekerjaan:</label>
      <input type="text" value={pekerjaan} onChange={(e)=> setPekerjaan(e.target.value)} placeholder='Nama Lengkap' className='w-full rounded-sm p-2 mt-2' />

      <button type='button' className= "mt-4 flex bg-blue-900 p-2 rounded-md text-white" onClick={sendPost}>send post</button>
    </form>
    </div>
  )
}
