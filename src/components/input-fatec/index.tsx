import styles from './inputFatec.module.css'
interface Props{
    type: 'Nome' | 'E-mail' | 'Senha'
}

function InputFatec({type}:Props){
    return(
        <input defaultValue='' className={styles.inputFatec} placeholder={type}/>
    )
}
export default InputFatec