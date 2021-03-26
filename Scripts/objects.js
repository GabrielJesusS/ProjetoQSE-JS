//variaveis criadas da seguinte forma q = questão n= número da questão, exemplo : q6 = questão 6
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