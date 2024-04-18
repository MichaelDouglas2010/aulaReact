import { Link, useNavigate } from "react-router-dom"

function Home(){
    const navigate = useNavigate()
    return(
        <div className="borda">
        <h1 onClick={()=>{
            navigate('/sobre')
        }}>Sobre</h1>
        <h1 onClick={()=>{
            navigate('/tarefas')
        }}>Tarefa</h1>
        <div className="divFormat">
        <h1>Projeto de Cadastro</h1>
        <p className="txt">
            O objetivo principal desse aplicativo é facilitar o controle de tarefas para cada usuário, 
            provavelmente permitindo que eles organizem, priorizem e acompanhem suas tarefas de uma
             maneira mais eficiente.
        </p> 
        </div>
        <Link to='/sobre'>Ir para sobre</Link>
        </div>
    )
    
}
export default Home