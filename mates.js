/* Copiright Adriano Porcheddu adriano@eja.it 2022*/

//Número PI
var pi = 3.14159265358979323846;

//##################################OPERACIONES BÁSICAS

//Suma números
function suma() {
	var tot = 0;
	for (n in arguments) {
		tot += arguments[n];
	}
	return tot
}

//Resta números
function resta() {
	tot = arguments[0];
	for (i = 1; i < arguments.length; i++) {
		tot -= arguments[i];
	}
	return tot
}

//Multiplica números
function multiplica() {
	var tot = 1;
	for (n in arguments) {
		tot *= arguments[n];
	}
	return tot
}

//Divide números
function divide() {
	tot = arguments[0];
	for (i = 1; i < arguments.length; i++) {
		tot /= arguments[i];
	}
	return tot
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
	var primosAr = [2];
	for (var i=primosAr[0]; i < limite; i++) {
		var esPrimo = true;
		for (n in primosAr) {
			if (verificaResto(i, primosAr[n]) == 0) {
				esPrimo = false; 
			}
		} 		
		if (esPrimo) {
			primosAr.push(i); 	
		} 	
	} 	
	return primosAr
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

//Devuelve la media de un array de números
function media(nA) {
	var nAL = nA.length;
	var suma = 0;
	for (var i = 0; i < nAL; i++) {
		suma += parseFloat(nA[i]);
	}
	var res = (suma / nAL);
	return res
}

//################################GEOMETRÍA

//CÍRCULO
function perimetroCirculo(radio) {
	return (multiplica(radio, pi, 2))
}
function areaCirculo(radio) {
	return (multiplica(expone(radio, 2), pi))
}

function circulo(radio) {
	var datos = {
		"radio": radio,
		"area": areaCirculo(radio),
		"perimetro": perimetroCirculo(radio)
	};
	return datos
}

//CUADRADO
function perimetroCuadrado(lado) {
	return multiplica(lado, 4)
}

function areaCuadrado(lado) {
	return expone(lado, 2)
}

function cuadrado(lado) {
	var datos = {
		"lado": lado,
		"area": areaCuadrado(lado),
		"perimetro": perimetroCuadrado(lado)
	};
	return datos
}

//TRIÁNGULO EQUILÁTERO
function perimetroTrianguloEquilatero(lado) {
	return multiplica(lado, 3)
}

function alturaTrianguloEquilatero(lado) {
	var a, b, c;
	c = lado;
	b = divide(lado, 2);
	a = Math.sqrt(expone(c, 2) - expone(b, 2));
	return a
}

function areaTrianguloEquilatero(lado) {
	area = divide(multiplica(alturaTrianguloEquilatero(lado), lado), 2);
	return area
}

function trianguloEquilatero(lado) {
	var datos = {
		"lado": lado,
		"area": areaTrianguloEquilatero(lado),
		"perimetro": perimetroTrianguloEquilatero(lado)
	};
	return datos
}

//TRIÁNGULO RECTÁNGULO
function perimetroTrianguloRectangulo(cat1, cat2) {
	hip = hipotenusa(cat1, cat2);
	return suma(cat1, cat2, hip)
}

function hipotenusa(cat1, cat2) {
	hip = sqrt(suma(expone(cat1, 2), expone(cat2, 2)));
	return hip
}

function areaTrianguloRectangulo(cat1, cat2) {
	return divide(multiplica(cat1, cat2), 2)
}

function trianguloRectangulo(cat1, cat2) {
	var datos = {
		"cateto1": cat1,
		"cateto2": cat2,
		"hipotenusa": hipotenusa(cat1, cat2),
		"perimetro": perimetroTrianguloRectangulo(cat1, cat2),
		"area": areaTrianguloRectangulo(cat1, cat2)
	};
	return datos
}
