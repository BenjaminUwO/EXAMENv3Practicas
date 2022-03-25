//Dar ordenes al boton
var intentos = 3;
//crear funcion para validar
function validar(){
    //variables
    var id=document.getElementById("id").value;
    var contrasena=document.getElementById("contrasena").value;
    //Sentencia
    //mandar a pagina si esta todo correcto
    if(id=="Admin" && contrasena=="Admin"){
        alert ("usuario encontrado")
        window.location="usuario";
        return false;
    }else{
        intentos--;
    }
    //alerta intentos
    alert("Tienes solo "+intentos+" intentos");
    if(intentos==0){
        document.getElementById("id").disable=true;
        document.getElementById("contrasena").disable=true;
        document.getElementById("boton").disable=true;
    }

}