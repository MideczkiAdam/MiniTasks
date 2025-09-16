import './App.css'
import CardBtn from './components/addToCart'
import ContactCard from './components/ContactCard'
import ToDoList from './components/ToDoList'

function App() {

  return (
    <>
    <CardBtn/>
    <ContactCard icon='🤠' name='Cigany Kalap' email='fa@gmail.com'/>
    <ContactCard icon='😁' name='Öröm Erény' email='fa@gmail.com'/>

    <ToDoList/>
    </>
  )
}

export default App
