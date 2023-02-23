const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('pw')

const handleform = (e) => {
    e.preventDefault()


    myHeaders = { "Content-Type": "application/json" };

    var raw = JSON.stringify({
        "username": username.value,
        "password": password.value
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    
    fetch('http://localhost:3100/login', requestOptions)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data)
            alert(`${username.value}, ${data.token}`)
        })
        .catch(() => { alert('incorrect username or password') })
}

form.addEventListener('submit', handleform)

