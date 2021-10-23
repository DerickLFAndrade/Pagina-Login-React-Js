import React from 'react'
import './Conteudo.css'
import icolog from './user-ico.ico'
import keylog from './key-ico.ico'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
export default function Conteudo() {
        
        return (
            <div id='cont-p'>
                <section className='container-p'>
                    <div className="textos-c">
                        <span className="log">
                            <h1 className="msg-b">BEM VINDO</h1>
                            <form action="">
                                <span className="inp-p">
                                    <img className="ico-log" src={icolog} />
                                    <input type="text" className="inp" placeholder="Digite seu Email ou CPF Cadastrado" />
                                </span>
                                <span className="inp-s">
                                    <img className="ico-log" src={keylog} />
                                    <input type="text" className="inp" placeholder="Digite sua senha" />
                                
                                </span>
                            </form>
                            <span className="cont-bot">
                                <Link to="/teste"><button className="bot-log ">Entrar</button></Link>
                                <button className="bot-e-s">Esqueci a senha</button>
                            </span>
                        </span>
                    </div>
                </section>
            </div>
        );
    
}


