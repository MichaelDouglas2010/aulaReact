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
               
            </div>
        </Layout>
    )
    
}
export default Tarefas