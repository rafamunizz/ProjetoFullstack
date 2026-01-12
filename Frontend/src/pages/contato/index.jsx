import { useState } from 'react'
import './style.css'
import api from '../../services/api'
import { Link, useNavigate } from 'react-router-dom'


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
            // 1. SALVA NO BANCO DE DADOS (Seu backup seguro)
            await api.post('/contato', {
                nome: nome,
                email: email,
                orcamento: orcamento,
                mensagem: mensagem
            })

            // 2. MONTA A MENSAGEM DO WHATSAPP
            // Usamos encodeURIComponent para aceitar acentos e espaços no link
            const textoZap = `Olá Rafa! Me chamo *${nome}*.\n\nMeu email é: ${email}\nOrçamento estimado: R$ ${orcamento}\n\n*Minha mensagem:* ${mensagem}`;
            
            const numeroRafa = '5511990008917'; // Seu número
            const linkZap = `https://wa.me/${numeroRafa}?text=${encodeURIComponent(textoZap)}`;

            // 3. ABRE O WHATSAPP (Em outra aba)
            window.open(linkZap, '_blank');

            // 4. MENSAGEM DE SUCESSO E REDIRECIONA
            alert("Pedido salvo! Vamos finalizar a conversa no WhatsApp? 🚀")
            navigate('/listar-usuarios') // Ou '/telainicial'

        } catch(error){
            console.log(error)
            alert("Erro ao salvar no banco, mas pode me chamar no WhatsApp direto!")
            
            // Mesmo se der erro no banco, abre o Whats para garantir a venda
            const textoZap = `Olá Rafa! Tentei contato pelo site. Me chamo ${nome}.`;
            window.open(`https://wa.me/5511990008917?text=${encodeURIComponent(textoZap)}`, '_blank');
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

