function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'get coffee',
      isCompleted: false,
    },
    {
      text: 'go to the gym',
      isCompleted: false,
    },
    {
      text: 'learn how to build react apps',
      isCompleted: false,
    },
    {
      text: 'feed my cat',
      isCompleted: false,        
    },
  ]);
  
  const addTodo = text => {
      const newTodos = [...todos, {text:text, isCompleted:false}];
      setTodos(newTodos);
  }

  const removeTodo = index => {
    let temp = [...todos];
    temp.splice(index,1);
    setTodos(temp);
  }

  return(
      <div className = "app">
        <div className="todo-list">
          {todos.map((todo, i) =>
            <Todo index = {i} key = {i} todo = {todo} remove = {removeTodo} />)}
          <TodoForm addTodo = {addTodo}/>
        </div>
      </div>
    );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);