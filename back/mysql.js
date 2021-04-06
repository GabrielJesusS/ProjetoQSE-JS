const mysql = require('mysql');

var poll = mysql.createPool({
	"user": "pse",
    "password": "Perfil2021",
    "database": "pse-2021",
    //"host": "mysql743.umbler.com:41890",
    "host": "mysql743.umbler.com",
    "port": 41890
})

exports.poll = poll;