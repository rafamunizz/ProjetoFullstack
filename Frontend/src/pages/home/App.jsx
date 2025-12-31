import { useEffect, useState, useRef } from 'react'
import './style.css'
import api from '../../services/api'
import axios from 'axios'


// react hook = 

function App() {

const [users, setUsers] = useState([])

const inputName = useRef()
const inputSenha = useRef()

async function getUsers(){
    try {
     const usersFromApi = await api.get('/Usuarios')
     setUsers(usersFromApi.data)
     console.log(users)

     } catch(error){
      console.log("Erro ao consumir a API", error)
     }
} 

async function createUsers(){
    try {
      await api.post('/Usuarios/post',{
      name: inputName.current.value,
      senha: inputSenha.current.value

     })

     getUsers()

     } catch(error){
      console.log("Erro ao criar usuários", error)
     }
} 

useEffect(() => {
  getUsers()
}, [])


  return (
    <div className='container'>
      <form >
        <h1>CADASTRO DE USUÁRIOS</h1>
        <input name="name" placeholder='name' type='text' ref={inputName}/>
        <input senha="Senha"  placeholder='passoword 'type='text' ref={inputSenha} />
        <button type='button' onClick={createUsers}>Cadastrar</button>
      </form>


    </div>
  )
}

export default App