/* Copiright Adriano Porcheddu adriano@eja.it 2022*/

//Número PI
var pi = 3,14159265358979323846;

//Suma dos números
function suma(a, b) {
	return a+b
}

//Resta un número(b) a otro(a)
function resta(a, b) {
	return a-b
}

//Multiplica un número(a) entre otro(b)
function multiplica(a, b) {
	return a*b
}

//Divide un número(a) entre otro(b)
function divide(a, b) {
	return a/b
}

//Da el resto de un número(a) entre otro(b)
function verificaResto(a, b) {
	return a%b
}

//Expone un número(a) a otro(b)
function expone(a, b) {
	return a**b
}

//Devuelve todos los números primos existentes hasta el límite(limite)
function primos(limite) {
	var primos = [2];
	var esPrimo = true;
	for (var i=primos[0]; i < limite; i++) {
		for (n in primos) {
			if (entre(i, primos[n])) {
				esPrimo = false; 
			}
		} 		
		if (esPrimo) {
			primos.push(i); 	
		} 	
	} 	
	return primos
}

//Devuelve la división de el número de números primos entre sus decenas (veces) veces, un ejemplo sería: ({1, 2, 3, 5, 7} son 5) => (5/10); luego {11, 13, 17, 19} son 4 => ((4+5)/20)
function primosEntreDecenas(veces) {
	//10, 20, 30... (decenas)
	var decenas = [];
	//Fracciones finales
	var fracciones = []; 
	//Primos requeridos
	var allPrimes = primos(veces*10); 
	//5, 9, 11... (sumas de los primos por cada decena)
	var decs = []; 	
	//Ajusta las variables acorde con las veces(veces) requeridas
	for (var i = 1; i < veces+1; i++) {
		decenas.push((i*10).toString()); 
		decs.push(1);
	}
	//Calcula las fracciones
	for (var i = 0; i < decenas.length; i++) {
		for (n in allPrimes) {
			if (allPrimes[n] < decenas[i]) { 		
				for (var a = 1; a < decenas.length+1; a++) {
					if (decenas[i] == a*10) { 	
						decs[i]++;
					} 				
				} 		
			} 		
		} 	
		fracciones.push(divide(decs[i], decenas[i])); 
	}
	return fracciones
}

function media(nA) {
	var nAL = nA.length;
	var suma = 0;
	for (var i = 0; i < nAL; i++) {
		suma += parseFloat(nA[i]);
	}
	var res = (suma / nAL);
	return res
}
