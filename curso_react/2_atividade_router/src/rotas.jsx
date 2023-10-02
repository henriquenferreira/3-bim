import { Routes, Route } from 'react-router-dom'
import RobertoCarlos from './paginas/RobertoCarlos'
import Home from './paginas/Home'

function Rotas() {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/robertocarlos' element={<RobertoCarlos/>}/>
        </Routes>
    )
}

export default Rotas