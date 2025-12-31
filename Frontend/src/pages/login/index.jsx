import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import './syyle.css' 

function Login() { 

    const [name, setName] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()

        if (!name || !senha) {
            alert("Preencha todos os campos!")
            return
        }

        try {
            // Chama a API de Login
            const { data } = await api.post('/login', {
                name: name,
                senha: senha
            })

            console.log('Login feito com sucesso:', data)

            // Guarda o Token
            localStorage.setItem('token', data.token)

            // Redireciona para a tela de lista
            navigate('/listar-usuarios') 

        } catch (error) {
            console.log(error)
            // Mostra o erro exato se o backend mandar
            alert("Erro no login! Verifique se o nome e senha estão idênticos ao cadastro.")
        }
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='form-login'>
                <h1>LOGIN DO SISTEMA</h1>
                
                <input 
                    placeholder='Nome de usuário' 
                    value={name} 
                    type='text' 
                    onChange={(e) => setName(e.target.value)}
                />
                
                <input 
                    placeholder='Senha' 
                    value={senha} 
                    type='password' 
                    onChange={(e) => setSenha(e.target.value)}
                />
                
                <button type='submit'>Entrar</button>

                <Link to="/cadastro" className='link-cadastro'>
                    Não tem conta? Cadastre-se
                </Link> 
            </form>
        </div>
    )
}

export default Login