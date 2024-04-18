import { Link, useNavigate } from "react-router-dom"
import './index.css'

function Sobre(){
    const navigate = useNavigate()
    return(
    <div className="borda">

    
        <div className="divFormat">
        <h1 onClick={()=>{
            navigate('/')
        }}>Home</h1>
         <h1 onClick={()=>{
            navigate('/tarefas')
        }}>Tarefas</h1>
        
            <h1>Apresentação sobre <b>Projeto</b></h1>
            <h3>Faculdade</h3>
            <p>Fatec Indaiatuba</p>
            <h3>Semestre</h3>
            <p>4° Semestre</p>
            <h3>Desenvolvedor: </h3>
            <p>Michael Douglas</p>
            <Link to='/'>Volta para home</Link>
        </div>
    </div>
    )
}
export default Sobre