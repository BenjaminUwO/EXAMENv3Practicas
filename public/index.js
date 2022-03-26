let seleccionado = null
let modal=document.getElementById("modal")
let btnAgrega=document.getElementById("btnAgrega")


document.getElementById("productos").addEventListener("submit",function(e){
e.preventDefault()
let RFC = document.getElementById("RFC").value
let CURP = document.getElementById("CURP").value
let NOMBRE = document.getElementById("NOMBRE").value
let CONTRASENA = document.getElementById("CONTRASENA").value


if(seleccionado===null){
    agrega(RFC,CURP,NOMBRE,CONTRASENA)   
}else{
    actualiza(RFC,CURP,NOMBRE,CONTRASENA)
}
limpiar()

})

document.getElementById("datos").addEventListener("click",(e)=>{
    e.preventDefault()
    elimina(e.target)
    modificar(e.target)   
})

btnAgrega.addEventListener("click",()=>{
    abremodal()
})