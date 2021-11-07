import React from 'react'
import './Conteudo.css'
import icolog from './user-ico.ico'
import keylog from './key-ico.ico'
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
                                    <input type="text" className="inp" required />
                                    <label htmlFor="inp" >Email</label>
                                </span>
                                <span className="inp-s">
                                    <img className="ico-log" src={keylog} />
                                    <input type="text" className="inp" placeholder="Digite sua senha" required />
                                   
                                </span>

                                <span className="cont-bot">
                                    <button className="bot-log ">Entrar</button>
                                    <a className="bot-e-s">Esqueci a senha</a>
                                </span>
                            </form>
                           
                        </span>
                    </div>
                </section>
            </div>
        );
    
}


