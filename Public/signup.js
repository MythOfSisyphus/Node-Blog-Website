let nname = document.querySelector('#name'),
    email = document.querySelector('#email'),
    password = document.querySelector('#password');

let signupBtn = document.querySelector('#signupBtn');

signupBtn.addEventListener('click', async () => {
    // console.log(nname.value, email.value, password.value);

    let NameError = document.querySelector('#NameError'),
        EmailError = document.querySelector('#EmailError'),
        PassError = document.querySelector('#PassError');

    let NameVal = nname.value,
        EmailVal = email.value,
        PasswordVal = password.value;

    let response = await fetch('/signup', {
        method: 'POST',
        body: JSON.stringify({ NameVal, EmailVal, PasswordVal }),
        headers: { 'Content-Type': 'application/json' }
    })

    let data = await response.json();
    console.log(data);

    if (data.errors) {
        NameError.textContent = data.errors.NameVal;
        EmailError.textContent = data.errors.EmailVal;
        PassError.textContent = data.errors.PasswordVal;
    }

    if (data.account) {
        location.assign('/')
    }
})