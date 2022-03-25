const { resolveSoa } = require('dns')
const express=require('express')
const rutas=express.Router()
const path=require('path')

const conexion = require('./bd')

rutas.get("/", (req,res) =>{
    res.render("ValidacionUsuario")
})

rutas.get("/usuario",(req, res)=>{
    conexion.query('SELECT * FROM usuarios',(error,filas)=>{
        if(error)throw error
        res.render("usuario",{filas:filas})
    })
})

rutas.get("/eliminar/:ID",(req, res)=>{
    const id = req.params.ID;

    conexion.query(`DELETE FROM usuarios WHERE ID=${id}`, (error, respuesta)=>{
        if(error)throw error
        res.redirect('/usuario')
    })
})

rutas.get("/agregar",(req, res)=>{
    res.render('agregar')
})

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

rutas.get("/editar/:ID",(req, res)=>{
    const ID = req.params.ID
    conexion.query(`SELECT * FROM usuarios WHERE ID = ? ` ,ID,(error,filas)=>{
        if(error)throw error
        res.render('editar',{filas:filas[0]})
    })
})

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

module.exports=rutas