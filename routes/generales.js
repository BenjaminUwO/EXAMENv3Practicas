//declaramos las variables que almacenarán las propiedades de cada método

const { resolveSoa } = require('dns')
const express=require('express')
const rutas=express.Router()
const path=require('path')


const conexion = require('./bd')

//Declaracion de funciones

//Ruta raíz que renderiza la validación del usuario
rutas.get("/", (req,res) =>{
    res.render("ValidacionUsuario")
})

//ruta usuario que muestra por la web 
rutas.get("/usuario",(req, res)=>{
    conexion.query('SELECT * FROM usuarios',(error,filas)=>{
        if(error)throw error
        res.render("usuario",{filas:filas})
    })
})

//ruta que selecciona el id de la persona y lo elimina de la base de datos
rutas.get("/eliminar/:ID",(req, res)=>{
    const id = req.params.ID;

    conexion.query(`DELETE FROM usuarios WHERE ID=${id}`, (error, respuesta)=>{
        if(error)throw error
        res.redirect('/usuario')
    })
})

//función que agrega los elementos a la tabla
rutas.get("/agregar",(req, res)=>{
    res.render('agregar')
})

//función que toma los valores del body y los pasa a la base de datos con una sentencia sql
rutas.post("/guardar",(req, res)=>{

    const ID = req.body.ID
    const RFC = req.body.RFC
    const CURP = req.body.CURP
    const NOMBRE = req.body.NOMBRE
    const CONTRASENA = req.body.CONTRASENA


    conexion.query(`INSERT INTO usuarios SET ?`,{RFC:RFC, CURP:CURP, NOMBRE:NOMBRE, CONTRASENA:CONTRASENA },(error,filas)=>{
        if(error)throw error
    })
    res.redirect('/usuario')

})


//funcion que recupera el valor de un registro y permite editarlo en otra interfaz
rutas.get("/editar/:ID",(req, res)=>{
    const ID = req.params.ID
    conexion.query(`SELECT * FROM usuarios WHERE ID = ? ` ,ID,(error,filas)=>{
        if(error)throw error
        res.render('editar',{filas:filas[0]})
    })
})

//funcion que actualiza la tabla
rutas.post('/actualizar',(req,res)=>{

    const ID = req.body.ID
    const RFC = req.body.RFC
    const CURP = req.body.CURP
    const NOMBRE = req.body.NOMBRE
    const CONTRASENA = req.body.CONTRASENA

    conexion.query(`UPDATE usuarios SET ? WHERE ID=?`,
    [{RFC:RFC, CURP:CURP, NOMBRE:NOMBRE, CONTRASENA:CONTRASENA},ID],(error, filas)=>{
        if(error)throw error
        res.redirect('/usuario')
    })
})

//se exporta el archivo
module.exports=rutas