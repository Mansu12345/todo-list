import React from 'react'

 const TodoForm = ({ setTodos }) => {
    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const title = formData.get("title");
        const content = formData.get("content");

    
        const nextTodo = {
            id : crypto.randomUUID(),
            title,
            content,
            isDone: false,
        };

        //기존의 값을 가져와서 변경시켜주기 위해 콜백함수 사용
        setTodos((prev) => [nextTodo, ...prev]);
        //**useState 비동기성  */
        e.target.reset();

    };
    
  return (
    <div>
        <form onSubmit = {onSubmit}>
            <input 
            type="text" 
            placeholder="제목"
            name = "title"
            />

            <input 
            type="text" 
            placeholder='내용'
            name = "content"
            />

            <button type="submit">등록</button>
        </form>    
    </div>
  )
}

export default TodoForm;