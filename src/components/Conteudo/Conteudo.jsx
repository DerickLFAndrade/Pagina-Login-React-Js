import React from 'react'
import './Conteudo.css'
import icolog from './ico-log.ico'
import keylog from './key-ico.ico'
export default class Conteudo extends React.Component {
    render() {
        return (
            <div id='cont-p'>
                <section className='container-p'>
                    <div className="textos-c">
                        <span className="log">
                            <h1>Bem vindo!</h1>
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
                                <button className="bot-log">Entrar</button>
                                <button className="bot-e-s">Esqueci a senha</button>
                            </span>
                        </span>
                    </div>
                </section>
            </div>
        );
    }
}
