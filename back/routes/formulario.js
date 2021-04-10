const express = require('express');
const router = express.Router();
const mysql = require('../mysql').poll;


//Insere uma nova informação
router.post('/', (req,res,next)=>{
    mysql.getConnection((err,conn)=>{
        if (err){ return res.status(500).send({ error: err })}
        conn.query(
            `INSERT INTO FORMULARIO (DATA, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, AA, AB, AC, AD, AE, AF, AG, AH, AI, AJ, AK, AL, AM, AN, AO, AP, AQ, AR, ASS, AT, AU, AV, AW, AX, AY, AZ, BA, BB, BC, BD, BE, BF, BG, BH, BI, BJ, BK, BL, BM, BN, BO, BP, BQ, BR, BS, BT, BU) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            ['NOW()', req.body.C, req.body.D, req.body.E, req.body.F, req.body.G, req.body.H, req.body.I, req.body.J, req.body.K, req.body.L, req.body.M, req.body.N, req.body.O, req.body.P, req.body.Q, req.body.R, req.body.S, req.body.T, req.body.U, req.body.V, req.body.W, req.body.X, req.body.Y, req.body.Z, req.body.AA, req.body.AB, req.body.AC, req.body.AD, req.body.AE, req.body.AF, req.body.AG, req.body.AH, req.body.AI, req.body.AJ, req.body.AK, req.body.AL, req.body.AM, req.body.AN, req.body.AO, req.body.AP, req.body.AQ, req.body.AR, req.body.ASS, req.body.AT, req.body.AU, req.body.AV, req.body.AW, req.body.AX, req.body.AY, req.body.AZ, req.body.BA, req.body.BB, req.body.BC, req.body.BD, req.body.BE, req.body.BF, req.body.BG, req.body.BH, req.body.BI, req.body.BJ, req.body.BK, req.body.BL, req.body.BM, req.body.BN, req.body.BO, req.body.BP, req.body.BQ, req.body.BR, req.body.BS, req.body.BT, req.body.BU],
            (error,results)=>{
                conn.release();
                if (error){return res.status(500).send({error: error})}
                response ={
                    messagem: 'Formulario salvo com sucesso',
                    formularioRespondido: {
                        resposta: results.insertId,
                        data: results.insertDATA
                    }
                }
                return res.status(201).send(response);
            })
    });
});


module.exports = router;