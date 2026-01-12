import { useEffect, useState, useRef } from 'react'
import './style.css'
import api from '../../services/api'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function TelaContato(){

    const [nome, Setnome] = useState('');
    const [email, Setemail] = useState('');
    const [orcamento, Setorcamento] = useState('');
    const [mensagem, Setmensagem] = useState('');
    const navigate = useNavigate()

    async function handleSubmit(event) {

        event.preventDefault()
        
        if(!nome || !email || !orcamento || !mensagem){
            alert('Preencha todos os campos')
            return
        }
    
    
    try {

        const {data} = await api.post('/contato', {
            nome: nome,
            email: email,
            orcamento: orcamento,
            mensagem: mensagem
        })

        console.log("Usuário enviados com sucesso !!!")
        console.log(data)

        navigate('/listar-usuarios')

    } catch(error){
        console.log(error)
    }

    }

    

    return (
    <div className="contato-container">
        <form onSubmit={handleSubmit} className="contato-form">
            <h1>Orçamento</h1>

            <div className="grupo-input">
                <label>Nome</label>
                <input type="text" value={nome} onChange={(e) => Setnome(e.target.value)} placeholder="Ex: Rafael Muniz" />
            </div>

            <div className="grupo-input">
                <label>E-mail</label>
                <input type="email" value={email} onChange={(e) => Setemail(e.target.value)} placeholder="seu@email.com" />
            </div>

            <div className="grupo-input">
                <label>Orçamento</label>
                <input type="number" value={orcamento} onChange={(e) => Setorcamento(e.target.value)} placeholder="R$ 0,00" />
            </div>

            <div className="grupo-input">
                <label>Mensagem</label>
                <textarea value={mensagem} onChange={(e) => Setmensagem(e.target.value)} placeholder="Me conte sobre seu projeto..." rows="4" />
            </div>

            <button type="submit">ENVIAR PROPOSTA</button>
        </form>
    </div>
)


}

export default TelaContato;

