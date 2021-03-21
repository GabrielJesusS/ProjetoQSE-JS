function teste(){
    let sFile;
     
    let datas

    document.getElementById('fileUpload').addEventListener('change',(event)=>{
        sFile = event.target.files[0];
        console.log(event.target.files);
    });
        

    
    document.getElementById('uploadExcel').addEventListener('click',()=>{
        console.log("Click")
        if(sFile){
            let fileReader = new FileReader();
            fileReader.readAsBinaryString(sFile);
            fileReader.onload = (event)=>{
                console.log(event.target.result)
                let data = event.target.result
                let workbook = XLSX.read(data,{type:"binary"});
                console.log(workbook)
                console.log(workbook.Sheets)
                let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets['Form Responses 1']);
                workbook.SheetNames.forEach(sheet => {
                    //let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                    //document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)
                    //datas = rowObject
                });

                let first_sheet_name = workbook.SheetNames[0];
                let address_of_cell = 'B';
                let worksheet = workbook.Sheets[first_sheet_name];
                let desired_cell = '';
                let tests = [];
                let i = 1
                do {
                    //console.log(address_of_cell+i);
                    //console.log(worksheet[address_of_cell+i].v)
                    //tests = tests + ',' + worksheet[address_of_cell+i].v;
                    desired_cell = desired_cell + worksheet[address_of_cell];
                    //console.log(rowObject[i].Timestamp)
                    tests.push(rowObject[i].Timestamp)
                    tests2.push(rowObject[i]["Email Address"])
                    i++;
                    //console.log(tests);
                } while (i<50)
                console.log(tests);
                grafico()
            }
        }
    })
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

    for(let i = 0; i < datas.length; i++){

    if(datas[i]["6. Qual o seu gênero?"] === "Feminino"){
        gender.f++
    }else if(datas[i]["6. Qual o seu gênero?"] === "Masculino"){
        gender.m++
    }else{
        gender.ns++
    }
    } 
    //document.write("<hr><br>")
    

    for(let i = 0; i < datas.length; i++){

    if(datas[i]["4. Qual o estado do Brasil que você nasceu?"] === "São Paulo (SP)"){
        gender2.s++
    }else if(datas[i]["4. Qual o estado do Brasil que você nasceu?"] === "Minas Gerais (MG)"){
        gender2.m++
    }else if(datas[i]["4. Qual o estado do Brasil que você nasceu?"] === "Paraná (PR)"){
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