import { useEffect, useState } from "react"

function ToDoList(){

    const [todos, setTodos] = useState<string[]>(["Alma", "Körte"])

    const [text, setText] = useState("Szilva")

    const [size, setSize] = useState(1)

    const addToTodos = () =>{
        if(text.length > 0){
            setTodos(prev => [text, ...prev])
            setText("")
        }
    }

    useEffect(()=>{
        setSize(text.length + 1)
    },[text])

    const removeFromTodo = (removeavle: string) => {
        setTodos(prev => prev.filter(e =>e !== removeavle))
    }

    return(<>
        <input style={{width: size + "rem"}} type="text" name="" id="" value={text}
            onChange={(e)=>setText(e.target.value)}/>
        <button onClick={addToTodos}>+</button>
        <ul>
            {todos.map(todo => <li>{todo}
            <button onClick={()=>removeFromTodo(todo)}>❌</button>
            </li>)}
        </ul>
    </>)
}

export default ToDoList