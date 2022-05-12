const btnSignin = document.getElementById('signin')
const btnSignup = document.getElementById("signup")

const accountManagement = document.getElementById("userAccount")
const signinColumn = document.getElementById('signinColumn')
const signupColumn = document.getElementById('signupColumn')

const signinSubmit = document.getElementById('signinSubmit')
const signupSubmit = document.getElementById('signupSubmit')


btnSignin.addEventListener('click', ()=>{

    accountManagement.style.display = "flex";
    signinColumn.style.display = "inline-block"
})

btnSignup.addEventListener('click', ()=>{

    accountManagement.style.display = "flex";
    signupColumn.style.display = "inline-block"
})

signinSubmit.addEventListener('submit', (event)=> {
     
    event.preventDefault();
    accountManagement.style.display = "none";
    signinColumn.style.display = "none"
    alert("Sign In Successful!!")

})
signupSubmit.addEventListener('submit', (event)=> {
     
    event.preventDefault();
    accountManagement.style.display = "none";
    signupColumn.style.display = "none"
    alert("Signup Successful!!")

})