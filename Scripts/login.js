let buttonLog = document.querySelector("#signIn")
let buttonSign = document.querySelector("#signUp")
let body = document.querySelector("body")

buttonLog.addEventListener("click",function(){
    body.className = "signInJs"
})

buttonSign.addEventListener("click",function(){
    body.className = "signUpJs"
})


function fazPost(url, body){
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(body)

    request.onload = function(){
        console.log(this.responseText)
    }

    return request.responseText
}

function cadastrarUser(){
    event.preventDefault()
    let url = "localhost/users/cadastros"
    let nome = document.getElementById('name').value 
    let email = document.getElementById('email').value
    let pass = document.getElementById('pass').value
    console.log(nome)
    console.log(email)
    console.log(pass)

    let body = {
            "user": email,
            "senha": pass,
            "name": nome
    }

    fazPost(url, body)

}


