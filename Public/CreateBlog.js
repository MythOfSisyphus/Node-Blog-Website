let title = document.querySelector('#title').value,
    author = document.querySelector('#author').value,
    blogbody = document.querySelector('#blogbody').value;

let form = document.querySelector('form');
form.addEventListener('submit', sendingBlog );

async function sendingBlog() {
    let res = await fetch('/create', {
        method: 'POST',
        body: JSON.stringify({ title, author, blogbody }),
        headers: {'Content-Type': 'application/json'}
    })

    let data = await res.json();
    console.log(data);

    location.assign('/');

    // title.value = '';
    // author.value = '';
    // blogbody.value = '';
}