import React, { useState } from 'react'
import { useGetTodos } from '../features/todos/useGetTodos'
import { useDeleteTodo } from '../features/todos/useDeleteTodo'
import { Spinners } from '../features/custome/Spinners'
import { AlertDelete } from '../features/custome/AlertDelete'
import { useNavigate } from 'react-router-dom'

export const MainTodos = () => {
  const {todos, loading} = useGetTodos()
  const {deleted, suksesDel} = useDeleteTodo()
  const navigate = useNavigate()
  const [search,setSearch] = useState("")
  const [slices,setSlices] = useState(3)

  const deleteTodo = (id)=>{
    const cekDelete = confirm("anda yakin menghapus ini?")
    if(cekDelete){
      deleted(id)
    }  
  }

  const editTodo = (id)=>{
    navigate(`/edit/${id}`)  
  }
  
  return (
    <div className='p-1'>
      {suksesDel ? <AlertDelete/>: null}
      <div className='mt-7 justify-center flex'>
        <input value={search} onChange={(e)=> setSearch(e.target.value)} type="text" className='w-full lg:w-[740px] rounded-md p-1 px-2 text-sm focus:outline-blue-800 border-2 border-blue-500' placeholder='Search'/>
      </div>
      {
        loading ? <Spinners/> :
        <div className='grid justify-center'>
          <div className='overflow-x-auto'>
            <table className='sm:w-[400px] lg:w-[740px] text-left mt-3 border-separate  border-2 border-blue-900'>
            <thead className='bg-blue-300'>
              <tr>
                <th className='p-2 text-sm'>Nama Lengkap</th>
                <th className='p-2 text-sm'>Email</th>
                <th className='p-2 text-sm'>Pekerjaan</th>
                <th className='p-2 text-sm' colSpan={2}>actions</th>
              </tr>
            </thead>
            <tbody className='border border-gray-400'>
              {
                todos
                  .slice(0,slices)
                  .filter(item => item.nama_lengkap.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase()))
                  .map((todo)=>{
                    return(
                      <tr className='' key={todo.id}>
                        <td className='p-2 text-sm border-2 border-blue-900 '>{todo.nama_lengkap}</td>
                        <td className='p-2 text-sm border-2 border-blue-900'>{todo.email}</td>
                        <td className='p-2 text-sm border-2 border-blue-900'>{todo.pekerjaan}</td>
                        <td className='p-2 text-sm border-2 border-blue-900'>
                          <button className='bg-blue-500 p-1 rounded-sm hover:bg-blue-300' onClick={()=>deleteTodo(todo.id)} >del</button>
                        </td>
                        <td className='p-2 text-sm border-2 border-blue-900'>
                          <button className='bg-blue-500 p-1 rounded-sm hover:bg-blue-300' onClick={()=> editTodo(todo.id)}>edit</button>
                        </td>
                      </tr>
                    )
                })
              }
            </tbody>
            <tfoot className='w-full text-center'>
              <tr className='p-1 gap-1'>
                <td colSpan={5}>
                  <button className='bg-blue-500 hover:bg-blue-300 p-1 mx-1 w-[200px] font-semibold rounded-sm' onClick={()=> setSlices(slices - 3 === 0 ? slices : slices - 3)}>prev</button>
                  <button className='bg-blue-500 hover:bg-blue-300 p-1 mx-1 w-[200px] font-semibold rounded-sm' onClick={()=> setSlices(slices + 3)}>next</button>
                </td>
              </tr>
            </tfoot>
          </table>
          </div>
      </div> 
      }
    </div>
  )
}
