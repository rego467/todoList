
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Navbars } from './components/Navbars'
import { createContext, useState } from 'react'
import { Create } from './pages/Create'
import { Edit } from './pages/Edit'

export const AppCreateContext = createContext({})

function App() {
  const [ todos,setTodos] = useState([])
  const [eror, setEror] = useState(false)
  const [loading,setLoading] = useState(true)
  const [suksesDel, setSuksesDel] = useState(false)

  return (
    <>
      <AppCreateContext.Provider 
        value={{ todos, setTodos, eror, setEror, loading, setLoading, suksesDel,setSuksesDel }}>
        <Navbars />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/create' element={<Create/>} />
            <Route path='/edit/:id' element={<Edit/>}/>
          </Routes>
      </AppCreateContext.Provider>
    </>
  )
}

export default App
