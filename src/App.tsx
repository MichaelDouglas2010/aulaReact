import './App.css'
import ButtonFatec from './components/button-fatec/ButtonFatec'
import InputFatec from './components/input-fatec'


function App() {
  

  return (
    <>
    <div className='divStyles'>
      <p>Insira os dados abaixo:</p>
      <hr/>
      <InputFatec type='Nome'/><br/>
      <InputFatec type='E-mail'/><br/>
      <InputFatec type='Senha'/><br/>
      <br/>
      <ButtonFatec type='button' label='Fatec'/>
    </div>
    </>
  )
}
// const App = () =>{}

export default App
