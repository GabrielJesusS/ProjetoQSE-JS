//variaveis criadas da seguinte forma q = questão n= número da questão, exemplo : q6 = questão 6

let questoes = []



let q6 ={//genero
    f:0,
    m:0,
    ns:0
}

let q4 ={//estado do brasil
    s:0,
    m:0,
    p:0,
    pe:0
}

let q1 ={//qual o curso
    a:0,
    g:0,
    r:0,
    d:0
}

let q2 ={//periodo
    m:0,
    n:0
}

let q5 ={//cidade
    f:0,
    i:0,
    p:0,
    rc:0,
    rp:0,
    s:0
}

let q7 ={//idade
    "18e20":0,
    "21e25":0,
    "26e30":0,
    "31e50":0,
    "m50":0,
    
}

let q8 ={//estado civil
    s:0,
    c:0,
    o:0
}

let q9 ={//Possir deficiencia
    n:0,
    v:0
}

let q10 ={//Conviver Deficiencia
    ad:0,
    at:0,
    s:0,
    n:0

}

let q11 ={//Quantidade de filhos
    n:0,
    u:0,
    d:0,
    t:0
}

let q12 ={//Com quem voce vive
    a:0,
    e:0,
    p:0,
    s:0
}

let q13 ={//Quantas pessoas na sua casa
    a:0,
    b:0,
    c:0,
    d:0,
    e:0,
    f:0,
    g:0
}

let q14 ={
    p:0, // proprio
    a:0, //alugado
    c:0, //cedido
    f:0, //financiado
    ar:0, //arrendado
    men:0, //mensalista
}

let q15 = {
    "1e5":0,
    "6e10":0,
    "11e15":0,
    "16e20":0,
    "m20":0
}

let q16 ={
    "a2":0, //até dois
    "m2a5":0,   //mais de dois
    "m5a10":0,  //mais de cinco
    "m10a20":0, //mais de 10
    "m20":0,    //mais de 20
    "pf":0,     //prefiro não dizer
}


//questão 17 dividida em 10 perguntas// de a até j
let q17a = {
    zero:0,
    um:0,
    dois:0,
    tres:0,
    quat:0,
    mquat:0
}

let q17b = {
    zero:0,
    um:0,
    dois:0,
    tres:0,
    quat:0,
    mquat:0
}

let q17c = {
    zero:0,
    um:0,
    dois:0,
    tres:0,
    quat:0,
    mquat:0
}

let q17d = {
    zero:0,
    um:0,
    dois:0,
    tres:0,
    quat:0,
    mquat:0
}

let q17e = {
    zero:0,
    um:0,
    dois:0,
    tres:0,
    quat:0,
    mquat:0
}

let q17f = {
    zero:0,
    um:0,
    dois:0,
    tres:0,
    quat:0,
    mquat:0
}

let q17g = {
    zero:0,
    um:0,
    dois:0,
    tres:0,
    quat:0,
    mquat:0
}

let q17h = {
    zero:0,
    um:0,
    dois:0,
    tres:0,
    quat:0,
    mquat:0
}

let q17i = {
    zero:0,
    um:0,
    dois:0,
    tres:0,
    quat:0,
    mquat:0
}

let q17j = {
    zero:0,
    um:0,
    dois:0,
    tres:0,
    quat:0,
    mquat:0
}
// fim da questão 17

let q18 = {
    tel:0, //telefone fixo
    inte:0, //Internet
    tv:0, //tv por assinatura
    emp:0, //empregada
    na:0 //nenhum
}

//questão 19 tem 5 perguntas
let q19a = {
    s:0,
    n:0
}

let q19b = {
    nt:0, //nao trabalho
    sri:0, //sou registrado em industria
    src:0, //sou registrado em comercio
    sre:0, //sou registrado em empresa
    sep:0, //sou registrado publico
    sat:0, //sou autonomo
    semp:0, // sou empresario
    sest:0 //sou estagiario
}

let q19c = {
    nt:0, //nao trabalho
    tac:0, //trabnalho na area do curso
    tfc:0, //trabalho fora da area do curso
}

let q19d = {
    nt:0, //nao trabalho
    m:0, // manha
    t:0, //tarde
    n:0, //noite
    mt:0, // manha tarde
    mn:0, //manha noite
    tn:0, //tarde noite
    regt:0 //regime de turnos
}

