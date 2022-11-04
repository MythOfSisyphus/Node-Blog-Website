let Title = document.querySelector('#title'),
    Author = document.querySelector('#author'),
    BlogBody = document.querySelector('#blogbody');

let AddBtn = document.querySelector('#AddBtn');
AddBtn.addEventListener('click', sendingBlog );

async function sendingBlog() {

    let title = Title.value;
    let author = Author.value;
    let blogbody = BlogBody.value;

    let TitileError = document.querySelector('#TitileError');
    let NameError = document.querySelector('#NameError');
    let BlogBodyError = document.querySelector('#BlogBodyError');

    TitileError.value = '';
    NameError.value = '';
    BlogBodyError.value = '';


    let res = await fetch('/create', {
        method: 'POST',
        body: JSON.stringify({ title, author, blogbody }),
        headers: {'Content-Type': 'application/json'}
    })

    let data = await res.json();
    console.log(data);

    if(data.errors) {
        TitileError.textContent = data.errors.title;
        NameError.textContent = data.errors.author;
        BlogBodyError.textContent = data.errors.blogbody;
    }

    if(data.yeah) {
        location.assign('/allblogs');
    }
}