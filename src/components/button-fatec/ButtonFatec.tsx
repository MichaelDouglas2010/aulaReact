import { Button } from '@chakra-ui/react'

interface Props {
    type: 'button' | 'submit' | 'reset'
    label: string
}
function ButtonFatec({type, label}:Props){ // importando direto o type e label de Props poderia ser Props.type or Props.label
    
    return(
        //<button className={styles.botaoFatec} type={type}>{label}</button> // Criando tipos no mesmo botão
        <Button type={type} colorScheme='red'  size='lg'>
            {label}
        </Button>
    )
}
export default ButtonFatec