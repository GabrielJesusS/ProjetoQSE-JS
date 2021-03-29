
        let sFile;
        let datas
        let alerts = document.querySelector(".alertBox")

        document.getElementById('fileUpload').addEventListener('change',(event)=>{
            sFile = event.target.files[0];
            //console.log(event.target.files);
            //console.log(sFile.name)

            if(sFile){
                let fileReader = new FileReader();
                fileReader.readAsBinaryString(sFile);
                fileReader.onload = (event)=>{
                    //console.log(event.target.result)
                    let data = event.target.result
                    let workbook = XLSX.read(data,{type:"binary"});
                    
                    workbook.SheetNames.forEach(sheet => {
                        let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                        
                        datas = rowObject
                    });
                }
            }

            document.getElementById('process').style.backgroundImage = "linear-gradient(to right, #004EF2, #0B85DB)"

            document.getElementById('alerts').innerHTML = `O arquivo ${sFile.name} foi selecionado!`


            if(alerts.classList.contains("hidden")){
                alerts.classList.remove("hidden")
            }
            alerts.classList.remove('hide')
            alerts.classList.add('show')

            let timer = setTimeout(()=>{
                alerts.classList.remove('show')
                alerts.classList.add('hide')
            },4800)

        });

        document.getElementById('alerts').addEventListener('click',() =>{
            alerts.classList.remove('show')
            alerts.classList.add('hide')
        })
            


        let v = 0
        document.getElementById('view').addEventListener('click',()=>{

            if(v == 0){
            document.getElementById("nchart1").style.display = 'block';
                console.log("clicado")
                v++
            }else{
                document.getElementById("nchart1").style.display = 'none';
                v-- 
            }
        })

        document.getElementById('process').addEventListener('click',()=>{
            
            
            
            //document.write(datas.length)
            //document.write("<hr><br>")

            //<canvas id="nchart" class="chartsjs" width="33" height="10" ></canvas>
            console.log(datas)
            if(sFile === undefined){ 
                alert("Nenhuma planilha foi inserida")
            }else{
            

            for(let i = 1; i <= 68; i++){

                //criando o elemento canvas de forma automática
                let graf = document.getElementById("graficos")
                let canv = document.createElement("canvas")
                graf.appendChild(canv)

                //criando atributos para os canvas
                let id = document.createAttribute("id")
                let classe = document.createAttribute("class")
                let w = document.createAttribute("width")
                let h = document.createAttribute("height")
                
                //atribuindo valores aos atributos
                id.value = `nchart${i}`
                classe.value = "chartsjs"
                w.value = "33"
                h.value = "10"

                //atribuindo atributos aos elementos criados
                canv.setAttributeNode(id)
                canv.setAttributeNode(classe)
                canv.setAttributeNode(h)
                canv.setAttributeNode(w)

            }

            console.log("teste")

            
           
            //fim das variáveis

            //inicio das contagens
            for(let i = 0; i < datas.length; i++){
                //genero
            if(datas[i]["6. Qual o seu gênero?"] === "Feminino"){
                q6.f++
            }else if(datas[i]["6. Qual o seu gênero?"] === "Masculino"){
                q6.m++
            }else{
                q6.ns++
            }
        
        
            //estado
            if(datas[i]["4. Qual o estado do Brasil que você nasceu?"] === "São Paulo (SP)"){
                q4.s++
            }else if(datas[i]["4. Qual o estado do Brasil que você nasceu?"] === "Minas Gerais (MG)"){
                q4.m++
            }else if(datas[i]["4. Qual o estado do Brasil que você nasceu?"] === "Paraná (PR)"){
                q4.p++
            }else{
                q4.pe++
            }
             
        
            //curso
            if(datas[i]["1. Qual o seu curso?"] === "Análise e Desenvolvimento de Sistemas (ADS)"){
                q1.a++
            }else if(datas[i]["1. Qual o seu curso?"] === "Gestão de Recursos Humanos (GRH)"){
                q1.r++
            }else if(datas[i]["1. Qual o seu curso?"] === "Gestão de Produção Industrial (GPI)"){
                q1.g++
            }else {
                q1.d++  
            }
             

            //periodo
            if(datas[i]["2. Qual o período que cursa?"] === "Matutino"){
                q2.m++
            }else {
                q2.n++
            }


            //cidade
            if(datas[i]["5. Qual sua cidade de residência?"] === "Franca"){
                q5.f++
            }else if(datas[i]["5. Qual sua cidade de residência?"] === "Ipuã"){
                q5.i++
            }else if(datas[i]["5. Qual sua cidade de residência?"] === "Patrocínio Paulista"){
                q5.p++
            }else if(datas[i]["5. Qual sua cidade de residência?"] === "Ribeirão Corrente"){
                q5.rc++
            }else if(datas[i]["5. Qual sua cidade de residência?"] === "Ribeirão Preto"){
                q5.rp++
            }else{
                q5.s++
            }
            

            //calculo de idade
                let date = new Date()
                let ano = date.getFullYear()
                let idade = datas[i]["7. Qual a sua data de nascimento?"]
                let anob =  ano - 1900
                let days = 0
                
                for(let j = 1; j <= anob; j++){
                    if(j%4 === 0){
                        days+=366
                    }
                    else{
                        days+=365
                    }
                }

                idade = days - idade
                idade = idade/365
                idade = Math.round(idade)
                

                if(idade >= 18 && idade <= 20){
                    q7["18e20"]++
                }else if(idade >= 21 && idade <= 25){
                    q7["21e25"]++
                }else if(idade >= 26 && idade <= 30){
                    q7["26e30"]++
                }else if(idade >= 31 && idade <= 50){
                    q7["31e50"]++
                }else if(idade > 50){
                    q7["m50"]++
                }


            //estado civil
            if(datas[i]["8. Qual é o seu estado civil?"] === "Solteiro(a)"){
                q8.s++
            }else if(datas[i]["8. Qual é o seu estado civil?"] === "Casado(a) ou União Estável"){
                q8.c++
            }else{
                q8.o++
            }
        
            
            //necessidade
            if(datas[i]["9. Você é portador de alguma necessidade especial?(Pode selecionar mais de uma, se for o caso)"] === "Visual"){
                q9.v++
            }else {
                q9.n++
            }
            
            
            //mora com alguem com necessidade
            if(datas[i]["10. Você convive ou mora com alguma pessoa com deficiência?"] === "Autismo"){
                q10.at++
            }else if(datas[i]["10. Você convive ou mora com alguma pessoa com deficiência?"] === "Auditiva"){
                q10.ad++
            }else if(datas[i]["10. Você convive ou mora com alguma pessoa com deficiência?"] === "Síndrome de Down"){
                q10.s++
            }else{
                q10.n++
            }
             

            //quantos filhos
            if(datas[i]["11. Quantos filhos você tem?"] === "Um"){
                q11.u++
            }else if(datas[i]["11. Quantos filhos você tem?"] === "Dois"){
                q11.d++
            }else if(datas[i]["11. Quantos filhos você tem?"] === "Três"){
                q11.t++
            }else{
                q11.n++
            }
            

            //com quem mora
            if(datas[i]["12. Com quem você mora atualmente?"] === "Com amigos (compartilhando despesas) ou de favor"){
                q12.a++
            }else if(datas[i]["12. Com quem você mora atualmente?"] === "Com esposa(o) e(ou) filho(s)"){
                q12.e++
            }else if(datas[i]["12. Com quem você mora atualmente?"] === "Com pais e(ou) parentes"){
                q12.p++
            }else{
                q12.s++
            }
             

            //quantas pessoas moram na casa
            if(datas[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] === 1){
                q13.a++
            }else if(datas[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] === 2){
                q13.b++
            }else if(datas[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] === 3){
                q13.c++
            }else if(datas[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] === 4){
                q13.d++
            }else if(datas[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] === 5){
                q13.e++
            }else if(datas[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] === 6){
                q13.f++
            }else{
                q13.g++
            }
            
            //situação do domicilio
            if(datas[i]["14. Qual a situação do domicílio onde mora?"] === "Próprio"){
                q14.p++
            }else if(datas[i]["14. Qual a situação do domicílio onde mora?"] === "Alugado"){
                q14.a++
            }else if(datas[i]["14. Qual a situação do domicílio onde mora?"] === "Cedido"){
                q14.c++
            }else if(datas[i]["14. Qual a situação do domicílio onde mora?"] === "Financiado"){
                q14.f++
            }else if(datas[i]["14. Qual a situação do domicílio onde mora?"] === "Arrendado"){
                q14.ar++
            }else{
                q14.men++
            }


            //tempo de moradia
            let temp = datas[i]["15. Tempo de moradia neste domicílio (Em anos)"]
            if(temp >= 1 && temp <= 5){
                q15["1e5"]++
            }else if(temp >= 6 && temp <= 10){
                q15["6e10"]++
            }else if(temp >= 11 && temp <= 15){
                q15["11e15"]++
            }else if(temp >= 16 && temp <= 20){
                q15["16e20"]++
            }else{
                q15["m20"]++
            }


            //renda mensal familiar
            if(datas[i]["16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)"] === "Até dois salários mínimos"){
                q16["a2"]++
            }else if(datas[i]["16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)"] === "Mais de dois até cinco salários mínimos"){
                q16["m2a5"]++
            }else if(datas[i]["16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)"] === "Mais de cinco até dez salários mínimos"){
                q16["m5a10"]++
            }else if(datas[i]["16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)"] === "Mais de dez até vinte salários mínimos"){
                q16["m10a20"]++
            }else if(datas[i]["16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)"] === "Mais de vinte salários mínimos"){
                q16["m20"]++
            }else{
                q16['pf']++
            }


            //questão 17 é dividida em 10 perguntas, de a até j

            if(datas[i]["17.1. Quantas geladeiras há em seu domicílio."] == 0){
                q17a.zero++
            }else if(datas[i]["17.1. Quantas geladeiras há em seu domicílio."] == 1){
                q17a.um++
            }else if(datas[i]["17.1. Quantas geladeiras há em seu domicílio."] == 2){
                q17a.dois++
            }else if(datas[i]["17.1. Quantas geladeiras há em seu domicílio."] == 3){
                q17a.tres++
            }else  if(datas[i]["17.1. Quantas geladeiras há em seu domicílio."] == 4){
                q17a.quat++
            }else{
                q17a.mquat++
            }

            if(datas[i]["17.2. Quantos celulares comuns há em seu domicílio?"] == 0){
                q17b.zero++
            }else if(datas[i]["17.2. Quantos celulares comuns há em seu domicílio?"] == 1){
                q17b.um++
            }else if(datas[i]["17.2. Quantos celulares comuns há em seu domicílio?"] == 2){
                q17b.dois++
            }else if(datas[i]["17.2. Quantos celulares comuns há em seu domicílio?"] == 3){
                q17b.tres++
            }else  if(datas[i]["17.2. Quantos celulares comuns há em seu domicílio?"] == 4){
                q17b.quat++
            }else{
                q17b.mquat++
            }

            if(datas[i]["17.3. Quantos micro-ondas há em seu domicílio?"] == 0){
                q17c.zero++
            }else if(datas[i]["17.3. Quantos micro-ondas há em seu domicílio?"] == 1){
                q17c.um++
            }else if(datas[i]["17.3. Quantos micro-ondas há em seu domicílio?"] == 2){
                q17c.dois++
            }else if(datas[i]["17.3. Quantos micro-ondas há em seu domicílio?"] == 3){
                q17c.tres++
            }else  if(datas[i]["17.3. Quantos micro-ondas há em seu domicílio?"] == 4){
                q17c.quat++
            }else{
                q17c.mquat++
            }

            if(datas[i]["17.4. Quantos notebooks há em seu domicílio?"] == 0){
                q17d.zero++
            }else if(datas[i]["17.4. Quantos notebooks há em seu domicílio?"] == 1){
                q17d.um++
            }else if(datas[i]["17.4. Quantos notebooks há em seu domicílio?"] == 2){
                q17d.dois++
            }else if(datas[i]["17.4. Quantos notebooks há em seu domicílio?"] == 3){
                q17d.tres++
            }else  if(datas[i]["17.4. Quantos notebooks há em seu domicílio?"] == 4){
                q17d.quat++
            }else{
                q17d.mquat++
            }

            if(datas[i]["17.5. Quantas máquinas de lavar roupa e(ou) tanquinho há em seu domicílio?"] == 0){
                q17e.zero++
            }else if(datas[i]["17.5. Quantas máquinas de lavar roupa e(ou) tanquinho há em seu domicílio?"] == 1){
                q17e.um++
            }else if(datas[i]["17.5. Quantas máquinas de lavar roupa e(ou) tanquinho há em seu domicílio?"] == 2){
                q17e.dois++
            }else if(datas[i]["17.5. Quantas máquinas de lavar roupa e(ou) tanquinho há em seu domicílio?"] == 3){
                q17e.tres++
            }else  if(datas[i]["17.5. Quantas máquinas de lavar roupa e(ou) tanquinho há em seu domicílio?"] == 4){
                q17e.quat++
            }else{
                q17e.mquat++
            }

            if(datas[i]["17.6. Quantas motocicletas há em seu domicílio?"] == 0){
                q17f.zero++
            }else if(datas[i]["17.6. Quantas motocicletas há em seu domicílio?"] == 1){
                q17f.um++
            }else if(datas[i]["17.6. Quantas motocicletas há em seu domicílio?"] == 2){
                q17f.dois++
            }else if(datas[i]["17.6. Quantas motocicletas há em seu domicílio?"] == 3){
                q17f.tres++
            }else  if(datas[i]["17.6. Quantas motocicletas há em seu domicílio?"] == 4){
                q17f.quat++
            }else{
                q17f.mquat++
            }

            if(datas[i]["17.7. Quantos automóveis há em seu domicílio?"] == 0){
                q17g.zero++
            }else if(datas[i]["17.7. Quantos automóveis há em seu domicílio?"] == 1){
                q17g.um++
            }else if(datas[i]["17.7. Quantos automóveis há em seu domicílio?"] == 2){
                q17g.dois++
            }else if(datas[i]["17.7. Quantos automóveis há em seu domicílio?"] == 3){
                q17g.tres++
            }else  if(datas[i]["17.7. Quantos automóveis há em seu domicílio?"] == 4){
                q17g.quat++
            }else{
                q17g.mquat++
            }

            if(datas[i]["17.8. Quantos vídeos cassete e(ou) DVD players há em seu domicílio?"] == 0){
                q17h.zero++
            }else if(datas[i]["17.8. Quantos vídeos cassete e(ou) DVD players há em seu domicílio?"] == 1){
                q17h.um++
            }else if(datas[i]["17.8. Quantos vídeos cassete e(ou) DVD players há em seu domicílio?"] == 2){
                q17h.dois++
            }else if(datas[i]["17.8. Quantos vídeos cassete e(ou) DVD players há em seu domicílio?"] == 3){
                q17h.tres++
            }else  if(datas[i]["17.8. Quantos vídeos cassete e(ou) DVD players há em seu domicílio?"] == 4){
                q17h.quat++
            }else{
                q17h.mquat++
            }

            if(datas[i]["17.9. Quantos televisores há em seu domicílio?"] == 0){
                q17i.zero++
            }else if(datas[i]["17.9. Quantos televisores há em seu domicílio?"] == 1){
                q17i.um++
            }else if(datas[i]["17.9. Quantos televisores há em seu domicílio?"] == 2){
                q17i.dois++
            }else if(datas[i]["17.9. Quantos televisores há em seu domicílio?"] == 3){
                q17i.tres++
            }else  if(datas[i]["17.9. Quantos televisores há em seu domicílio?"] == 4){
                q17i.quat++
            }else{
                q17i.mquat++
            }

            if(datas[i]["17.10. Quantos smartphones há em seu domicílio?"] == 0){
                q17j.zero++
            }else if(datas[i]["17.10. Quantos smartphones há em seu domicílio?"] == 1){
                q17j.um++
            }else if(datas[i]["17.10. Quantos smartphones há em seu domicílio?"] == 2){
                q17j.dois++
            }else if(datas[i]["17.10. Quantos smartphones há em seu domicílio?"] == 3){
                q17j.tres++
            }else  if(datas[i]["17.10. Quantos smartphones há em seu domicílio?"] == 4){
                q17j.quat++
            }else{
                q17j.mquat++
            }
            
            
            //no seu domicilio tem?
            if(datas[i]["18. No seu domicílio tem?"].indexOf("Telefone") > -1){
                q18.tel++}
            if(datas[i]["18. No seu domicílio tem?"].indexOf("Internet") > -1){
                q18.inte++}
            if(datas[i]["18. No seu domicílio tem?"].indexOf("Tv") > -1){
                q18.tv++}
            if(datas[i]["18. No seu domicílio tem?"].indexOf("Empregada") > -1){
                q18.emp++}
            if(datas[i]["18. No seu domicílio tem?"].indexOf("Nenhuma") > -1){
                q18.na++}
            
            
            //questão 19 dividida em 4 perguntas
            if(datas[i]["19.1. Você trabalha?"] === "Sim") {
                q19a.s++
            }else{
                q19a.n++
            }

            if(datas[i]["19.2. Qual o seu vínculo com o emprego?"] == "Não trabalho"){
                q19b.nt++
            }else if(datas[i]["19.2. Qual o seu vínculo com o emprego?"] == "Sou registrado em indústria (calçados/confecções/outras)"){
                q19b.sri++
            }else if(datas[i]["19.2. Qual o seu vínculo com o emprego?"] == "Sou registrado no comércio"){
                q19b.src++
            }else if(datas[i]["19.2. Qual o seu vínculo com o emprego?"] == "Sou registrado em empresa prestadora de serviços"){
                q19b.sre++
            }else if(datas[i]["19.2. Qual o seu vínculo com o emprego?"] == "Sou registrado em empresa pública (federal/estadual/municipal)"){
                q19b.sep++
            }else if(datas[i]["19.2. Qual o seu vínculo com o emprego?"] == "Sou autônomo"){
                q19b.sat++
            }else if(datas[i]["19.2. Qual o seu vínculo com o emprego?"] == "Sou empresário"){
                q19b.semp++
            }else {
                q19b.sest++
            } 

            if(datas[i]["19.3. Qual a área do seu trabalho?"] == "Não trabalho"){
                q19c.nt++
            }else if(datas[i]["19.3. Qual a área do seu trabalho?"] == "Trabalho na área do curso"){
                q19c.tac++
            }else {
                q19c.tfc++
            }    

            if(datas[i]["19.4. Qual seu horário de trabalho?"] == "Não trabalho"){
                q19d.nt++
            }else if(datas[i]["19.4. Qual seu horário de trabalho?"] == "Manhã"){
                q19d.m++
            }else if(datas[i]["19.4. Qual seu horário de trabalho?"] == "Tarde"){
                q19d.t++
            }else if(datas[i]["19.4. Qual seu horário de trabalho?"] == "Noite"){
                q19d.n++
            }else if(datas[i]["19.4. Qual seu horário de trabalho?"] == "Manhã e tarde"){
                q19d.mt++
            }else if(datas[i]["19.4. Qual seu horário de trabalho?"] == "Manhã e noite"){
                q19d.mn++
            }else if(datas[i]["19.4. Qual seu horário de trabalho?"] == "Tarde e noite"){
                q19d.tn++
            }else{
                q19d.regt++
            }


            //plano de saude
            if(datas[i]["20. Você tem plano de saúde privado?"] == "Não tenho, uso o SUS"){
                q20.nsus++
            }else if(datas[i]["20. Você tem plano de saúde privado?"] == "Tenho e é pago integralmente pela empresa"){
                q20.page++
            }else if(datas[i]["20. Você tem plano de saúde privado?"] == "Tenho e é pago parcialmente pela empresa"){
                q20.pagp++
            }else if(datas[i]["20. Você tem plano de saúde privado?"] == "Tenho e é um plano familiar"){
                q20.pf++
            }else {
                q20.pi++
            }


            //escolaridade do pai e mãe // 21 a e b
            if(datas[i]["21.1. Qual o grau de escolaridade do seu pai?"] == 'Nenhuma escolaridade'){
                q21a.ne++
            }else if(datas[i]["21.1. Qual o grau de escolaridade do seu pai?"] == 'Ensino fundamental I (1º ao 5º anos)'){
                q21a.ef1++
            }else if(datas[i]["21.1. Qual o grau de escolaridade do seu pai?"] == 'Ensino fundamental II (6º ao 9º anos)'){
                q21a.ef2++
            }else if(datas[i]["21.1. Qual o grau de escolaridade do seu pai?"] == 'Ensino Médio'){
                q21a.em++
            }else if(datas[i]["21.1. Qual o grau de escolaridade do seu pai?"] == 'Ensino Superior'){
                q21a.es++
            }else if(datas[i]["21.1. Qual o grau de escolaridade do seu pai?"] == 'Pós-graduação'){
                q21a.pg++
            }else {
                q21a.pfn++
            }

            if(datas[i]["21.2. Qual o grau de escolaridade da sua mãe?"] == 'Nenhuma escolaridade'){
                q21b.ne++
            }else if(datas[i]["21.2. Qual o grau de escolaridade da sua mãe?"] == 'Ensino fundamental I (1º ao 5º anos)'){
                q21b.ef1++
            }else if(datas[i]["21.2. Qual o grau de escolaridade da sua mãe?"] == 'Ensino fundamental II (6º ao 9º anos)'){
                q21b.ef2++
            }else if(datas[i]["21.2. Qual o grau de escolaridade da sua mãe?"] == 'Ensino Médio'){
                q21b.em++
            }else if(datas[i]["21.2. Qual o grau de escolaridade da sua mãe?"] == 'Ensino Superior'){
                q21b.es++
            }else if(datas[i]["21.2. Qual o grau de escolaridade da sua mãe?"] == 'Pós-graduação'){
                q21b.pg++
            }else {
                q21b.pfn++
            }


            //sua escolaridade
            if(datas[i]["22. Na sua vida escolar você estudou"] == 'Sempre em escola pública'){
                q22.sp++
            }else if(datas[i]["22. Na sua vida escolar você estudou"] == 'A maior parte em escola pública'){
                q22.mp++
            }else if(datas[i]["22. Na sua vida escolar você estudou"] == 'Sempre em escola particular paga pela família'){
                q22.ep++
            }else if(datas[i]["22. Na sua vida escolar você estudou"] == 'Sempre em escola particular com bolsa'){
                q22.pb++
            }else if(datas[i]["22. Na sua vida escolar você estudou"] == 'A maior parte em escola particular paga pela família'){
                q22.epp++
            }else {
                q22.pcb++
            }
            

            //questão 23 dividida em 3 perguntas
            if(datas[i]["23.1. Com que frequência você utiliza microcomputadores?"] == 'Nunca'){
                q23a.na++
            }else if(datas[i]["23.1. Com que frequência você utiliza microcomputadores?"] == 'Pouco'){
                q23a.p++
            }else if(datas[i]["23.1. Com que frequência você utiliza microcomputadores?"] == 'Ás vezes'){
                q23a.as++
            }else if(datas[i]["23.1. Com que frequência você utiliza microcomputadores?"] == 'Muito'){
                q23a.m++
            }else {
                q23a.s++
            }

            if(datas[i]["23.2. Onde você utiliza microcomputadores?"].indexOf("casa") > -1){
                q23b.ec++
            }
            if(datas[i]["23.2. Onde você utiliza microcomputadores?"].indexOf("trabalho") > -1){
                q23b.t++
            }
            if(datas[i]["23.2. Onde você utiliza microcomputadores?"].indexOf("escola") > -1){
                q23b.e++
            }
            if(datas[i]["23.2. Onde você utiliza microcomputadores?"].indexOf("outros") > -1){
                q23b.ou++
            }
            

            if(datas[i]["23.3. Com qual finalidade você utiliza microcomputadores?"].indexOf("profissionais") > -1){
                q23c.tp++
            }
            if(datas[i]["23.3. Com qual finalidade você utiliza microcomputadores?"].indexOf("escolares") > -1){
                q23c.te++
            }
            if(datas[i]["23.3. Com qual finalidade você utiliza microcomputadores?"].indexOf("entretenimento") > -1){
                q23c.e++
            }
            if(datas[i]["23.3. Com qual finalidade você utiliza microcomputadores?"].indexOf("e-mail") > -1){
                q23c.c++
            }
            if(datas[i]["23.3. Com qual finalidade você utiliza microcomputadores?"].indexOf("operações") > -1){
                q23c.op++
            }
            if(datas[i]["23.3. Com qual finalidade você utiliza microcomputadores?"].indexOf("compras") > -1){
                q23c.com++
            }
            

            //conhecimento em informática
            if(datas[i]["24. Como você classifica seu conhecimento em informática"] == 'Nenhum'){
                q24.n++
            }else if(datas[i]["24. Como você classifica seu conhecimento em informática"] == 'Pouco'){
                q24.p++
            }else if(datas[i]["24. Como você classifica seu conhecimento em informática"] == 'Intermediário'){
                q24.i++
            }else {
                q24.a++
            }


            //conhecimento de softwares
            for(let k = 0; k < 6; k++){
                if(datas[i][`25. Qual o seu conhecimento em relação aos aplicativos a seguir? [${tecno[k]}]`] == "Nenhum"){
                    q25[k].n++
                    
                }else if(datas[i][`25. Qual o seu conhecimento em relação aos aplicativos a seguir? [${tecno[k]}]`] == "Pouco"){
                    q25[k].p++
                    
                }else if(datas[i][`25. Qual o seu conhecimento em relação aos aplicativos a seguir? [${tecno[k]}]`] == "Intermediário"){
                    q25[k].i++
                    
                }else if(datas[i][`25. Qual o seu conhecimento em relação aos aplicativos a seguir? [${tecno[k]}]`] == "Muito Avançado"){
                    q25[k].a++
                    
                }

                

            }

            //26 linguas
            for(let k = 0; k < 3; k++){
                if(datas[i][`26. Agora, considere seu conhecimento sobre idiomas [${lang[k]}]`] == "Leio, escrevo e falo bem"){
                    q26[k].leb++
                    
                }else if(datas[i][`26. Agora, considere seu conhecimento sobre idiomas [${lang[k]}]`] == "Leio, escrevo e falo razoavelmente"){
                    q26[k].ler++
                    
                }else if(datas[i][`26. Agora, considere seu conhecimento sobre idiomas [${lang[k]}]`] == "Leio e escrevo mas não falo"){
                    q26[k].le++
                    
                }else if(datas[i][`26. Agora, considere seu conhecimento sobre idiomas [${lang[k]}]`] == "Leio mas não escrevo nem falo"){
                    q26[k].l++
                    
                }else if(datas[i][`26. Agora, considere seu conhecimento sobre idiomas [${lang[k]}]`] == "Praticamente nula"){
                    q26[k].na++
                    
                } 

                

            }


            //27 meios de comunicação
            for(let k = 0; k < 7; k++){
                if(datas[i][`27. Considere a busca por informação nos seguintes meios de comunicação [${comunic[k]}]`] == "Nunca"){
                    q27[k].na++
                    
                } else if(datas[i][`27. Considere a busca por informação nos seguintes meios de comunicação [${comunic[k]}]`] == "Pouco"){
                    q27[k].p++
                    
                }else if(datas[i][`27. Considere a busca por informação nos seguintes meios de comunicação [${comunic[k]}]`] == "Às vezes"){
                    q27[k].as++
                    
                }else if(datas[i][`27. Considere a busca por informação nos seguintes meios de comunicação [${comunic[k]}]`] == "Muito"){
                    q27[k].m++
                    
                }else if(datas[i][`27. Considere a busca por informação nos seguintes meios de comunicação [${comunic[k]}]`] == "Sempre"){
                    q27[k].s++
                    
                }

            }



            if(datas[i]["28. Se você lê jornal, qual a frequência?"] == 'Algumas vezes por semana'){
                q28.as++
            }else if(datas[i]["28. Se você lê jornal, qual a frequência?"] == 'Diariamente'){
                q28.d++
            }else if(datas[i]["28. Se você lê jornal, qual a frequência?"] == 'Não leio'){
                q28.nl++
            }else if(datas[i]["28. Se você lê jornal, qual a frequência?"] == 'Raramente'){
                q28.r++
            }else {
                q28.sd++
            }

            if(datas[i]["29. Se você lê jornal, quais os assuntos que mais lê?"].indexOf("Não leio") > -1){
                q29.nl++
            }
            if(datas[i]["29. Se você lê jornal, quais os assuntos que mais lê?"].indexOf("Todos") > -1){
                q29.ta++
            }
            if(datas[i]["29. Se você lê jornal, quais os assuntos que mais lê?"].indexOf("Notícias locais") > -1){
                q29.nt++
            }
            if(datas[i]["29. Se você lê jornal, quais os assuntos que mais lê?"].indexOf("Notícias nacionais") > -1){
                q29.nn++
            }
            if(datas[i]["29. Se você lê jornal, quais os assuntos que mais lê?"].indexOf("Notícias internacionais") > -1){
                q29.ni++
            }
            if(datas[i]["29. Se você lê jornal, quais os assuntos que mais lê?"].indexOf("Esporte") > -1){
                q29.es++
            }
			if(datas[i]["29. Se você lê jornal, quais os assuntos que mais lê?"].indexOf("Lazer, arte e cultura") > -1){
                q29.lac++
            }
			if(datas[i]["29. Se você lê jornal, quais os assuntos que mais lê?"].indexOf("Notícias policiais") > -1){
                q29.np++
            }
			if(datas[i]["29. Se você lê jornal, quais os assuntos que mais lê?"].indexOf("Classificados") > -1){
                q29.cl++
            }
			if(datas[i]["29. Se você lê jornal, quais os assuntos que mais lê?"].indexOf("Moda") > -1){
                q29.md++
            }
			if(datas[i]["29. Se você lê jornal, quais os assuntos que mais lê?"].indexOf("Sociais") > -1){
                q29.sc++
            }
			

            if(datas[i]["30. Não considerando os livros escolares, quantos livros você lê por ano (em média)?"] == 'Até 2'){
                q30.a2++
            }else if(datas[i]["30. Não considerando os livros escolares, quantos livros você lê por ano (em média)?"] == 'De 3 até 6'){
                q30.a36++
            }else if(datas[i]["30. Não considerando os livros escolares, quantos livros você lê por ano (em média)?"] == 'De 7 até 10'){
                q30.a71++
            }else if(datas[i]["30. Não considerando os livros escolares, quantos livros você lê por ano (em média)?"] == 'Mais de 10'){
                q30.a10++
            }else {
                q30.n++
            }

			if(datas[i]["31. Se você lê livros literários, qual/quais o(s) gênero(s) preferido(s)?"].indexOf("Não") > -1){
                q31.nl++
            }
            if(datas[i]["31. Se você lê livros literários, qual/quais o(s) gênero(s) preferido(s)?"].indexOf("Romance") > -1){
                q31.r++
            }
            if(datas[i]["31. Se você lê livros literários, qual/quais o(s) gênero(s) preferido(s)?"].indexOf("Ficção") > -1){
                q31.f++
            }
            if(datas[i]["31. Se você lê livros literários, qual/quais o(s) gênero(s) preferido(s)?"].indexOf("Policial") > -1){
                q31.p++
            }
            if(datas[i]["31. Se você lê livros literários, qual/quais o(s) gênero(s) preferido(s)?"].indexOf("Biográfico") > -1){
                q31.b++
            }
            if(datas[i]["31. Se você lê livros literários, qual/quais o(s) gênero(s) preferido(s)?"].indexOf("Aventura") > -1){
                q31.a++
            }
			if(datas[i]["31. Se você lê livros literários, qual/quais o(s) gênero(s) preferido(s)?"].indexOf("Autoajuda") > -1){
                q31.aa++
            }
			if(datas[i]["31. Se você lê livros literários, qual/quais o(s) gênero(s) preferido(s)?"].indexOf("Outros") > -1){
                q31.o++
            }

            if(datas[i]["32. Você dedica parte do seu tempo para atividades voluntárias?"] == 'Não'){
                q32.n++
            }else {
                q32.s++
            }

            if(datas[i]["33. Qual religião você professa?"] == 'Católica'){
                q33.c++
            }else if(datas[i]["33. Qual religião você professa?"] == 'Espírita'){
                q33.ep++
            }else if(datas[i]["33. Qual religião você professa?"] == 'Evangélica'){
                q33.ev++
            }else if(datas[i]["33. Qual religião você professa?"] == 'Nenhuma'){
                q33.n++
            }else {
                q33.o++
            }

            if(datas[i]["34. Quais fontes de entretenimento cultural você usa?"].indexOf("Cinema") > -1){
                q34.C++
            }
            if(datas[i]["34. Quais fontes de entretenimento cultural você usa?"].indexOf("Exposições") > -1){
                q34.E++
            }
            if(datas[i]["34. Quais fontes de entretenimento cultural você usa?"].indexOf("Filmes") > -1){
                q34.F++
            }
            if(datas[i]["34. Quais fontes de entretenimento cultural você usa?"].indexOf("Literatura") > -1){
                q34.L++
            }
            if(datas[i]["34. Quais fontes de entretenimento cultural você usa?"].indexOf("Museus") > -1){
                q34.MEU++
            }
            if(datas[i]["34. Quais fontes de entretenimento cultural você usa?"].indexOf("Música") > -1){
                q34.MIC++
            }
			if(datas[i]["34. Quais fontes de entretenimento cultural você usa?"].indexOf("Teatro") > -1){
                q34.T++
            }
			if(datas[i]["34. Quais fontes de entretenimento cultural você usa?"].indexOf("TV") > -1){
                q34.TV++
            }
			if(datas[i]["34. Quais fontes de entretenimento cultural você usa?"].indexOf("Viagens") > -1){
                q34.V++
            }
			if(datas[i]["34. Quais fontes de entretenimento cultural você usa?"].indexOf("Nenhuma") > -1){
                q34.N++
            }
			

            if(datas[i]["35. Estamos quase acabando... Como conheceu a FATEC Franca?"].indexOf("divulgação") > -1){
                q35.C++
            }
            if(datas[i]["35. Estamos quase acabando... Como conheceu a FATEC Franca?"].indexOf("familiar/amigo") > -1){
                q35.I++
            }
            if(datas[i]["35. Estamos quase acabando... Como conheceu a FATEC Franca?"].indexOf("Facebook") > -1){
                q35.F++
            }
            if(datas[i]["35. Estamos quase acabando... Como conheceu a FATEC Franca?"].indexOf("jornais") > -1){
                q35.J++
            }
            if(datas[i]["35. Estamos quase acabando... Como conheceu a FATEC Franca?"].indexOf("rádios") > -1){
                q35.R++
            }
            if(datas[i]["35. Estamos quase acabando... Como conheceu a FATEC Franca?"].indexOf("outdoor") > -1){
                q35.O++
            }
			if(datas[i]["35. Estamos quase acabando... Como conheceu a FATEC Franca?"].indexOf("estudava") > -1){
                q35.E++
            }


            if(datas[i]["36. Porque você escolheu este curso?"].indexOf("absorvidos") > -1){
                q36.A++
            }
            if(datas[i]["36. Porque você escolheu este curso?"].indexOf("remunerados") > -1){
                q36.R++
            }
            if(datas[i]["36. Porque você escolheu este curso?"].indexOf("carreira") > -1){
                q36.M++
            }
            if(datas[i]["36. Porque você escolheu este curso?"].indexOf("gratuito") > -1){
                q36.G++
            }
            if(datas[i]["36. Porque você escolheu este curso?"].indexOf("duração") > -1){
                q36.D++
            }
            if(datas[i]["36. Porque você escolheu este curso?"].indexOf("conceituado") > -1){
                q36.C++
            }
			if(datas[i]["36. Porque você escolheu este curso?"].indexOf("trabalho") > -1){
                q36.T++
            }
			if(datas[i]["36. Porque você escolheu este curso?"].indexOf("Sugestão") > -1){
                q36.S++
            }
			if(datas[i]["36. Porque você escolheu este curso?"].indexOf("Outros motivos") > -1){
                q36.O++
            }



            if(datas[i]["37. Qual sua maior expectativa quanto ao curso?"].indexOf("conhecimentos") > -1){
                q37.C++
            }
            if(datas[i]["37. Qual sua maior expectativa quanto ao curso?"].indexOf("competências") > -1){
                q37.E++
            }
            if(datas[i]["37. Qual sua maior expectativa quanto ao curso?"].indexOf("Conhecer") > -1){
                q37.N++
            }
            if(datas[i]["37. Qual sua maior expectativa quanto ao curso?"].indexOf("Melhorar-me") > -1){
                q37.M++
            }
            if(datas[i]["37. Qual sua maior expectativa quanto ao curso?"].indexOf("diploma") > -1){
                q37.D++
            }
            if(datas[i]["37. Qual sua maior expectativa quanto ao curso?"].indexOf("Outra expectativa") > -1){
                q37.C++
            }
			if(datas[i]["37. Qual sua maior expectativa quanto ao curso?"].indexOf("tenho expectativa") > -1){
                q37.A++
            }

            if(datas[i]["38. Qual sua expectativa após se formar?"].indexOf("Conquistar") > -1){
                q38.C++
            }
            if(datas[i]["38. Qual sua expectativa após se formar?"].indexOf("Prestar") > -1){
                q38.P++
            }
            if(datas[i]["38. Qual sua expectativa após se formar?"].indexOf("Melhorar") > -1){
                q38.M++
            }
            if(datas[i]["38. Qual sua expectativa após se formar?"].indexOf("Abrir") > -1){
                q38.A++
            }
            if(datas[i]["38. Qual sua expectativa após se formar?"].indexOf("Ingressar") > -1){
                q38.I++
            }
            if(datas[i]["38. Qual sua expectativa após se formar?"].indexOf("Outra") > -1){
                q38.O++
            }
			if(datas[i]["38. Qual sua expectativa após se formar?"].indexOf("Nenhuma") > -1){
                q38.N++
            }

            if(datas[i]["39. Você já estudou nesta escola?"] == 'Não'){
                q39.n++
            }else {//Sim
                q39.s++
            }

            if(datas[i]["40. Você fez algum curso técnico?"] == 'Não fiz'){
                q40.n++
            }else if(datas[i]["40. Você fez algum curso técnico?"] == 'Sim, em outra instituição'){
                q40.so++
            }else if(datas[i]["40. Você fez algum curso técnico?"] == 'Sim, em uma ETEC'){
                q40.se++
            }else if(datas[i]["40. Você fez algum curso técnico?"] == 'Sim, no SENAC'){
                q40.ss++
            }else {//Sim, no SENAI
                q40.ssn++
            }

            if(datas[i]["41. Qual o meio de transporte você usa para vir à escola?"] == 'Bicicleta'){
                q41.b++
            }else if(datas[i]["41. Qual o meio de transporte você usa para vir à escola?"] == 'Caminhando'){
                q41.c++
            }else if(datas[i]["41. Qual o meio de transporte você usa para vir à escola?"] == 'Carona'){
                q41.cn++
            }else if(datas[i]["41. Qual o meio de transporte você usa para vir à escola?"] == 'Carro'){
                q41.cr++
            }else if(datas[i]["41. Qual o meio de transporte você usa para vir à escola?"] == 'Moto'){
                q41.mt++
            }else if(datas[i]["41. Qual o meio de transporte você usa para vir à escola?"] == 'Ônibus'){
                q41.o++
            }else {//Transporte escolar
                q41.t++
            }
            


        }
        
        //fim das contagens

        //criação dos gráficos

        Chart.helpers.merge(Chart.defaults.global.plugins.datalabels, {
            color: '#ffffff'
        });
        Chart.defaults.global.defaultFontSize = 18;

            let colors = ["#1761FF", "#FF2900", "#FF9100", "#00A500", "#BB00B3", "#00A6D8", "#FE2F6F", "#4AB800", "#EC150F", "#1467B6", "#B827B7"]
            let ctx = []
            for(let i = 1; i <= 70; i++){
                ctx.push(document.getElementById(`nchart${i}`))
            }

                var chartGraph = new Chart(ctx[2],{
                    type: "doughnut",
                    data:{
                        labels: ["SP","MG","PR", "PE"],
                        datasets: [{
                            data:[q4.s,q4.m,q4.p,q4.pe],
                            
                            backgroundColor: colors
        
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: '4. Qual o estado do Brasil que você nasceu?',
                            fontSize: 20
                        },

                    }
                })
        
                var chartGraph = new Chart(ctx[4],{
                    type: "doughnut",
                    data:{
                        labels: ["Masculino","Feminino","Não sabe responder"],
                        datasets: [{
                            data:[q6.m,q6.f,q6.ns],
                            
                            backgroundColor: colors
        
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: '6. Qual o seu gênero?',
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[0],{
                    type: "doughnut",
                    data:{
                        labels: ["Análise e Desenvolvimento de Sistemas (ADS)","Gestão de Recursos Humanos (GRH)","Gestão de Produção Industrial (GPI)", "Desenvolvimento de Software Multi Plataforma (DSM)"],
                        datasets: [{
                            data:[q1.a,q1.g,q1.r,q1.d],
                            
                            backgroundColor: colors
        
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: '1. Qual o seu curso?',
                            fontSize: 20
                        }
                    }
                })
        
                var chartGraph = new Chart(ctx[1],{
                    type: "doughnut",
                    data:{
                        labels: ["Matutino","Noturno"],
                        datasets: [{
                            data:[q2.m,q2.n],
                            
                            backgroundColor: colors
        
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: '2. Qual o período que cursa?',
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[3],{
                    type: "doughnut",
                    data:{
                        labels: ["Franca","Ipuã","Patrocínio Paulista", "Ribeirão Corrente", "Ribeirão Preto", "S. José da Bela Vista"],
                        datasets: [{
                            data:[q5.f,q5.i,q5.p,q5.rc,q5.rp,q5.s],
                            
                            backgroundColor: colors
        
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: '5. Qual sua cidade de residência?',
                            fontSize: 20
                        }
                    }
                })
        
                var chartGraph = new Chart(ctx[6],{
                    type: "doughnut",
                    data:{
                        labels: ["Solteiro(a)","Casado(a) ou União Estável","Separado(a), desquitado(a), divorciado(a)"],
                        datasets: [{
                            data:[q8.s,q8.c,q8.o],
                            
                            backgroundColor: colors
        
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: '8. Qual é o seu estado civil?',
                            fontSize: 20
                        }
                    }
                })
                

                var chartGraph = new Chart(ctx[7],{
                    type: "doughnut",
                    data:{
                        labels: ["Visual","Nenhum"],
                        datasets: [{
                            data:[q9.v,q9.n],
                            
                            backgroundColor: colors
        
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: '9. Você é portador de alguma necessidade especial?(Pode selecionar mais de uma, se for o caso)',
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[8],{
                    type: "doughnut",
                    data:{
                        labels: ["Autismo","Auditiva","Síndrome de Down", "Não convivo ou não moro com alguém com deficiência"],
                        datasets: [{
                            data:[q10.at, q10.ad, q10.s, q10.n],
                            
                            backgroundColor: colors
        
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: '10. Você convive ou mora com alguma pessoa com deficiência?',
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[9],{
                    type: "doughnut",
                    data:{
                        labels: ["Um","Dois","Três", "Nenhum"],
                        datasets: [{
                            data:[q11.u, q11.d, q11.t, q11.n],
                            
                            backgroundColor: colors
        
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: '11. Quantos filhos você tem?',
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[10],{
                    type: "doughnut",
                    data:{
                        labels: ["Com amigos (compartilhando despesas) ou de favor","Com esposa(o) e(ou) filho(s)","Com pais e(ou) parentes", "Sozinho"],
                        datasets: [{
                            data:[q12.a, q12.e, q12.p, q12.s],
                            
                            backgroundColor: colors
        
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: '12. Com quem você mora atualmente?',
                            fontSize: 20
                        }
                    }
                })


                var chartGraph = new Chart(ctx[11],{
                    type: "doughnut",
                    data:{
                        labels: ["Uma","Duas","Três", "Quatro", "Cinco", "Seis", "Sete"],
                        datasets: [{
                            data:[q13.a, q13.b, q13.c, q13.d, q13.e, q13.f, q13.g],
                            
                            backgroundColor: colors
        
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: '13. Quantas pessoas, incluindo você, moram no seu domicílio?',
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[5],{
                    type: "doughnut",
                    data:{
                        labels: ["Entre 18 e 20 anos","Entre 21 e 25 anos","Entre 26 e 30 anos", "Entre 31 e 50 anos", "Mais que 50 anos"],
                        datasets: [{
                            data:[q7["18e20"],q7["21e25"],q7["26e30"],q7["31e50"],q7["m50"],],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: '7.Qual a sua idade?',
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[12],{
                    type: "doughnut",
                    data:{
                        labels: ["Próprio","Alugado","Cedido", "Financiado", "Arrendado","Mensalista"],
                        datasets: [{
                            data:[q14.p,q14.a,q14.c,q14.f,q14.ar,q14.men,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "14. Qual a situação do domicílio onde mora?",
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[13],{
                    type: "doughnut",
                    data:{
                        labels: ["Entre 1 e 5 anos", "Entre 6 e 10 anos", "Entre 11 e 15 anos", "Entre 16 e 20 anos", "Mais de 20 anos"],
                        datasets: [{
                            data:[q15["1e5"],q15["6e10"],q15["11e15"],q15["16e20"],q15["m20"],],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "15. Tempo de moradia neste domicílio (Em anos)?",
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[14],{
                    type: "doughnut",
                    data:{
                        labels: ["Até dois salários minimos", "Mais de dois até cinco salários mínimos", "Mais de cinco até dez salários mínimos", "Mais de dez até vinte salários mínimos", "Mais de vinte salários mínimos", "Prefiro não responder"],
                        datasets: [{
                            data:[q16["a2"],q16["m2a5"],q16["m5a10"],q16["m10a20"],q16["m20"],q16["pf"],],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)?",
                            fontSize: 20
                        }
                    }
                })

                //questão 17 dividida em 10 perguntas// de a até j
                var chartGraph = new Chart(ctx[15],{
                    type: "doughnut",
                    data:{
                        labels: ["Nenhum(a)","Um","Dois","Três","Quatro","Mais de quatro"],
                        datasets: [{
                            data:[q17a.zero,q17a.um,q17a.dois,q17a.tres,q17a.quat,q17a.mquat,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "17.1. Quantas geladeiras há em seu domicílio.",
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[16],{
                    type: "doughnut",
                    data:{
                        labels: ["Nenhum(a)","Um","Dois","Três","Quatro","Mais de quatro"],
                        datasets: [{
                            data:[q17b.zero,q17b.um,q17b.dois,q17b.tres,q17b.quat,q17b.mquat,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "17.2. Quantos celulares comuns há em seu domicílio?",
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[17],{
                    type: "doughnut",
                    data:{
                        labels: ["Nenhum(a)","Um","Dois","Três","Quatro","Mais de quatro"],
                        datasets: [{
                            data:[q17c.zero,q17c.um,q17c.dois,q17c.tres,q17c.quat,q17c.mquat,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "17.3. Quantos micro-ondas há em seu domicílio?",
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[18],{
                    type: "doughnut",
                    data:{
                        labels: ["Nenhum(a)","Um","Dois","Três","Quatro","Mais de quatro"],
                        datasets: [{
                            data:[q17d.zero,q17d.um,q17d.dois,q17d.tres,q17d.quat,q17d.mquat,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "17.4. Quantos notebooks há em seu domicílio?",
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[19],{
                    type: "doughnut",
                    data:{
                        labels: ["Nenhum(a)","Um","Dois","Três","Quatro","Mais de quatro"],
                        datasets: [{
                            data:[q17e.zero,q17e.um,q17e.dois,q17e.tres,q17e.quat,q17e.mquat,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "17.5. Quantas máquinas de lavar roupa e(ou) tanquinho há em seu domicílio?",
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[20],{
                    type: "doughnut",
                    data:{
                        labels: ["Nenhum(a)","Um","Dois","Três","Quatro","Mais de quatro"],
                        datasets: [{
                            data:[q17f.zero,q17f.um,q17f.dois,q17f.tres,q17f.quat,q17f.mquat,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "17.6. Quantas motocicletas há em seu domicílio?",
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[21],{
                    type: "doughnut",
                    data:{
                        labels: ["Nenhum(a)","Um","Dois","Três","Quatro","Mais de quatro"],
                        datasets: [{
                            data:[q17g.zero,q17g.um,q17g.dois,q17g.tres,q17g.quat,q17g.mquat,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "17.7. Quantos automóveis há em seu domicílio?",
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[22],{
                    type: "doughnut",
                    data:{
                        labels: ["Nenhum(a)","Um","Dois","Três","Quatro","Mais de quatro"],
                        datasets: [{
                            data:[q17h.zero,q17h.um,q17h.dois,q17h.tres,q17h.quat,q17h.mquat,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "17.8. Quantos vídeos cassete e(ou) DVD players há em seu domicílio?",
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[23],{
                    type: "doughnut",
                    data:{
                        labels: ["Nenhum(a)","Um","Dois","Três","Quatro","Mais de quatro"],
                        datasets: [{
                            data:[q17i.zero,q17i.um,q17i.dois,q17i.tres,q17i.quat,q17i.mquat,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "17.9. Quantos televisores há em seu domicílio?",
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[24],{
                    type: "doughnut",
                    data:{
                        labels: ["Nenhum(a)","Um","Dois","Três","Quatro","Mais de quatro"],
                        datasets: [{
                            data:[q17j.zero,q17j.um,q17j.dois,q17j.tres,q17j.quat,q17j.mquat,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "17.10. Quantos smartphones há em seu domicílio?",
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[25],{
                    type: "doughnut",
                    data:{
                        labels: ["Telefone fixo", "Internet", "Tv por assinatura", "Empregada mensalista", "Nenhuma das opções"],
                        datasets: [{
                            data:[q18.tel,q18.inte,q18.tv,q18.emp,q18.na,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "18. No seu domicílio tem?",
                            fontSize: 20
                        }
                    }
                })

                //questão 19 contém 4 perguntas
                var chartGraph = new Chart(ctx[26],{
                    type: "doughnut",
                    data:{
                        labels: ["Sim","Não"],
                        datasets: [{
                            data:[q19a.s, q19a.n],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "19.1. Você trabalha?",
                            fontSize: 20
                        }
                    }
                })
                
                var chartGraph = new Chart(ctx[27],{
                    type: "doughnut",
                    data:{
                        labels: ["Não trabalho","Sou registrado em indústria (calçados/confecções/outras)","Sou registrado no comércio","Sou registrado em empresa prestadora de serviços","Sou registrado em empresa pública (federal/estadual/municipal)","Sou autônomo","Sou empresário","Sou estagiário",],
                        datasets: [{
                            data:[q19b.nt, q19b.sri,q19b.src, q19b.sre,q19b.sep, q19b.sat,q19b.semp, q19b.sest,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "19.2. Qual o seu vínculo com o emprego?",
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[28],{
                    type: "doughnut",
                    data:{
                        labels: ["Não trabalho","Trabalho na área do curso","Trabalho fora da área do curso"],
                        datasets: [{
                            data:[q19c.nt, q19c.tac, q19c.tfc],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "19.3. Qual a área do seu trabalho?",
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[29],{
                    type: "doughnut",
                    data:{
                        labels: ['Não trabalho', 'Manhã', 'Tarde', 'Noite',' Manhã e tarde', 'Manhã e noite', 'Tarde e noite', 'Regime de turnos'],
                        datasets: [{
                            data:[q19d.nt,q19d.m,q19d.t,q19d.n,q19d.mt,q19d.mn,q19d.tn,q19d.regt,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "19.4. Qual seu horário de trabalho?",
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[30],{
                    type: "doughnut",
                    data:{
                        labels: ['Não tenho, uso o SUS', 'Tenho e é pago integralmente pela empresa', 'Tenho e é pago parcialmente pela empresa', 'Tenho e é um plano familiar', 'Tenho e é um plano individual'],
                        datasets: [{
                            data:[q20.nsus,q20.page,q20.pagp,q20.pf,q20.pi,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "20. Você tem plano de saúde privado?",
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[31],{
                    type: "doughnut",
                    data:{
                        labels: ['Nenhuma escolaridade', 'Ensino fundamental I (1º ao 5º anos)', 'Ensino fundamental II (6º ao 9º anos)', 'Ensino Médio', 'Ensino Superior','Pós-graduação', 'Prefiro não responder'],
                        datasets: [{
                            data:[q21a.ne,q21a.ef1,q21a.ef2,q21a.em,q21a.es,q21a.pg,q21a.pfn,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "21.1. Qual o grau de escolaridade do seu pai?",
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[32],{
                    type: "doughnut",
                    data:{
                        labels: ['Nenhuma escolaridade', 'Ensino fundamental I (1º ao 5º anos)', 'Ensino fundamental II (6º ao 9º anos)', 'Ensino Médio', 'Ensino Superior','Pós-graduação', 'Prefiro não responder'],
                        datasets: [{
                            data:[q21b.ne,q21b.ef1,q21b.ef2,q21b.em,q21b.es,q21b.pg,q21b.pfn,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "21.2. Qual o grau de escolaridade da sua mãe?",
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[33],{
                    type: "doughnut",
                    data:{
                        labels: ['Sempre em escola pública', 'A maior parte em escola pública','Sempre em escola particular paga pela família', 'Sempre em escola particular com bolsa','A maior parte em escola particular paga pela família', 'A maior parte em escola particular com bolsa',],
                        datasets: [{
                            data:[q22.sp,q22.mp,q22.ep,q22.pb,q22.epp,q22.pcb,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "22. Na sua vida escolar você estudou",
                            fontSize: 20
                        }
                    }
                })
                
                var chartGraph = new Chart(ctx[34],{
                    type: "doughnut",
                    data:{
                        labels: ['Nunca', 'Pouco', 'Ás vezes', 'Muito', 'Sempre',],
                        datasets: [{
                            data:[q23a.na,q23a.p,q23a.as,q23a.m,q23a.s,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "23.1. Com que frequência você utiliza microcomputadores?",
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[35],{
                    type: "doughnut",
                    data:{
                        labels: ['Em casa', 'No trabalho', 'Na escola', 'Em outros lugares',],
                        datasets: [{
                            data:[q23b.ec,q23b.t,q23b.e,q23b.ou,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "23.2. Onde você utiliza microcomputadores?",
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[36],{
                    type: "doughnut",
                    data:{
                        labels: ['Para trabalhos profissionais', 'Para trabalhos escolares', 'Para entretenimento (músicas, vídeos, redes sociais, etc)', 'Para comunicação por e-mail', 'Para operações bancárias', 'Para compras eletrônicas',],
                        datasets: [{
                            data:[q23c.tp,q23c.te,q23c.e,q23c.c,q23c.op,q23c.com,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "23.3. Com qual finalidade você utiliza microcomputadores?",
                            fontSize: 20
                        }
                    }
                })

                var chartGraph = new Chart(ctx[37],{
                    type: "doughnut",
                    data:{
                        labels: ['Nenhum', 'Pouco', 'Intermediário', 'Muito Avançado'],
                        datasets: [{
                            data:[q24.n,q24.p,q24.i,q24.a,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "24. Como você classifica seu conhecimento em informática",
                            fontSize: 20
                        },
                        
                    }
                })

                for(let k = 0; k < 6; k++){
                    var chartGraph = new Chart(ctx[38+k],{
                    type: "doughnut",
                    data:{
                        labels: ['Nenhum', 'Pouco', 'Intermediário', 'Muito Avançado'],
                        datasets: [{
                            
                            data:[q25[k].n, q25[k].p, q25[k].i, q25[k].a,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: `25. Qual o seu conhecimento em relação aos aplicativos a seguir? [${tecno[k]}]`,
                            fontSize: 20
                            },
                        
                        }
                    })
                }

                for(let k = 0; k < 3; k++){
                    var chartGraph = new Chart(ctx[44+k],{
                    type: "doughnut",
                    data:{
                        labels: ['Leio, escrevo e falo bem', 'Leio, escrevo e falo razoavelmente', 'Leio e escrevo mas não falo', 'Leio mas não escrevo nem falo', 'Praticamente nula',],
                        datasets: [{
                            
                            data:[q26[k].leb, q26[k].ler, q26[k].le, q26[k].l, q26[k].na,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: `26. Agora, considere seu conhecimento sobre idiomas [${lang[k]}]`,
                            fontSize: 20
                            },
                        
                        }
                    })
                }

                for(let k = 0; k < 7; k++){
                    var chartGraph = new Chart(ctx[47+k],{
                    type: "doughnut",
                    data:{
                        labels: ['Nunca', 'Pouco', 'Às vezes', 'Muito', 'Sempre',],
                        datasets: [{
                            
                            data:[q27[k].na,q27[k].p,q27[k].as,q27[k].m,q27[k].s,],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: `27. Considere a busca por informação nos seguintes meios de comunicação [${comunic[k]}]`,
                            fontSize: 20
                            },
                        
                        }
                    })
                }


                var chartGraph = new Chart(ctx[54],{
                    type: "doughnut",
                    data:{
                        labels: ['Algumas vezes por semana', 'Diariamente', 'Não leio', 'Raramente', 'Somente aos domingos'],
                        datasets: [{
                            data:[q28.as, q28.d, q28.nl, q28.r, q28.sd],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "28. Se você lê jornal, qual a frequência?",
                            fontSize: 20
                        },
                        
                    }
                })

                var chartGraph = new Chart(ctx[55],{
                    type: "doughnut",
                    data:{
                        labels: ['Não leio jormal', 'Todos os assuntos', 'Notícias locais', 'Notícias nacionais', 'Notícias internacionais', 'Esporte', 'Lazer, arte e cultura', 'Notícias policiais', 'Classificados', 'Moda', 'Sociais'],
                        datasets: [{
                            data:[q29.nl,q29.ta,q29.nt,q29.nn,q29.ni,q29.es,q29.lac,q29.np,q29.cl,q29.md,q29.sc],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "29. Se você lê jornal, quais os assuntos que mais lê?",
                            fontSize: 20
                        },
                        
                    }
                })


                var chartGraph = new Chart(ctx[56],{
                    type: "doughnut",
                    data:{
                        labels: ['Até 2', 'De 3 até 6', 'De 7 até 10', 'Mais de 10', 'Nenhum'],
                        datasets: [{
                            data:[q30.a2, q30.a36, q30.a71, q30.a10, q30.n],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "30. Não considerando os livros escolares, quantos livros você lê por ano (em média)?",
                            fontSize: 20
                        },
                        
                    }
                })


                var chartGraph = new Chart(ctx[57],{
                    type: "doughnut",
                    data:{
                        labels: ['Não leio', 'Romance', 'Ficção', 'Policial', 'Biográfico', 'Aventura', 'Autoajuda', 'Outros'],
                        datasets: [{
                            data:[q31.nl, q31.r, q31.f, q31.p, q31.b, q31.a, q31.aa, q31.o],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "31. Se você lê livros literários, qual/quais o(s) gênero(s) preferido(s)?",
                            fontSize: 20
                        },
                        
                    }
                })


                var chartGraph = new Chart(ctx[58],{
                    type: "doughnut",
                    data:{
                        labels: ['Não', 'Sim'],
                        datasets: [{
                            data:[q32.n,q32.s],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "32. Você dedica parte do seu tempo para atividades voluntárias?",
                            fontSize: 20
                        },
                        
                    }
                })



                var chartGraph = new Chart(ctx[59],{
                    type: "doughnut",
                    data:{
                        labels: ['Católica', 'Espírita', 'Evangélica', 'Nenhuma', 'Outra'],
                        datasets: [{
                            data:[q33.c, q33.ep, q33.ev, q33.n, q33.o],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "33. Qual religião você professa?",
                            fontSize: 20
                        },
                        
                    }
                })


                var chartGraph = new Chart(ctx[60],{
                    type: "doughnut",
                    data:{
                        labels: ['Cinema', 'Exposições de arte', 'Filmes na internet', 'Literatura', 'Museus', 'Música', 'Teatro', 'TV', 'Viagens', 'Nenhuma'],
                        datasets: [{
                            data:[q34.C, q34.E, q34.F, q34.L, q34.MEU, q34.MIC, q34.T, q34.TV, q34.V, q34.N ],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "34. Quais fontes de entretenimento cultural você usa?",
                            fontSize: 20
                        },
                        
                    }
                })


                var chartGraph = new Chart(ctx[61],{
                    type: "doughnut",
                    data:{
                        labels: ['Cartaz de divulgação', 'Indicação de familiar/amigo', 'Pelo Facebook', 'Por algum dos jornais', 'Por alguma das rádios', 'Por outdoor', 'Propaganda na escola que estudava'],
                        datasets: [{
                            data:[q35.C,q35.I,q35.F,q35.J,q35.R,q35.O,q35.E],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "35. Estamos quase acabando... Como conheceu a FATEC Franca?",
                            fontSize: 20
                        },
                        
                    }
                })


                var chartGraph = new Chart(ctx[62],{
                    type: "doughnut",
                    data:{
                        labels: ['Este curso forma profissionais facilmente absorvidos pelo mercado', 'Este curso forma profissionais que são bem remunerados', 'Minha vocação é seguir esta carreira', 'Este curso é gratuito', 'Este curso é de média duração', 'É um curso bem conceituado na região', 'Porque já trabalho na área', 'Sugestão ou vontade familiar', 'Outros motivos'],
                        datasets: [{
                            data:[q36.A,q36.R,q36.M,q36.G,q36.D,q36.C,q36.T,q36.S,q36.O],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "36. Porque você escolheu este curso?",
                            fontSize: 20
                        },
                        
                    }
                })


                var chartGraph = new Chart(ctx[63],{
                    type: "doughnut",
                    data:{
                        labels: ['Obter novos conhecimentos', 'Obter competências para exercício de uma profissão', 'Conhecer novas pessoas', 'Melhorar-me como pessoa para bons relacionamentos futuros', 'Obter um diploma de nível superior', 'Outra expectativa', 'Não tenho expectativa alguma'],
                        datasets: [{
                            data:[q37.C,q37.E,q37.N,q37.M,q37.D,q37.C,q37.A],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "37. Qual sua maior expectativa quanto ao curso?",
                            fontSize: 20
                        },
                        
                    }
                })



                var chartGraph = new Chart(ctx[64],{
                    type: "doughnut",
                    data:{
                        labels: ['Conquistar vaga em empresa privada', 'Prestar concurso público', 'Melhorar cargo e salário na empresa que trabalho', 'Abrir meu próprio negócio', 'Ingressar na carreira acadêmica', 'Outra expectativa', 'Nenhuma expectativa'],
                        datasets: [{
                            data:[q38.C,q38.P,q38.M,q38.A,q38.I,q38.O, q38.N],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "38. Qual sua expectativa após se formar?",
                            fontSize: 20
                        },
                        
                    }
                })


                var chartGraph = new Chart(ctx[65],{
                    type: "doughnut",
                    data:{
                        labels: ['Sim', 'Não'],
                        datasets: [{
                            data:[q39.s,q39.n],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "39. Você já estudou nesta escola?",
                            fontSize: 20
                        },
                        
                    }
                })


                var chartGraph = new Chart(ctx[66],{
                    type: "doughnut",
                    data:{
                        labels: ['Não fiz', 'Sim, em outra instituição', 'Sim, em uma ETEC', 'Sim, no SENAC', 'Sim, no SENAI'],
                        datasets: [{
                            data:[q40.n, q40.so, q40.se, q40.ss, q40.ssn],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "40. Você fez algum curso técnico?",
                            fontSize: 20
                        },
                        
                    }
                })


                var chartGraph = new Chart(ctx[67],{
                    type: "doughnut",
                    data:{
                        labels: ['Bicicleta', 'Caminhando', 'Carona', 'Carro', 'Moto', 'Ônibus', 'Transporte escolar' ],
                        datasets: [{
                            data:[q41.b,q41.c,q41.cn,q41.cr,q41.mt,q41.o,q41.t],
                            
                            backgroundColor: colors
                            
                        }]
                    },
                        options: {
                        title: {
                            display: true,
                            text: "41. Qual o meio de transporte você usa para vir à escola?",
                            fontSize: 20
                        },
                        
                    }
                })
                
                
                for(let i = 1; i <= 68; i++){
                    document.getElementById(`nchart${i}`).style.display = "none"
                }

                document.getElementById("rot").style.display = "none"
                document.getElementById("process").style.display = "none"
                document.getElementById("view").style.display = "inline"

            }
             
        })