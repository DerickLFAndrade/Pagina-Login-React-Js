import React from 'react'
import  {Route, BrowserRouter} from 'react-router-dom'
import Conteudo from '../components/Conteudo/Conteudo'
import Pag from '../pages/pagina'
import PaginaHome from '../pages/PaginaHome'
const Routes = () => {
    return (
        <BrowserRouter>
        <Route component={PaginaHome} path="/" exact />
        <Route component={Pag} path="/teste" />
        </BrowserRouter>
        
        
    )
}
export default Routes;