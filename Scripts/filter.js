let selG = 0
let grSelect = []
let del = false
let listOpt = document.getElementById('selectInfos')
let qList = document.getElementById("QList")
let opf
let selValues = document.getElementById("selValues")
let gValues = [] 
let firstTime = false

function self(){
    opf= document.getElementById("selectInfos").selectedIndex
    if(firstTime == false){
        opf--
        firstTime = true
    }
    selG = 0
    while(grSelect.length){
        grSelect.pop()
    }
    while(gValues.length){
        gValues.pop()
    }
    selValues.innerText = ""

    if(opf == 2){
    selValues.innerText = "Todos os gáficos foram selecionados"}
}
 

document.querySelector("#filter").addEventListener("click",()=>{
    document.querySelector("#popup").style.display = "none"

})

function listagem(){
    const list = document.querySelector("#QList")
    for(let i = 0; i < 73; i++){

            if(i == 0 || i ==1 || i ==4 || i == 33 || i == 72){
                }else{
            let opt = document.createElement("option")
            opt.text = perguntas[i]
            let id = document.createAttribute("id")
            id.value = `op${i}`
            opt.setAttributeNode(id)
            list.appendChild(opt)
        }
    }
}

function exec(){
    
    if(opf == 0 && selG == 0){
        insertIu()

    }else if( opf == 1 && selG < 2){
        insertIu()
    }else if(opf == 3){
        insertIu()
    }else{
        alert("deu erro ai amigo")
    }

    
}

function disable(){
    if(del == false){

        listOpt.remove(0) 
        del = true
    }
   
}

function insertIu(){
    let iu = qList.options[qList.selectedIndex].text.replace(/\D+/g, '')
    if(iu.length > 2){
        iu = iu.substr(0,2)+"."+iu.substr(2)
    }
    if(grSelect.indexOf(qList.selectedIndex) == -1){
        if(iu >= 25 && iu <= 27){
            let inde = qList.selectedIndex
            if( inde >= 38 && inde <= 43){
                inde = inde -38
            } else if(inde >= 44 && inde <= 46){
                inde = inde -44
            }else if(inde >= 47 && inde <= 53){
                inde = inde -47
            }
            iu = iu+"."+inde
        }
    gValues.push(iu)
    grSelect.push(qList.selectedIndex)
    
    if(selG == 8 || selG == 18 || selG == 28 || selG == 38 || selG == 48 || selG == 58){
        selValues.innerHTML+= `${iu}<br>`
    }else{
        selValues.innerHTML+= `${iu} | `
    }
    selG++
    console.log(qList.selectedIndex)
    console.log(grSelect)
    }else{
        alert("O número repetiu")
    }
}

document.getElementById("filter").addEventListener("click",() =>{
    console.log("oi")
    if(opf == 0){
        for(let i = 0; i < grSelect.length; i++){
            let index = grSelect[i]
            document.getElementById(`nchart${index+1}`).style.display = "block"
        }
    }
})