# Copyright Adriano Porcheddu adriano@eja.it 2022

import sys
from logging import debug, basicConfig, ERROR
import math

basicConfig(level=ERROR, format='%(asctime)s :: %(levelname)s :: %(funcName)s :: %(message)s')

#Número PI

pi = 3.14159265358979323846

#OPERACIONES BÁSICAS

#Suma números
def suma(*arguments): 
    tot = 0
    for n in arguments:
        tot += n 
    debug('la suma da {}'.format(tot))
    return tot

#Resta números
def resta(*arguments):
    tot = arguments[0]
    for x in range(0, len(arguments)):
        if x == 0:
            tot = arguments[x]
        else:
            tot -= arguments[x]
    debug('la resta da {}'.format(tot))
    return tot

#Multiplica números
def multiplica(*arguments):
    tot = 1
    for n in arguments:
        tot *= n
    debug('la multiplicación da {}'.format(tot))
    return tot

#Divide números
def divide(*arguments):
    tot = arguments[0]
    x = 1
    for x in arguments:
        tot /= x
    debug('la división da {}'.format(tot))
    return tot

#Da el resto de un número(a) entre otro(b)
def verifica_resto(a, b, debug=False):
    tot = a%b
    if debug:
        debug('el resto es {}'.format(tot))
    return tot

#Expone un número(a) a otro(b)
def expone(a, b):
    tot = a**b
    debug('el exponente da {}'.format(tot))
    return tot

#Devuelve todos los números primos existentes hasta el límite(limite)
def primos(limite):
    primos_ar = [2]
    i = 2
    while i<limite:
        es_primo = True
        for n in primos_ar:
            if verifica_resto(i, n) == 0:
                es_primo = False

        if es_primo:
            primos_ar.append(i)
        i += 1
    debug('los primos hasta {x} son {y}'.format(x=limite, y=primos_ar))
    return primos_ar

#Devuelve la división del número de números primos entre sus decenas (veces) veces, un ejemplo sería: ({1, 2, 3, 5, 7} son 5) => (5/10); luego {11, 13, 17, 19} son 4 => ((4+5)/20)
def primos_entre_decenas(veces):
    #10, 20, 30... (decenas)
    decenas = []
    #Fracciones finales
    fracciones = []
    #Primos requeridos
    all_primes = primos(veces*10)
    #5, 9, 11... (suma del número de primos por cada decena)
    decs = []
    #Ajusta las variables acorde con las veces(veces) requeridas
    i = 1
    while i<veces+1:
        decenas.append(i*10)
        decs.append(1)
        i += 1
    #Calcula las fracciones
    i = 0 
    while i<len(decenas):
        for n in all_primes:
            if n < decenas[i]:
                for a in range(1, len(decenas)+1):
                    if decenas[i] == multiplica(a, 10):
                        decs[i] += 1
        fracciones.append(decs[i]/decenas[i])
        i += 1
    debug('las fracciones son {}'.format(fracciones))
    return fracciones

#Devuelve la media de un array de números
def media(n_a):
    n_a_l = len(n_a)
    suma = 0
    i = 0
    while i<n_a_l:
        suma += float(n_a[i])
        i += 1
    res = suma / n_a_l
    debug('la media da {}'.format(res))
    return res

#GEOMETRÍA

#CÍRCULO
def perimetro_circulo(radio):
    return multiplica(radio, pi, 2)
def area_circulo(radio):
    return multiplica(expone(radio, 2), pi)

def circulo(radio):
    datos = {
            "radio": radio,
            "diametro": radio*2,
            "area": area_circulo(radio),
            "perimetro": perimetro_circulo(radio)
            }
    return datos

#CUADRADO
def perimetro_cuadrado(lado):
    return multiplica(lado, 4)
def area_cuadrado(lado):
    return expone(lado, 2)

def cuadrado(lado):
    datos = {
            "lado": lado,
            "area": area_cuadrado(lado),
            "perimetro": perimetro_cuadrado(lado)
            }
    return datos

#TRIÁNGULO EQUILÁTERO
def perimetro_triangulo_equilatero(lado):
    return multiplica(lado, 3)
def altura_triangulo_equilatero(lado):
    c = lado
    b = divide(lado, 2)
    a = math.sqrt(expone(c, 2) - expone(b, 2))
    return a
def area_triangulo_equilatero(lado):
    area = divide(multiplica(altura_triangulo_equilatero(lado), lado), 2)
    return area

def triangulo_equilatero(lado):
    datos = {
            "lado": lado,
            "area": area_triangulo_equilatero(lado),
            "perimetro": perimetro_triangulo_equilatero(lado)
            }
    return datos

#RECTÁNGULO
def perimetro_rectangulo(l1, l2):
    return suma(multiplica(l1, 2), multiplica(l2, 2))
def area_rectangulo(l1, l2):
    return multiplica(l1, l2)

def rectangulo(l1, l2):
    datos = {
            "lado1": l1,
            "lado2": l2,
            "perimetro": perimetro_rectangulo(l1, l2),
            "area": area_rectangulo(l1, l2)
            }
    return datos

#TRIÁNGULO ISÓCELES
def perimetro_triangulo_isoceles(lado, base):
    return suma(multiplica(lado, 2), base)
def altura_triangulo_isoceles(lado, base):
    c = lado;
    b = divide(base, 2)
    a = math.sqrt(expone(c, 2) - expone(b, 2))
    return a
def area_triangulo_isoceles(lado, base):
    altura = altura_triangulo_isoceles(lado, base)
    return divide(multiplica(base, altura), 2)

def triangulo_isoceles(lado, base):
    datos = {
            "lado": lado,
            "base": base,
            "altura": altura_triangulo_isoceles(lado, base),
            "perimetro": perimetro_triangulo_isoceles(lado, base),
            "area": area_triangulo_isoceles(lado, base)
            }
    return datos

#CUBO
def volumen_cubo(lado):
    return expone(lado, 3)
def superficie_cubo(lado):
    return multiplica(expone(lado, 2), 6)

def cubo(lado):
    datos = {
            "lado": lado,
            "volumen": volumen_cubo(lado),
            "superficie": superficie_cubo(lado)
            }
    return datos

#ESFERA
def volumen_esfera(radio):
    return multiplica(divide(4, 3), pi, expone(radio, 3))
def diametro_esfera(radio):
    return multiplica(radio, 2)
def ecuador_esfera(radio):
    return perimetro_circulo(radio)
def area_esfera(radio):
    return multiplica(4, pi, expone(radio, 2))

def esfera(radio):
    datos = {
            "radio": radio,
            "diametro": diametro_esfera(radio),
            "volumen": volumen_esfera(radio),
            "area": area_esfera(radio),
            "ecuador": ecuador_esfera(radio)
            }
    return datos


