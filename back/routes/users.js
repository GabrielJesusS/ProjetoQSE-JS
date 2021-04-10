const express = require('express');
const router = express.Router();
const mysql = require('../mysql').poll;
const bcrypt = require('bcrypt');

router.post('/cadastro',(req,res,next)=>{
    mysql.getConnection((err,conn)=>{
        if (err){ return res.status(500).send({ error: err })}
        conn.query('SELECT * FROM USERS WHERE userName = ?', [req.body.user], (error, results)=>{
            if (error){return res.status(500).send({error: error})}
            if (results.length > 0){
                res.status(409).send({mensagem: 'Usuário já cadastrado'})
            }else {
                bcrypt.hash(req.body.senha, 10, (errBcrypt, hash)=>{
                    if (errBcrypt){return res.status(500).send({error: errBcrypt})}
                    conn.query(
                        `INSERT INTO USERS (userName, password, realName) VALUES (?,?,?)`,
                        [req.body.user, req.body.senha,, req.body.name],
                        (error,results)=>{
                            conn.release();
                            if (error){return res.status(500).send({error: error})}
                            response ={
                                messagem: 'Usuário criado com sucesso',
                                usuarioCriado: {
                                    id_usuario: results.insertId,
                                    email: req.body.user
                                }
                            }
                            return res.status(201).send(response);
                        })
                });
            }    
        })
    });
})


router.post('/login', (req, res, next) => {
    mysql.getConnection((error, conn)=>{
        if (error){return res.status(500).send({error: error})}
        const query = `SELECT * FROM USERS WHERE userName = ?`;
        conn.query(query, [req.body.user], (error, results, fields)=>{
            conn.release();
            if (error){return res.status(500).send({error: error}) };
            if (results.length < 1){
                return res.status(401).send({mensagem: 'Falha na autenticaçãoa'})
            };
            console.log(results[0])
            bcrypt.hash(req.body.senha, 10, (errBcrypt, hash)=>{
                if (errBcrypt){return res.status(500).send({error: errBcrypt})}
                if (req.body.senha === results[0].password){
                    res.status(201).send({messagem: 'Usuario autenticado'})
                }else{
                    return res.status(401).send({mensagem: 'Falha na autenticaçãob'})    
                }
        });
        });
    });
});



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