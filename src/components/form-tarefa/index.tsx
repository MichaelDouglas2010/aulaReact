import { Button, Checkbox, Flex, Input } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Tarefa from "../../interface";
interface FormTarefaProps{
    tarefas: Tarefa[]
    setTarefas: any

}

function FormTarefa({tarefas, setTarefas}:FormTarefaProps){
    const [nomeTarefa,setNomeTarefa]= useState('')
    const [statusTarefa, setStatusTarefa] = useState(false)
    const inputTarefas = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(inputTarefas.current) inputTarefas.current.focus()
    },[])

    function adicinarTarefa(){
        if(tarefas.length >= 0){
            const ultimoId = tarefas[tarefas.length-1].id
            const novaTarefa = {
                id: ultimoId +1,
                nome: nomeTarefa,
                concluida:statusTarefa
            }
            setTarefas([...tarefas,novaTarefa])
        }
    }
    return(
        <Flex alignItems="center"
        justifyContent="space-around"
        >
            <Input
            ref={inputTarefas}
            value={nomeTarefa}
            onChange={(evento)=> setNomeTarefa(evento.target.value)}
            placeholder="Título da tarefa"
            size="md"/>
            <Checkbox defaultChecked={false} onChange={((evento) => {
                if(evento.target.checked) setStatusTarefa(true)
                else setStatusTarefa(false)
            })}> Realizado?</Checkbox>
            <Button colorScheme="blue" onClick={adicinarTarefa}>Adicionar</Button>
        </Flex>
    )
}
export default FormTarefa