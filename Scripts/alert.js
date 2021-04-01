'use strict'
const a = document.getElementById('alerts')
const ab = document.querySelector('.alertBox')
const ok = "linear-gradient(to right, #004EF2, #0B85DB)"
const nOk = "linear-gradient(to right, #9B120C,#F9120C)"
let y = 0


function archive() {
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

function error(x) {
    switch(x){

        case 1:   
        if(y == 0){
            y++
            closeMsg()
            ab.style.backgroundImage = nOk

            a.innerHTML = `O formato do arquivo ${sFile.name} não é suportado`

            showMsg()
        }
        break;

        case 2:
            closeMsg()
            if(y == 0){
                y++
            ab.style.backgroundImage = nOk

            a.innerHTML = `Nenhuma planilha foi selecionada`

            showMsg()
            }
        break;

    

    }

}

function closeMsg(){
    if(y == 1){
    let timer = setTimeout(()=>{
        alerts.classList.remove('show')
        alerts.classList.add('hide')
        y = 0
    },4800)
}
}

function showMsg(){

    if(alerts.classList.contains("hidden")){
        alerts.classList.remove("hidden")
    }
    
    alerts.classList.remove('hide')
    alerts.classList.add('show')
    y = 1
    closeMsg()
}

function OkProcess(){
    let timer = setTimeout(() =>{
        ab.style.backgroundImage = ok,
        a.innerHTML = "O processamento foi realizado!!!"
        closeMsg()
        showMsg()
        
    },5000)
    

}