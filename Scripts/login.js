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
    let request = new XMLHttpRequest(); 
    console.log('a')
    request.open("POST", url, true)
    console.log('b')
    request.setRequestHeader("Content-type", "application/json")
    console.log(body)
    request.send(body)
    console.log('d')
    console.log(url)
    request.onload = function(){
        console.log(this.responseText)
    }

    return request.responseText
}

function cadastrarUser(){
    event.preventDefault()
    let url = "http://localhost:3000/users/cadastros"
    let nome = document.getElementById('name').value
    let email = document.getElementById('email').value
    let pass = document.getElementById('pass').value
    console.log(nome)
    console.log(email)
    console.log(pass)

    let body2 = {
            "user": email,
            "senha": pass,
            "name": nome
    }

    //fazPost(url, body)

    fetch(url,{
        method: "POST",
        body:JSON.stringify({
            user:email,
            senha:pass,
            name:nome
        }),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })

}

function fazGet(url, body){
    console.log("Body=", body)
    let request = new XMLHttpRequest();
    request.open('GET', url, true)   
    request.setRequestHeader("Content-type", "application/json")
    request.send(body)

    request.onload = function(){
        console.log(this.responseText)
    }

    return request.responseText 
}

function logar(){
    event.preventDefault()
    let url = "http://localhost:3000/users/login"
    let user = document.getElementById('user').value
    let pass = document.getElementById('pass').value
    console.log(nome)
    console.log(pass)

    let body ={
        "user": user,
        "senha": pass
    }

    fazGet(url, body)
}


