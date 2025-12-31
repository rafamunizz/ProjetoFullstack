import { useEffect, useState } from 'react'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import './style.css'

function Lista() {
    const [allUsers, setAllUsers] = useState([])
    const navigate = useNavigate()

    // Essa função roda assim que a tela abre
    useEffect(() => {
        // 1. Verifica se tem o Token (se não tiver, manda pro login)
        const token = localStorage.getItem('token')
        
        if (!token) {
            navigate('/') // Expulsa o usuário sem crachá
            return
        }

        // 2. Busca os usuários no Backend
        async function loadUsers() {
            try {
                // Envia o token no cabeçalho (Boas práticas)
                const { data } = await api.get('/Usuarios', {
                    headers: { Authorization: `Bearer ${token}` }
                })
                
                setAllUsers(data)

            } catch (error) {
                console.log(error)
                alert("Erro ao buscar usuários (ou token inválido)")
            }
        }

        loadUsers()
    }, [])

    // Função de Logout
    function logout() {
        localStorage.removeItem('token') // Rasga o crachá
        navigate('/') // Volta pro login
    }

    return (
        <div className="container-lista">
            <header>
                <h2>Sistema de Usuários</h2>
                <button onClick={logout} className="btn-logout">Sair</button>
            </header>

            <div className="list-users">
                {allUsers.map(user => (
                    <div key={user.id} className="card">
                        <div>
                            <p><strong>ID:</strong> {user.id}</p>
                            <p><strong>Nome:</strong> {user.name}</p>
                        </div>
                        <button className="btn-trash">🗑️</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Lista