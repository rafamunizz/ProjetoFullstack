import { useEffect, useState } from 'react'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import './style.css'

function Telainicial() {
    

    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark" 
                style={{
                    backgroundColor: '#1a1a1a', // Fundo escuro
                    borderBottom: '1px solid #333', // Linha sutil separadora
                    padding: '15px 20px' 
                }}>
            
                <div className="container-fluid">
                    {/* LOGO */}
                    <a className="navbar-brand" style={{ fontWeight: 'bold', fontSize: '1.4rem' }}>
                        <span style={{ color: '#0d6efd' }}>🚀</span> Rafa Academy
                    </a> 
                    
                    {/* BARRA DE PESQUISA */}
                    <form className="d-flex" style={{ gap: '10px' }}>
                        <input 
                            className="form-control" 
                            type="search" 
                            placeholder="Qual aula você procura?" 
                            style={{
                                backgroundColor: '#2c2c2c', // Input Cinza Escuro
                                border: '1px solid #444', 
                                color: 'white', // Texto branco
                                borderRadius: '20px' // Borda redondinha
                            }} 
                        />
                        <button 
                            className="btn btn-primary" 
                            type="submit"
                            style={{ borderRadius: '20px', padding: '0 20px' }}
                        >
                            Buscar
                        </button>
                    </form>
                </div>
            </nav>

            <div className="content-padding">
                <h1>Aprendendo a Desenvolver em Node</h1>

              
                <div className="videos-grid">
                    

                    <div className="video-card">
                        <div className="thumbnail">VÍDEO 1</div>
                        <p>Aula 01 - Introdução</p>
                    </div>

                    <div className="video-card">
                        <div className="thumbnail">VÍDEO 2</div>
                        <p>Aula 02 - Instalando Node</p>
                    </div>

                    <div className="video-card">
                        <div className="thumbnail">VÍDEO 3</div>
                        <p>Aula 03 - Primeiro Servidor</p>
                    </div>

                    <div className="video-card">
                        <div className="thumbnail">VÍDEO 4</div>
                        <p>Aula 04 - Rotas</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Telainicial;