//ultima questão irrelevante
//fim da questão 19

let q20 = {
    nsus:0, // uso sus
    page:0, // pago pela empresa
    pagp:0, //pago parcialmente pela empresa
    pf:0, //plano familiar
    pi:0, // plano individual
}

//questão 21 a e b
let q21a = {
    ne:0, //nenhuma
    ef1:0, //fundamental1
    ef2:0, //fundamental2
    em:0, //ensino medio
    es:0, //ensino superior
    pg:0, //pos graduação
    pfn:0, //prefiro nao responder
}

let q21b = {
    ne:0, //nenhuma
    ef1:0, //fundamental1
    ef2:0, //fundamental2
    em:0, //ensino medio
    es:0, //ensino superior
    pg:0, //pos graduação
    pfn:0, //prefiro nao responder
}

let q22 = {
    sp:0, //sempre escola publica
    mp:0, //maior parte escola publica
    ep:0, // sempre em particular familia
    pb:0, //sempre particular bolsa
    epp:0, //maior parte particular familia
    pcb:0 //maior parte particular bolsa
}

//questão 23 dividida em 3 perguntas
let q23a = {
    na:0, //nunca
    p:0, //pouco
    as:0, //as vezes
    m:0, //muito
    s:0 //sempre
}

let q23b = {
    ec:0, //casa
    t:0, //trabalho
    e:0, //escola
    ou:0, //outros
}

let q23c = {
    tp:0, //trabalho profissional
    te:0, //trabalho escolar
    e:0, //entretenimento
    c:0, //comunicação por e-mail
    op:0, //operações bancárias
    com:0 //compras
}

let q24 = {
    n:0, //nenhum
    p:0, //pouco
    i:0,//intermediário
    a:0 // muito avançado
}

//questão 25, contem multiplas perguntas e sera realizada em looping usando a variavel abaixo
let tecno = [
    "Windows",
    "Linux",
    "Editores de textos (Word, Writer, etc.)",
    "Planilhas eletrônicas (Excel, Calc, etc.)", 
    "Apresentadores (Powerpoint, Impress, Prezzi, etc.)", 
    "Sistemas de Gestão Empresaria" ]

let q25 = [
    {
        n:0, //nenhum
        p:0, //pouco
        i:0,//intermediário
        a:0 // muito avançado
    },
    {
        n:0, //nenhum
        p:0, //pouco
        i:0,//intermediário
        a:0 // muito avançado
    },
    {
        n:0, //nenhum
        p:0, //pouco
        i:0,//intermediário
        a:0 // muito avançado
    },
    {
        n:0, //nenhum
        p:0, //pouco
        i:0,//intermediário
        a:0 // muito avançado
    },
    {
        n:0, //nenhum
        p:0, //pouco
        i:0,//intermediário
        a:0 // muito avançado
    },
    {
        n:0, //nenhum
        p:0, //pouco
        i:0,//intermediário
        a:0 // muito avançado
    }
]

//questão 26, contem multiplas perguntas e sera realizada em looping usando a variavel abaixo
let lang = [
    "Inglês",
    "Espanhol",
    "Outro Idioma"
]

let q26 = [
    {
      leb:0,
      ler:0,
      le:0,
      l:0,
      na:0,  
    },
    {
        leb:0,
        ler:0,
        le:0,
        l:0,
        na:0,  
    },
    {
        leb:0,
        ler:0,
        le:0,
        l:0,
        na:0,  
    },


]

//questão 27, contem multiplas perguntas e sera realizada em looping usando a variavel abaixo

let comunic = [
    "Televisores", 
    "Internet", 
    "Revistas", 
    "Jornais", 
    "Rádio", 
    "Redes socias", 
    "Conversas com Amigos"
]

