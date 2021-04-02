const express = require('express');
const router = express.Router();

//Retorna uma informação
router.get('/', (req,res,next)=>{
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de login'
    });
});

//Insere uma nova informação
router.post('/', (req,res,next)=>{
    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota login'
    });
});

router.get('/:id_login', (req,res,next)=>{
    const id = req.params.id_login

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

//Altera uma informação
router.patch('/', (req,res,next)=>{
    res.status(201).send({
        mensagem: 'Usando o Patch dentro da rota login'
    });
});

//Exclui uma informação
router.delete('/', (req,res,next)=>{
    res.status(201).send({
        mensagem: 'Usando o Delete dentro da rota login'
    });
});

module.exports = router;