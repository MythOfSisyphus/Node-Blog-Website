let nname = document.querySelector('#name'),
    email = document.querySelector('#email'),
    password = document.querySelector('#password');

let loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener('click', async () => {
    console.log(nname.value, email.value, password.value);

    let NameVal = nname.value,
        EmailVal = email.value,
        PasswordVal = password.value;

    let response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ NameVal, EmailVal, PasswordVal }),
        headers: {'Content-Type': 'application/json'}
    })

    let data = await response.json();
    console.log(data);
})