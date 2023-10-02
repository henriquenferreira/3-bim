import { Routes, Route } from 'react-router-dom'
import Bola from './paginas/Bola'
import Home from './paginas/Home'

function Rotas() {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/bola' element={<Bola/>}/>
        </Routes>
    )
}

export default Rotas