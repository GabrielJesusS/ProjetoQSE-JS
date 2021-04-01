let selG = 0
let grSelect = []
let del = false
let listOpt = document.getElementById('selectInfos')
let opf

function self(){
    opf= document.getElementById("selectInfos").selectedIndex
    selG = 0
}
 

document.querySelector("#filter").addEventListener("click",()=>{
    document.querySelector("#popup").style.display = "none"

})

function listagem(){
    const list = document.querySelector("#QList")
    for(let i = 0; i < 73; i++){

            if(i == 0 || i ==1 || i ==4 || i == 33){
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

    if(opf == 1 && selG == 0){
    let iu = document.getElementById("QList").selectedIndex
    console.log(iu)
    selG++
    }else if( opf == 2 && selG < 2){
    
    }else if(opf == 3){
        
    }else if(opf == 4){

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