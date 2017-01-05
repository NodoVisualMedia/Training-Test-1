var nombre = document.getElementById("nombre");
var sexo = document.getElementById("sexo");
var palabra = document.getElementById("navidad");
var resultado = document.getElementById("resultado");

function llenar() {
	
	var invertir = "";
	var x = palabra.value.length;
	var cadenaInvertida = "";

	while (x>=0) {
		cadenaInvertida = cadenaInvertida + palabra.value.charAt(x);
		x--;
	}

	console.log(cadenaInvertida);

	resultado.innerHTML = " \
	Nombre: <center>"+nombre.value+"</center><br> \
	<br>Sexo: <center>"+sexo.value+"</center><br> \
	<br>Palabra Navideña: <center>"+cadenaInvertida;
}

 
 	
 