'use strict'
const a = document.getElementById('alerts')
const ab = document.querySelector('.alertBox')
const ok = "linear-gradient(to right, #004EF2, #0B85DB)"
const nOk = "linear-gradient(to right, #9B120C,#F9120C)"
let y = 0
let viewGrf = false



let errMsg = [`Nenhuma planilha foi selecionada`,'Por favor selecione apenas um gráfico!', 'Por favor selecione apenas dois gráficos!',"Não necessita de seleção!","O valor repetiu! Selecione outro!","Nenhuma opção foi selecionada!"]


function archive2() {
            ab.style.backgroundImage = ok
            a.innerHTML = `O arquivo ${sFile.name} foi selecionado!`
            y = 1
            closeMsg()
            showMsg()
            
}

document.getElementById('alerts').addEventListener('click',() =>{
    alerts.classList.remove('show')
    alerts.classList.add('hide')
})

function error2() {
    let MsgErr = 'Falha na criação do usuario'
    

    closeMsg2()
            if(y == 0){
                y++
            ab.style.backgroundImage = nOk

            a.innerHTML = MsgErr

            showMsg2()
            }

}

function closeMsg2(){
    if(y == 1){
    let timer = setTimeout(()=>{
        alerts.classList.remove('show')
        alerts.classList.add('hide')
        y = 0
    },4800)
}
}

function showMsg2(){

    if(alerts.classList.contains("hidden")){
        alerts.classList.remove("hidden")
    }
    
    alerts.classList.remove('hide')
    alerts.classList.add('show')
    y = 1
    closeMsg2()
}

function OkProcess2(){
    let timer = setTimeout(() =>{
        document.querySelector("#view").classList.remove("offline")
        document.querySelector("#view").classList.add("online")
        document.querySelector(".loading").classList.add("offScreen")
        ab.style.backgroundImage = ok,
        a.innerHTML = "O processamento foi realizado!!!"
        closeMsg2()
        showMsg2() 
        viewGrf = true 
        let timer1 = setTimeout(()=>{
            document.querySelector(".loading").style.display = "none"
        }, 900)
    },5000)
    

}