import "./index.css"
import { useState } from "react"
import { List, X } from "@phosphor-icons/react"

function Header() {
    const[roberto, setRoberto] = useState(false)

    function handleRobertoMenu() {
        if(roberto) {
            setRoberto(false)
            return
        }

        setRoberto(true)
    }

  return (
    <header>
        <div className="menu-mobile">
            <div className="botao-menu">
                <button onClick={handleRobertoMenu}>{roberto==true ? <X size={32}/> : <List size={32}/>}</button>
            </div>
            <div className={`menu ${roberto==true ? "" : "close"}`}>
                <nav>
                    <a href="">Configurações</a>
                    <a href="">Login</a>
                    <a href="">Sobre</a>
                </nav>
            </div>
        </div>

        <div className="menu-desktop">
            <h1>bola</h1>

            <nav>
                <a href="">Configurações</a>
                <a href="">Login</a>
                <a href="">Sobre</a>
            </nav>
        </div>      
    </header>
  )
}

export default Header