import { axiosInstance } from "../../lib/axiosInstance"
import { useContext } from "react"
import { AppCreateContext } from "../../App"
import { useNavigate } from "react-router-dom"

export const useCreateTodo = ()=>{
  const {setTodos, eror, setEror} = useContext(AppCreateContext)
  const navigate = useNavigate("/")
  
  const createTodo = async(newPost)=>{
    try {

      const response = await axiosInstance.post("/dataUser", newPost)
      setTodos(prev=> [...prev, response.data])
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  
  return {
    createTodo,
    eror,
    setEror
  }

}