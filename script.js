function agregar(valor){
    document.getElementById('pantalla').value += valor;   
}


function borrar(){
    document.getElementById('pantalla').value = "";   
}

function calcular() {
  const valordepantalla = document.getElementById("pantalla").value 
  const resultado = eval(valordepantalla)
  document.getElementById("pantalla").value = resultado;
}