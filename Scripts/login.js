let buttonLog = document.querySelector("#signIn")
let buttonSign = document.querySelector("#signUp")
let body = document.querySelector("body")

buttonLog.addEventListener("click",function(){
    body.className = "signInJs"
})

buttonSign.addEventListener("click",function(){
    body.className = "signUpJs"
})