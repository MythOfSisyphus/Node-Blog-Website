let Title = document.querySelector('#title'),
    Author = document.querySelector('#author'),
    BlogBody = document.querySelector('#blogbody');

let AddBtn = document.querySelector('#AddBtn');
AddBtn.addEventListener('click', sendingBlog );

async function sendingBlog() {

    let title = Title.value;
    let author = Author.value;
    let blogbody = BlogBody.value;


    let res = await fetch('/create', {
        method: 'POST',
        body: JSON.stringify({ title, author, blogbody }),
        headers: {'Content-Type': 'application/json'}
    })

    let data = await res.json();
    console.log(data);

    location.assign('/allblogs');

    // title.value = '';
    // author.value = '';
    // blogbody.value = '';
}