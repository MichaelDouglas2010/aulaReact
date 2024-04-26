import { useState } from "react";
import Layout from "../components/layout";
import Itemtarefa from "./tarefa";
import FormTarefa from "../components/form-tarefa";

interface Tarefa{
    id: number
    nome: string
    concluida: boolean
}
function Tarefas(){
    const[tarefas, setTarefas]= useState<Tarefa[]>([
        {id: 1, nome: "Tarefa 01", concluida: false},
        {id: 2, nome:"Tarefa 02", concluida:false}

    ])
    function apagarTarefa(id: number){
        const tarefasAtualizadas = tarefas.filter((tarefa) => tarefa.id !== id)
        setTarefas(tarefasAtualizadas)
    }
    return(
        <Layout>
            <h1>
                Tarefas
            </h1>
            <FormTarefa tarefas={tarefas} setTarefas={setTarefas} apagarTarefa={apagarTarefa}/>
            {
                tarefas.map((tarefa)=>(
                    <Itemtarefa titulo={tarefa.nome} idTarefa={tarefa.id}/>
                ))
            }
        </Layout>
    )

}
export default Tarefas