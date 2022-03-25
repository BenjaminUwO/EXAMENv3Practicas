function agrega(RFC,CURP,NOMBRE,CONTRASENA) {
    let datos = document.getElementById("datos");
    
        datos.innerHTML += 
        `<tr> <td id="nu">${ID}</td> 
        <td>${RFC}</td> 
        <td>${CURP}</td> 
        <td>${NOMBRE}</td> 
        <td>${CONTRASENA}</td>
        <td><input type="button" value="Eliminar" name="eliminar" id="eliminar" > 
        <input type="button" value="Modificar" name="modificar" id="modificar" ></td>
        <tr>`
        

    cierramodal()
  }
  
  function limpiar(){
    document.getElementById("productos").reset();
    image.src = ""
  }
  
  function elimina(ele){
  if(ele.name=="eliminar"){
      ele.parentElement.parentElement.remove()
      mensaje("Articulo Eliminado")
      reodenar()
    }
}

function mensaje(me){
    document.querySelector("#mensaje").innerHTML=`<h3> ${me} </h3>`
    setTimeout(function(){
        document.querySelector("#mensaje").innerHTML=""
    },3000)
}

function modificar(ele){
    if (ele.name==="modificar"){
        document.getElementById("guardar").value = "Guardar"
        seleccionado = ele.parentElement.parentElement
        


        document.getElementById("nombre").value = seleccionado.cells[1].innerHTML
        document.getElementById("precio").value = seleccionado.cells[2].innerHTML
        document.getElementById("fecha").value = seleccionado.cells[3].innerHTML
        document.getElementById("tipo").value = seleccionado.cells[4].innerHTML
        document.getElementById("desc").value = seleccionado.cells[5].innerHTML
        document.getElementById("file").value = ""
        document.getElementById("prop").value = seleccionado.cells[7].innerHTML
        
        abremodal()
        
    }
}

function actualiza(nombre,precio,fecha,tipo,desc,file,prop){
    
    sfecha = fecha.trim()
    sfecha = sfecha.slice(8,10)+"/"+sfecha.slice(5,7)+"/"+sfecha.slice(0,4)

    seleccionado.cells[1].innerHTML=nombre
    seleccionado.cells[2].innerHTML=precio
    seleccionado.cells[3].innerHTML=sfecha 
    seleccionado.cells[4].innerHTML=tipo 
    seleccionado.cells[5].innerHTML=desc 
    seleccionado.cells[6].innerHTML= `<img id="output" width="200" height="100" src="${image.src}"></img>`
    seleccionado.cells[7].innerHTML=prop 
    seleccionado=null
    mensaje("Producto actualizado")
    document.getElementById("guardar").value = "Agregar"
    cierramodal()
}

function reodenar(){
    let listaNu=document.querySelectorAll("#nu")
    NL=0
    for(ele of listaNu){
      NL++
      ele.innerHTML=NL
    }
  }

function abremodal(){
    modal.style.display="block"
}

function cierramodal(){
    modal.style.display="none"
}

var loadFile = function(event) {
    image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    
};
