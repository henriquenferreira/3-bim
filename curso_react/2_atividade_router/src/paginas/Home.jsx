import { Link } from 'react-router-dom'

function Home() {
    return(
        <div>
            <h1>Home</h1>
            <Link to={'/robertocarlos'}>Ir para o Roberto Carlos</Link>
        </div>
    )
}

export default Home