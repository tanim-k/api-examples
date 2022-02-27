const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => DisplayComments(data))
}
// fn callin 
loadComments();
// another fn ::::
const DisplayComments = comments => {
    const commentsDiv = document.getElementById('comments');
    comments.forEach(comment => {
        console.log(comment);
        const p = document.createElement('p');
        p.innerText = comment.name;
        commentsDiv.appendChild(p);
    });

}