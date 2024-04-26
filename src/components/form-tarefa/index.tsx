import { Button, Checkbox, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
interface FormTarefaProps{
    tarefas: Tarefa[]
    setTarefas: any
}
function FormTarefa({tarefas, setTarefas}:FormTarefaProps){
    const [nomeTarefa,setNomeTarefa]= useState('')
    function adicinarTarefa(){
        if(tarefas.length >= 0){
            const ultimoId = tarefas[tarefas.length-1].id
            const novaTarefa = {
                id: ultimoId +1,
                nome: nomeTarefa,
                concluida:false
            }
            setTarefas([...tarefas,novaTarefa])
        }
    }
    return(
        <Flex alignItems="center"
        justifyContent="space-around"
        >
            <Input
            value={nomeTarefa}
            onChange={(evento)=> setNomeTarefa(evento.target.value)}
            placeholder="Título da tarefa"
            size="md"/>
            <Checkbox>Realizado?</Checkbox>
            <Button colorScheme="blue" onClick={adicinarTarefa}>Adicionar</Button>
        </Flex>
    )
}
export default FormTarefa