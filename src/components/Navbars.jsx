import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbars = () => {
  const navigate = useNavigate()
  
  const goToCreate = () => navigate("/create")
  const goToHome= ()=> navigate("/")
  return (
    <div className='bg-blue-600'>
      <div className='container mx-auto flex p-3 justify-between items-center'>
        <a className='uppercase text-white font-semibold cursor-pointer' onClick={goToHome}>todo simple</a>
        <button className='bg-blue-500 p-2 rounded-lg font-bold text-white' onClick={goToCreate}>create todo</button>
      </div>
    </div>
  )
}
