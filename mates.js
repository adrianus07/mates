/* Copiright Adriano Porcheddu adriano@eja.it 2022*/

var pi = 3,14159265358979323846;

function suma(a, b) {
	return a+b
}

function resta(a, b) {
	return a-b
}

function multiplica(a, b) {
	return a*b
}

function divide(a, b) {
	return a/b
}

function verificaResto(a, b) {
	return a%b
}

function expone(a, b) {
	return a**b
}

function primos(limite) {
	var primos = [2];
	var p = true;
	for (var i=primos[0]; i < limite; i++) {
		for (n in primos) {
			if (entre(i, primos[n])) {
				p = false; 
			}
		} 		
		if (p) {
			primos.push(i); 	
		} 	
	} 	
	return primos
}

function primosEntreDecenas(veces) {
	var decenas = [];
	var arrayFracciones = []; 
	var a = 0; 
	var allPrimes = primos(veces*10); 
	var decs = []; 	
	for (var i = 1; i < veces+1; i++) {
		decenas.push((i*10).toString()); 
		decs.push(1);
	} 	 	
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
		arrayFracciones.push(divide(decs[i], decenas[i])); 
	}
	return arrayFracciones
}
