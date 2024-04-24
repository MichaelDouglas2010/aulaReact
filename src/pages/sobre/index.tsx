import { Link, useNavigate } from "react-router-dom"
import './index.css'
import Topo from "../../components/topo"
import Rodape from "../../components/rodape"
import Layout from "../../components/layout"

function Sobre(){
    const navigate = useNavigate()
    return(

        <Layout>
        <div className="divFormat">
            <h1>Apresentação sobre <b>Projeto</b></h1>
            <div className="txt">
            <h3>Faculdade</h3>
            <p>Fatec Indaiatuba</p>
            <h3>Semestre</h3>
            <p>4° Semestre</p>
            <h3>Desenvolvedor: </h3>
            <p>Michael Douglas</p>
            </div>
            <Link to='/'>Volta para home</Link>
        </div>
        </Layout>
    )
}
export default Sobre