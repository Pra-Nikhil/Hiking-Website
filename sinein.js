const linkButton = document.querySelector('.link-button')
const linkButton2 = document.querySelector('.link-button2')
const signupBox = document.querySelector('.signup-box')
const loginBox = document.querySelector('.login-box')
const back = document.querySelector('.back')

back.addEventListener('click', (e) => {
    history.back()
})
linkButton.addEventListener('click', () => {
    signupBox.classList.add('open')
})
linkButton.addEventListener('click', () => {
    loginBox.classList.add('close')
})

linkButton2.addEventListener('click', (e) => {
    loginBox.classList.remove('close')
})
linkButton2.addEventListener('click', (e) => {
    signupBox.classList.remove('open')
})