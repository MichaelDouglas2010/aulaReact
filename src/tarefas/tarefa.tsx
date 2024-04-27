import { Box, Button, Grid } from "@chakra-ui/react";
import { IoMdToday } from "react-icons/io";
interface ItemtarefaProps{
    titulo: string
    idTarefa: number
    apagarTarefa (id:number):void
}
function Itemtarefa({titulo,idTarefa,apagarTarefa}:ItemtarefaProps){
    return(
        <Grid templateColumns="3fr 1fr"
        p={5} backgroundColor="gray">
            <Box>
                {idTarefa}-{titulo}
            </Box>
            <Box>
                <Button colorScheme="green">Concluir</Button>
                <Button  colorScheme="red" onClick={() => apagarTarefa(idTarefa)}>Remover</Button>
            </Box>
        </Grid>
    )
}
export default Itemtarefa