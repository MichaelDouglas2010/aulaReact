import { Link, useNavigate } from "react-router-dom"
import Layout from "../../components/layout"
import ListTarefas from "../../components/list"
function Tarefas(){
    const navigate = useNavigate()
    return(
        <Layout>
            <div className="divFormat">
                <h1>Lista de Tarefas</h1>
                <ListTarefas/>
                <div className="txt">
                    <li>Tarefa 01</li>
                    <li>Tarefa 02</li>
                    <li>Tarefa 03</li>
                </div>
            </div>
        </Layout>
    )
    
}
export default Tarefas