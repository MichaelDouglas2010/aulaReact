import { Link } from "react-router-dom"
import ButtonFatec from "../../components/button-fatec/ButtonFatec"
import Layout from "../../components/layout"

function Home(){
    //const navigate = useNavigate()
    return(
        <Layout>
            <div className="divFormat">
                <h1>Projeto de Cadastro</h1>
                <p className="txt">
                    O objetivo principal desse aplicativo é facilitar o controle de tarefas para cada usuário, 
                    provavelmente permitindo que eles organizem, priorizem e acompanhem suas tarefas de uma
                    maneira mais eficiente.
                </p> 
                <ButtonFatec type="button" label="Teste" />
            </div>
        </Layout>
     
    )
    
}
export default Home