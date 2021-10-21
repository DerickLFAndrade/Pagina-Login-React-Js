import React from 'react'
import '../Footer/Footer.css'
export default class Footer extends React.Component {
    render () {
        return (
            <footer className="footer">
                <ul className="li-f">
                    <li className="lista-f">Sobre</li>
                    <li className="lista-f">Contato</li>
                    <li className="lista-f">Redes Sociais</li>
                    <li className="lista-f">Sugestões</li>
                </ul>
            </footer>
        )
    }
}