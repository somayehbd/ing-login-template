document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();

    var username = document.getElementById('username');
    var password = document.getElementById('pw');
    
    var requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "username": username.value,
            "password": password.value
        }),
        redirect: 'follow'
    };

    fetch('http://localhost:3100/login', requestOptions)
        .then(response => response.json())
        .then(response => { alert('Logged in successfully') })
        .catch(() => { alert('Log in failed') })
});