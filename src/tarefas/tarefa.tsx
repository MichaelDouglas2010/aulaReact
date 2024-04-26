import { Box, Button, Grid } from "@chakra-ui/react";
import { IoMdToday } from "react-icons/io";
interface ItemtarefaProps{
    titulo: string
    idTarefa: number
}
function Itemtarefa({titulo,idTarefa}:ItemtarefaProps){
    return(
        <Grid templateColumns="3fr 1fr"
        p={5} backgroundColor="gray">
            <Box>
                {idTarefa}-{titulo}
            </Box>
            <Box>
                <Button colorScheme="green">Concluir</Button>
                <Button  colorScheme="red">Encerrar</Button>
            </Box>
        </Grid>
    )
}
export default Itemtarefa