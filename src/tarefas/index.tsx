import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Itemtarefa from "./tarefa";
import FormTarefa from "../components/form-tarefa";
import Tarefa from "../interface";



function Tarefas(){
    const[tarefas, setTarefas]= useState<Tarefa[]>([])

    function carregarLista(){
        return [
            {id: 1, nome: "Tarefa 01", concluida: false},
            {id: 2, nome:"Tarefa 02", concluida:false}]
    }

    useEffect(() =>{
        const tarefas = carregarLista()
        setTarefas(tarefas)
    },[]) // Pode passa uma dependencia que toda fez que alterda ele carrega a função

    /*useEffect(() =>{
        alert('Tarefa alterada!')
    },[tarefas])*/
    function apagarTarefa(id: number){
        const tarefasAtualizadas = tarefas.filter((tarefa) => tarefa.id !== id)
        setTarefas(tarefasAtualizadas)
    }
    return(
        <Layout>
            <h1>
                Tarefas
            </h1>
            <FormTarefa tarefas={tarefas} setTarefas={setTarefas} />
            {
                tarefas.map((tarefa)=>(
                    <Itemtarefa key={tarefa.id} titulo={tarefa.nome} idTarefa={tarefa.id} apagarTarefa={apagarTarefa}/>
                ))
            }
        </Layout>
    )

}
export default Tarefas