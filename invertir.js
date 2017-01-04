
	//seccion1//
 	var Nombre = document.getElementById('Nombre');
	var Sexo = document.getElementById('Sexo');
 	var Palabra = document.getElementById('Palabra');
 	var Send = document.getElementById('Send');
 
 	//seccion2
 	var nombres = document.getElementById('nombres');
 	var sexos = document.getElementById('sexos');
 	var navis = document.getElementById('navis');
 	var invertida = "";
 	var enviar = function (argument) {
 		nombres.innerHTML = Nombre.value;
 		sexos.innerHTML =   Sexo.value;
 
 		var x = Palabra.value.length;
 	
 		while (x>=0) {
 			invertida += Palabra.value.charAt(x);
 			x--;
 		}
 	
 		navis.innerHTML = invertida;
 	}
 
 	Send.addEventListener("click", enviar);
 	
 
 	
 