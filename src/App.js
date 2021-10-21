import Header from "./components/Header/Header"
import Conteudo from "./components/Conteudo/Conteudo"
import Footer from "./components/Footer/Footer"

export default function PrimeiroComponente() {
  return (
      <>
      <header> 
        <Header />
        </header>
       <div>
        <Conteudo />
       </div>
      <footer>
        <Footer />
      </footer>
      </>
  )
  }