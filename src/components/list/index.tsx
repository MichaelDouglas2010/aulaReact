import { Stack, useToast, Box } from '@chakra-ui/react'
import InputTarefa from '../input/index.tsx'
import './index.css'
import CaixaCheck from '../caixa-box/index.tsx'
import InputAtv from '../input-atv/index.tsx'
import ButtonTask from '../button-task/index.tsx'
import LinhaTask from '../linha-task/index.tsx'

function ListTarefas() {
    const toast = useToast()
    return (
        <>
            <div className= 'insiraTarefa'>
            <InputTarefa />
            <Stack direction="row" spacing={4} alignItems="center">
            <Box maxW={'32rem'}>
            <InputAtv className='' defaultValue='' placeholder='Digite o título da task' type='text'></InputAtv>
            </Box>
            <CaixaCheck label='Realizada?'/>
            <ButtonTask size='sm' color='blue' type='button' label='Inserir'/>
            </Stack>
            <hr />
            <ul>
                <LinhaTask titleTask='Tarefa 1'/>
                <LinhaTask titleTask='Tarefa 2'/>
                <LinhaTask titleTask='Tarefa 3'/>
            </ul>
            <hr />
            </div>
      </>
    )}

export default ListTarefas