const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('pw')

const handleform = (e) => {
    e.preventDefault()
    console.log(username.value)
    console.log(password.value)

    if (username.value === "somi" && password.value === "123") {
        alert('successfully complete')
    }

}
form.addEventListener('submit', handleform)

