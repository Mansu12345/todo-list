//1. 인풋창, 버튼
//2. 인풋창에 값 입력 -> 버튼 클릭 시 아이템 추가
//3. 아이템 삭제를 누르면 삭제 가능
//반복되는건 컴포넌트화 하기! (todoboard > todoitem)

import React, {useState} from 'react';
import './App.css';
import TodoBoard  from './components/TodoBoard';

const App = () => {

  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])
  const addItem = () => {
    console.log(inputValue)
    setTodoList([...todoList,inputValue])
  }
  const removeTodo = (index) => {
    const newTodoList = todoList.filter((_,i)=>i !== index);
    setTodoList(newTodoList);
  }

  

  return (
    <div>
      <input 
      placeholder="제목"
      value = {inputValue}
      type="text" 
      onChange = { (event) => setInputValue(event.target.value)}/>


      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList} setTodoList={setTodoList} removeTodo={removeTodo} />
      </div>
  )
}

export default App