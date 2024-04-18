import './ButtonFatec.css' // className = 'botao-fatec'
import styles from './ButtonFatec.module.css' // className={styles.botaoFatec}

interface Props {
    type: 'button' | 'submit' | 'reset'
    label: string
}
function ButtonFatec({type, label}:Props){ // importando direto o type e label de Props poderia ser Props.type or Props.label
    
    return(
        <button className={styles.botaoFatec} type={type}>{label}</button> // Criando tipos no mesmo botão
    )
}
export default ButtonFatec