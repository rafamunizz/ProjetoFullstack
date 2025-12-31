import { useEffect, useState, useRef } from 'react'
import './style.css'
import api from '../../services/api'
import { Link } from 'react-router-dom'

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
       
        if(!inputName.current.value || !inputSenha.current.value) {
            alert("Preencha nome e senha!")
            return
        }

        try {
            await api.post('/Usuarios/post', {
                name: inputName.current.value,
                senha: inputSenha.current.value
            })

            // 1. Feedback Visual (Avisa que deu certo)
            alert("Usuário cadastrado com sucesso! Agora faça Login.")
            
            // 2. Limpa os campos para não confundir
            inputName.current.value = ""
            inputSenha.current.value = ""

        } catch(error){
            console.log("Erro ao criar usuários", error)
            alert("Erro ao cadastrar. Tente novamente.")
        }
    } 

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className='container'>
            <form className='form-login'> {/* Usando a mesma classe do login para ficar bonito */}
                <h1>CADASTRO DE USUÁRIOS</h1>
                
                <input 
                    name="name" 
                    placeholder='Nome Completo' 
                    type='text' 
                    ref={inputName}
                />
                
                <input 
                    name="senha" 
                    placeholder='Senha' 
                    type='password'  // Mudei para password para esconder a senha
                    ref={inputSenha} 
                />
                
                <button type='button' onClick={createUsers}>Cadastrar</button>
                
                <Link to="/" className="btn-voltar" style={{marginTop: '10px', display: 'block', color: '#fff'}}>
                    Já tem uma conta? Faça Login
                </Link>
            </form>
        </div>
    )
}

export default App