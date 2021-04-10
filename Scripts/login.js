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
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(body)
    request.onload = function(){
        console.log(this.responseText)
    }

    if (request.responseText === {"messagem":"Usuário criado com sucesso"}){
        archive2()
    } else {
       error2() 
    }

    return request.responseText
}

function cadastrarUser(){
    event.preventDefault()
    let url = "http://perfilsocioeconomico-com.umbler.net/users/cadastro"
    let nome = document.getElementById('name').value
    let email = document.getElementById('email').value
    let pass = document.getElementById('pass').value

    let body = JSON.stringify({
            "user": email,
            "senha": pass,
            "name": nome
    })

    fazPost(url, body)


}

function fazGet(url, body){
    console.log("Body=", body)
    let request = new XMLHttpRequest();
    request.open('POST', url, true)   
    request.setRequestHeader("Content-type", "application/json")
    request.send(body)

    request.onload = function(){
        console.log(this.responseText)
    }

    let proxima = document.getElementById('backMenu');
    if (request.responseText = '"messagem":"Usuario autenticado"'){
        console.log('a')
        proxima.click
    }else{
        console.log('b')
    }

    return request.responseText 
}

function logar(){
    event.preventDefault()
    let url = "http://perfilsocioeconomico-com.umbler.net/users/login"
    let user = document.getElementById('user').value
    let pass = document.getElementById('senha').value
    console.log(user)
    console.log(pass)

    let body = JSON.stringify({
        "user": user,
        "senha": pass
    });

    fazGet(url, body)
}


