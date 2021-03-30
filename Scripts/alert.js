var a = document.getElementById('alerts')
var ab = document.querySelector('.alertBox')
let y = 0

function archive() {
            ab.style.backgroundImage = "linear-gradient(to right, #004EF2, #0B85DB)"
            a.innerHTML = `O arquivo ${sFile.name} foi selecionado!`


            if(alerts.classList.contains("hidden")){
                alerts.classList.remove("hidden")
            }
            alerts.classList.remove('hide')
            alerts.classList.add('show')

            let timer = setTimeout(()=>{
                alerts.classList.remove('show')
                alerts.classList.add('hide')
            },4800)

}

document.getElementById('alerts').addEventListener('click',() =>{
    alerts.classList.remove('show')
    alerts.classList.add('hide')
})

function error(x) {
    switch(x){

        case 1:   
            
            ab.style.backgroundImage = "linear-gradient(to right, #9B120C,#F9120C)"

            a.innerHTML = `O formato do arquivo ${sFile.name} não é suportado`


            if(alerts.classList.contains("hidden")){
                alerts.classList.remove("hidden")
            }
            alerts.classList.remove('hide')
            alerts.classList.add('show')

            let timer = setTimeout(()=>{
                alerts.classList.remove('show')
                alerts.classList.add('hide')
            },4800)
        break;

        case 2:
            
            if(y == 0){
                y = 1
            ab.style.backgroundImage = "linear-gradient(to right, #9B120C,#F9120C)"

            a.innerHTML = `Nenhuma planilha foi selecionada`


            if(alerts.classList.contains("hidden")){
                alerts.classList.remove("hidden")
            }
            alerts.classList.remove('hide')
            alerts.classList.add('show')

            let timer = setTimeout(()=>{
                alerts.classList.remove('show')
                alerts.classList.add('hide')
                y = 0
            },4800)
            }
        break

    

    }

}