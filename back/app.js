const express = require('express');

const app = express();

const cors = require('cors')

const morgan = require('morgan');

const bodyParser = require('body-parser')

const rotaFormulario = require('./routes/formulario')
const rotaLogin = require('./routes/users')

app.use(morgan('dev'));//Monitora as reqs e retorna um log
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));//Apenas dados simples
app.use(bodyParser.json());// Apenas formato jsonpara entrada

app.use((req,res,next)=>{
    res.header('Acces-Control-Allow-Origin', '*')
    res.header('Acess-Control-Allow-Header', 
    'Origin, X-Requested-With, Context-Type, Accept, Authorization');

    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
})

app.use('/formulario', rotaFormulario);
app.use('/users', rotaLogin)

//Quando a req solicita uma rota que não existe
app.use((req,res,next)=>{
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
})

app.use((error, req, res, next)=>{
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
});

module.exports = app;