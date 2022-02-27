const todos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}
todos();

// make another to display todos 
const displayTodos = todos => {
    const todosDiv = document.getElementById('todos');
    todos.forEach(todo => {
        console.log(todo);
        const h4 = document.createElement('h4');
        h4.innerText = todo.title;
        todosDiv.appendChild(h4);
    });
}