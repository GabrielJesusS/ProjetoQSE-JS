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
                                messagem: 'Usuário criado com sucesso'
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


module.exports = router;