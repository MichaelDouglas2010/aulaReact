import { Button, Editable, EditableInput, EditablePreview, useToast } from "@chakra-ui/react";
import InputTarefa from '../input/index.tsx'
import './index.css'
/*
function ListTarefas(){
    return(
        <Editable defaultValue='Take some chakra'>
        <EditablePreview />
        <EditableInput />
        </Editable>

    )
}*/
function ListTarefas() {
    const toast = useToast()
    return (
        <>
            <div className= 'container'>
            <InputTarefa />
            <Button
                onClick={() =>
                toast({
                    title: 'Tarefa',
                    description: "Inserida!",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
                }
            >
                Inserir
            </Button>
            </div>
            
      
      </>
    )
  }
export default ListTarefas
