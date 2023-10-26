import { axiosInstance } from "../../lib/axiosInstance"
import { useContext } from "react"
import { AppCreateContext } from "../../App"
import { useNavigate } from "react-router-dom"

export const useEditTodo = ()=>{
  const {setTodos} = useContext(AppCreateContext)
  const navigate = useNavigate()
  
  const edit = async(id,newEdit)=>{
    try {
      const response = await axiosInstance.put(`/dataUser/${id}`, newEdit)
      const updateTodo = [response.data]
      setTodos(updateTodo)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return {
    edit
  }
}