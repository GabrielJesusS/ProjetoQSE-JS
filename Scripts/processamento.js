function procesamento(){

let sFile;
     
    let datas

    document.getElementById('fileUpload').addEventListener('onClick',(event)=>{
        sFile = event.target.files[0];
        console.log(event.target.files);
    });
        
    
    
        console.log(sFile)
        console.log("Click")
        if(sFile){
            console.log('1')
            let fileReader = new FileReader();
            fileReader.readAsBinaryString(sFile);
            fileReader.onload = (event)=>{
                console.log(event.target.result)
                let data = event.target.result
                let workbook = XLSX.read(data,{type:"binary"});
                console.log(workbook)
                let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets['Form Responses 1']);
                workbook.SheetNames.forEach(sheet => {
                    let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                    document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)
                    datas = rowObject
                });
                grafico()
            }
        }
        

    }

function grafico(){        
        //document.write(datas.length)
        //document.write("<hr><br>")
        console.log("teste")
        let gender ={
            f:0,
            m:0,
            ns:0
        }
        //document.write(datas[0]["6. Qual o seu gênero?"])
        let gender2 ={
            s:0,
            m:0,
            p:0,
            pe:0
        }

        for(let i = 0; i < rowObject.length; i++){
    
        if(rowObject[i]["6. Qual o seu gênero?"] === "Feminino"){
            gender.f++
        }else if(rowObject[i]["6. Qual o seu gênero?"] === "Masculino"){
            gender.m++
        }else{
            gender.ns++
        }
        } 
        //document.write("<hr><br>")
        

        for(let i = 0; i < rowObject.length; i++){
    
        if(rowObject[i]["4. Qual o estado do Brasil que você nasceu?"] === "São Paulo (SP)"){
            gender2.s++
        }else if(rowObject[i]["4. Qual o estado do Brasil que você nasceu?"] === "Minas Gerais (MG)"){
            gender2.m++
        }else if(rowObject[i]["4. Qual o estado do Brasil que você nasceu?"] === "Paraná (PR)"){
            gender2.p++
        }else{
            gender2.pe++
        }
        } 


        var ctx = document.getElementById("nchart")

        var ctx2 = document.getElementById("nchart2")

        var chartGraph = new Chart(ctx2,{
            type: "doughnut",
            data:{
                labels: ["SP","MG","PR", "PE"],
                datasets: [{
                    data:[gender2.s,gender2.m,gender2.p,gender2.pe],
                    
                    backgroundColor: ["#1639DB", "#ff6384", "#DBA400", "#FF5733"]

                }]
            }
        })

        var chartGraph = new Chart(ctx,{
            type: "doughnut",
            data:{
                labels: ["Masculino","Feminino","Não sabe responder"],
                datasets: [{
                    data:[gender.m,gender.f,gender.ns],
                    
                    backgroundColor: ["#1639DB", "#ff6384", "#DBA400"]

                }]
            }
        })
   
    }
