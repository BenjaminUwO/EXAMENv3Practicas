const mysql=require('mysql');

const conexion=mysql.createConnection({

    host: "localhost",
    user: "root",
    password:"",
    database:"retho"

})

conexion.connect((error)=>{

    if(error){
        console.log('No se pudo establecer la conexion con el servidor')
    }else{
        console.log('Conexion exitosa')
    }
})

module.exports = conexion