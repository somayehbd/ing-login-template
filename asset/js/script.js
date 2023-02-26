const personalForm = document.getElementById('personalForm')

const handlePersonalForm = (e) => {
    e.preventDefault()

    const username = personalForm.username
    const password = personalForm.password

    myHeaders = { "Content-Type": "application/json" };

    let raw = JSON.stringify({
        "username": username.value,
        "password": password.value
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch('http://localhost:3100/personal/login', requestOptions)
        .then(response => {
            // console.log(response);
            return response.json();
        })
        .then(data => {
            // console.log(data)
            if (data.success)
                alert(`${username.value}, ${data.token}`)
            else
                alert('username or password is incorrect [personal service]')
        })
        .catch(() => { alert('error') })
}

personalForm.addEventListener('submit', handlePersonalForm)

// handleBusinessForm
const businessForm = document.getElementById('businessForm')

const handlebusinessForm = (e) => {
    e.preventDefault();

    const username = businessForm.username;
    const password = businessForm.password;

    myHeaders = { "Content-Type": "application/json" };

    let raw = JSON.stringify({
        "username": username.value,
        "password": password.value
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch('http://localhost:3100/business/login', requestOptions)
        .then(response => {
            // console.log(respo/nse)
            return response.json()
        })
        .then(data => {
            // console.log(data)
            if (data.success == true) {
                alert(`${username.value}, ${data.token}`)
            }
            else {
                alert('username or password is incorrect')
            }
        })
        .catch(() => { alert('error') })


}

businessForm.addEventListener('submit', handlebusinessForm)

