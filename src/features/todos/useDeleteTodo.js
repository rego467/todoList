import { useContext } from "react"
import { axiosInstance } from "../../lib/axiosInstance"
import { AppCreateContext } from "../../App"

export const useDeleteTodo = ()=>{
  const {setTodos, suksesDel,setSuksesDel} = useContext(AppCreateContext)
  
  const deleted = async(id)=>{
    try {
      setSuksesDel(true)
      await axiosInstance.delete(`/dataUser/${id}`)
        .then((res)=>{
          console.log(res, "res")
          setTodos(prev => prev.filter(item => item.id !== id) )
        })     
    } catch (error) {
      console.log(error)
    } finally{
      setSuksesDel(false)
    }
  }

  return{
    deleted,
    suksesDel
  }
}