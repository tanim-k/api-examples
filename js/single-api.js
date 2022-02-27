const single = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/200')
    .then(reverse => reverse.json())
    .then(data => displaySingleComment(data))
};

// another arrow fn 
const displaySingleComment = single => {
    console.log(single);
    const singleC = document.getElementById('single');
    singleC.innerText = single.title;
}