//alert("hola bb");

//vamos a capturar los datos ingresados por el usuario
var Nombre = document.getElementById('Nombre');
var Sexo = document.getElementById('Sexo');
var Navidad = document.getElementById('Navidad');
var Send = document.getElementById('Send');


// VAMOS A CAPTURAR LOS DATOS DE LA SECCION 2
var nombre1 = document.getElementById('nombre1');
var sexo1 = document.getElementById('sexo1');
var navidena1 = document.getElementById('navidena1');
var invertida = "";

var colocar = function () {

	nombre1.innerHTML = Nombre.value;
	sexo1.innerHTML =   Sexo.value;

	var x = Navidad.value.length;
	
	while (x>=0) {
		invertida += Navidad.value.charAt(x);
		x--;
	}
	
	navidena1.innerHTML = invertida;
}

Send.addEventListener("click", colocar);


