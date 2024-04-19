import { Link, useNavigate } from "react-router-dom"
import './index.css'
function Tarefas(){
    const navigate = useNavigate()
    return(
        <div className="borda">
        <h1 onClick={()=>{
            navigate('/')
        }}>Home</h1>
        <h1 onClick={()=>{
            navigate('/sobre')
        }}>Sobre</h1>
        <div className="divFormat">
        <h1>Lista de Tarefas</h1>
        <div className="txt">
            <li>Tarefa 01</li>
            <li>Tarefa 02</li>
            <li>Tarefa 03</li>
        </div>
       
        </div>
        <Link to='/sobre'>Ir para Sobre</Link>
        </div>
    )
    
}
export default Tarefas