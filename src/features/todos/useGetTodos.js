import { useContext, useEffect } from "react"
import { axiosInstance } from "../../lib/axiosInstance"
import { AppCreateContext } from "../../App"

export const useGetTodos = ()=>{
  const {todos,setTodos, loading,setLoading} = useContext(AppCreateContext)

  const axiosTodos = async ()=>{
    try {
      setLoading(true)
      const response = await axiosInstance.get("/dataUser")
      setTodos(response.data)
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    axiosTodos()
  },[])
  
 return {
  todos,
  loading,
  setLoading
 }
}