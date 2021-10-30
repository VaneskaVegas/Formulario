//Calculo de totales
function debePagar() {
    let total = 0;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let mail = document.getElementById("mail").value;
    let cant = document.getElementById("qty").value;
    let desc = document.getElementById("tipo").value;
    let flag = validarCampos(nombre,apellido,mail,cant);
    if (flag == true){
        if(desc==1){
            total = Number(cant)*(200*0.8);
            document.getElementById("total").innerHTML=("Total a Pagar <b>$ "+total+"<b>");
        }
        if(desc==2){
            total = Number(cant)*(200*0.5);
            document.getElementById("total").innerHTML=("Total a Pagar <b>$ "+total+"<b>");
        }
        if(desc==3){
            total = Number(cant)*(200*0.15);
            document.getElementById("total").innerHTML=("Total a Pagar <b>$ "+total+"<b>");
        }
    }else{
        alert("Debes llenar todos los campos");
    }
        

}

//Validacion campos
function validarCampos(nombre,apellido,mail,cant) {
    if (nombre && apellido && mail && cant){
        return true;
    }else{
        return false;
    }
}

//Borrar los campos
function borrar() {
    document.getElementById("total").innerHTML=("Total a Pagar $");
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("mail").value="";
    document.getElementById("qty").value="";
    document.getElementById("desc").value=1;
}