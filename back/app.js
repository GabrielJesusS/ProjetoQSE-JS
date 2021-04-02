const express = require('express');

const app = express();

const morgan = require('morgan');

const rotaFormulario = require('./routes/formulario')
const rotaLogin = require('./routes/login')

app.use(morgan('dev'));//Monitora as reqs e retorna um log

app.use('/formulario', rotaFormulario);
app.use('/login', rotaLogin)

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