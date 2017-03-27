function escribir(){
var a= document.getElementById("textoIngresado");
var b= document.createElement("li");
b.innerHTML = a;
document.getElementById("lista").appendChild(b);
document.getElementById("textoIngresado").value = "";
}
