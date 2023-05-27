let sitePassword = 'apples'
let theButton = document.querySelector('#loginBtn')

document.querySelector('.userOnlySection').style.visibility = "hidden"

theButton.addEventListener('click', () => {
    let userPassword = document.querySelector('#userInput').value
    console.log(userPassword)
    console.log(sitePassword)
    if (userPassword == sitePassword) {
        document.querySelector('.userOnlySection').style.visibility = 'visible'
    }
})


