var requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        "username": "demo",
        "password": "123456"
    }),
    redirect: 'follow'
};
fetch('http://localhost:3000/login', requestOptions)
    .then(response => { console.log(response) })

