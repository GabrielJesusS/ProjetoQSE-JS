const express = require('express');
const router = express.Router();

//Retorna uma informação
router.get('/', (req,res,next)=>{
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de formularios'
    });
});

//Insere uma nova informação
router.post('/', (req,res,next)=>{
    const formulario ={
        nome: req.body.nome,
        idade: req.body.idade
    };
    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota Formularios',
        dadosPassados: formulario
    });
});

router.get('/:id_formulario', (req,res,next)=>{
    const id = req.params.id_formulario

    if (id === 'especial'){
        res.status(200).send({
            mensagem: 'Voce descobriu o ID Especial',
            id: id
        });   
    } else {
    res.status(200).send({
        mensagem: 'Voce passou um ID'
    });
    }
});

//Insere uma nova informação
router.patch('/', (req,res,next)=>{
    res.status(201).send({
        mensagem: 'Usando o Patch dentro da rota Formularios'
    });
});

//Exclui uma informação
router.delete('/', (req,res,next)=>{
    res.status(201).send({
        mensagem: 'Usando o Delete dentro da rota Formularios'
    });
});

module.exports = router;