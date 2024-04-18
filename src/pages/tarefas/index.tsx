import { Link, useNavigate } from "react-router-dom"

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
        <p className="txt">
            Tarefa 01
            Tarefa 02
            Tarefa 03
        </p> 
        </div>
        <Link to='/sobre'>Ir para Sobre</Link>
        </div>
    )
    
}
export default Tarefas