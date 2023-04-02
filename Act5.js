//Una variable que contenga tu altura en centímetros (entero)
let altura=185;
console.log(altura);
//Una variable que contenga tu altura en metros (número de coma flotante)
let altura2=1.85;
console.log(altura2);
//Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso=80.35;
console.log(peso);
//Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaArriba=Math.ceil(altura2);
console.log(alturaArriba);
//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoAbajo=Math.floor(peso);
console.log(pesoAbajo);
//Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
const esMaxValueEqual = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(esMaxValueEqual);