import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/todos'

function App() {

  return (
    <>
      <h1>Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App