import { useState } from 'react'
import './style.css' // Certifique-se que o arquivo style.css está na mesma pasta
import fotoRafa from './rafa.jpg'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';
import { Link } from 'react-router-dom';


function Telainicial() {
    
    const meuNumeroWhatsApp = '5511990008917'
    const linkWhatsApp = `https://wa.me/${meuNumeroWhatsApp}?text=Olá, vi seu portfólio e gostaria de um orçamento!`;

    return (

        
        <div className="home-container">
            {/* --- NAVBAR --- */}
            <nav className="navbar">
                <div className="nav-content">
                    {/* LOGO */}
                    <a className="navbar-brand">
                        <span>🚀</span> Rafa Academy
                    </a> 

                    <Link to="/contato" className='btn-orcamento'>Pedir Orçamento</Link>
                    
                    {/* BARRA DE PESQUISA */}
                    
                </div>
            </nav>

            {/* --- SEÇÃO SOBRE --- */}
            <section className="sobre-container">                
                <div className="sobre-texto">
                    <h2>Olá, sou Rafael Rodrigues Muniz.</h2>

                    <p>Atuo como Analista de Vendas Pleno, onde desenvolvi um olhar analítico para processos de negócios. Atualmente, estou expandindo minha carreira para a área de tecnologia, cursando Análise e Desenvolvimento de Sistemas (ADS).</p>

                    <p>Meu foco é unir a visão estratégica de negócios com a capacidade técnica da programação. Utilizo tecnologias como JavaScript, TypeScript e Node.js para criar soluções reais, com ênfase na automação de processos repetitivos.</p>
                </div>

                <div className="sobre-foto">
                    <img src={fotoRafa} className="foto-perfil" alt="Rafael Muniz"/>
                </div>
            </section>

            {/* --- SEÇÃO VENDAS --- */}
            <section className="vendas-container">                  
                <div className="vendas-card">
                    <h1>Transforme visitantes em clientes reais</h1>

                    <p>
                        Se você precisa de um <strong>Portfólio</strong>, <strong>Site de Vendas</strong> ou 
                        <strong>Landing Page</strong>, eu posso te ajudar.
                    </p>
                    
                    <p className="chamada-final">Vamos tirar seu projeto do papel?</p>
                    
                    <a href={linkWhatsApp} className="btn-whatsapp" target="_blank" rel="noreferrer" >
                        📱 Me chame no WhatsApp
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Telainicial;