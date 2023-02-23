// document.getElementById('submit').addEventListener('click', (e) => {
//     e.preventDefault();

//     var username = document.getElementById('username');
//     var password = document.getElementById('pw');

//     var requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             "username": username.value,
//             "password": password.value
//         }),
//         redirect: 'follow'
//     };

//     fetch('http://localhost:3100/login', requestOptions)
//         .then(response => response.json())
//         .then(response => { alert('Logged in successfully') })
//         .catch(() => { alert('Log in failed') })
// });
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
            if (username.value == "demo" && password.value == "123456") {
                alert(`${username.value}, ${data.token}`)
            }

        })
        .catch(() => { console.log('incorrect password') })


}
form.addEventListener('submit', handleform)