let q27 = [
    {
        na:0, //nunca
        p:0, //pouco
        as:0, //as vezes
        m:0, //muito
        s:0 //sempre
    },
    {
        na:0, //nunca
        p:0, //pouco
        as:0, //as vezes
        m:0, //muito
        s:0 //sempre
    },
    {
        na:0, //nunca
        p:0, //pouco
        as:0, //as vezes
        m:0, //muito
        s:0 //sempre
    },
    {
        na:0, //nunca
        p:0, //pouco
        as:0, //as vezes
        m:0, //muito
        s:0 //sempre
    },
    {
        na:0, //nunca
        p:0, //pouco
        as:0, //as vezes
        m:0, //muito
        s:0 //sempre
    },
    {
        na:0, //nunca
        p:0, //pouco
        as:0, //as vezes
        m:0, //muito
        s:0 //sempre
    },
    {
        na:0, //nunca
        p:0, //pouco
        as:0, //as vezes
        m:0, //muito
        s:0 //sempre
    }

    
]

let q28 = {
    as:0, //Algumas vezes por semana
    d:0, //Diariamente
    nl:0, // Não leio
    r:0, //Raramente
    sd:0 //Somente aos domingos
}


let q29 = {
	nl:0,	//Não leio jormal
	ta:0,	//Todos os assuntos
	nt:0,	//Notícias locais
	nn:0,	//Notícias nacionais
	ni:0,	//Notícias internacionais
	es:0,	//Esporte
	lac:0,	//Lazer, arte e cultura
	np:0,	//Notícias policiais
	cl:0,	//Classificados
	md:0,	//Moda
	sc:0	//Sociais
}


let q30 = {
    a2:0, //Até 2
    a36:0, //De 3 até 6
    a71:0, // De 7 até 10
    a10:0, //Mais de 10
    n:0 //Nenhum
}


let q31 = {
    nl:0, //Não leio
    r:0, //Romance
    f:0, //Ficção
    p:0, //Policial
    b:0, //Biográfico
	a:0, //Aventura
    aa:0, //Autoajuda
    o:0 //Outros
}


let q32 = {
    n:0, //Não
    s:0 //Sim
}


let q33 = {
    c:0, //Católica
    ep:0, //Espírita
    ev:0, // Evangélica
    n:0, //Nenhuma
    o:0 //Outra
}

let q34 ={
    C:0,	//Cinema
    E:0,	//Exposições de arte
    F:0,	//Filmes na internet
    L:0,	//Literatura
    MEU:0,	//Museus
    MIC:0,	//Música
    T:0,	//Teatro
    TV:0,	//TV
    V:0,	//Viagens
    N:0	//Nenhuma
}

let q35 ={
    C:0,	//Cartaz de divulgação
    I:0,	//Indicação de familiar/amigo
    F:0,	//Pelo Facebook
    J:0,	//Por algum dos jormais
    R:0,	//Por alguma das rádios
    O:0,	//Por outdoor
    E:0	//Propaganda na escola que estudava
}

let q36 ={
    A:0,	//Este curso forma profissionais facilmente absorvidos pelo mercado
    R:0,	//Este curso forma profissionais que são bem remunerados
    M:0,	//Minha vocação é seguir esta carreira
    G:0,	//Este curso é gratuito
    D:0,	//Este curso é de média duração
    C:0,	//É um curso bem conceituado na região
    T:0,	//Porque já trabalho na área
    S:0,	//Sugestão ou vontade familiar
    O:0	//Outros motivos
}


let q37 ={
    C:0,	//Obter novos conhecimentos
    E:0,	//Obter competências para exercício de uma profissão
    N:0,	//Conhecer novas pessoas
    M:0,	//Melhorar-me como pessoa para bons relacionamentos futuros
    D:0,	//Obter um diploma de nível superior
    C:0,	//Outra expectativa
    A:0	    //Não tenho expectativa alguma
}

let q38 ={
	C:0,	//Conquistar vaga em empresa privada
	P:0,	//Prestar concurso público
	M:0,	//Melhorar cargo e salário na empresa que trabalho
	A:0,	//Abrir meu próprio negócio
	I:0,	//Ingressar na carreira acadêmica
	O:0,	//Outra expectativa
	N:0		//Nenhuma expectativa
}

let q39 ={
    n:0,//Não
    s:0//Sim
}

let q40 ={
   n:0,//Não fiz
   so:0,//Sim em outra instituição 
   se:0,//Sim na Etec
   ss:0,//Sim no Senac
   ssn:0//Sim no Senai

}

let q41={
   b: 0,//Bicicleta
   c: 0,//Caminhando
   cn:0,//Carona
   cr:0,//Carro
   mt:0,//Moto
   o:0,//Ônibus
   t:0//Transporte escolar

}