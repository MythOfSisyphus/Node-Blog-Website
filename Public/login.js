let email = document.querySelector('#email'),
    password = document.querySelector('#password');

let EmailError = document.querySelector("#EmailError");
let PasswordError = document.querySelector("#PassError");

let loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener('click', async () => {
    // console.log(nname.value, email.value, password.value);

    let EmailVal = email.value,
        PasswordVal = password.value;
    
    EmailError.textContent = '';
    PasswordError.textContent = '';


    try {
        let response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ EmailVal, PasswordVal }),
            headers: { 'Content-Type': 'application/json' }
        })
    
        let data = await response.json();
        console.log(data);
    
        if (data.errors) {
            EmailError.textContent = data.errors.EmailVal;
            PasswordError.textContent = data.errors.PasswordVal;
        }
    
        if(data.user) {
            location.assign('/')
        }
    }
    catch(err) {
        console.log(err);
    }
})