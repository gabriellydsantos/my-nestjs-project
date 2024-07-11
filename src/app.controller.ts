import { Controller, Get } from '@nestjs/common';
import { largerNumber } from './LargestNumber'; 
import { Primo } from './NumPrimo';
import { inverterString } from './Inverte';
import { fatorial } from './Fatorial';
import { Ordenar } from './Ordenar';





@Controller()
export class AppController {
  @Get()
  main(): string {
    // Exemplo de listas de números
    const listasDeNumeros = [
      [10, 20, 30, 40, 50],
      [5, 15, 25, 35, 45],
      [1, 2, 3, 4, 5],
      [1, 2, 10, 4, 5]
    ];

    
    const maioresNumeros = listasDeNumeros.map(largerNumber);

    const resultado = maioresNumeros
      .map((maiorNumero, index) => `O maior número da lista ${index + 1} é: ${maiorNumero}`)
      .join('\n');

    
    console.log(resultado);



    const number = 4;
if (Primo(number)) {
    console.log(`${number} é um número primo.`);
} else {
    console.log(`${number} não é um número primo.`);
}

const stringOriginal = 'Gabrielly';
const stringInvertida = inverterString(stringOriginal);
console.log(stringInvertida);





const numero = 7;
console.log(`Fatorial de ${numero} é ${fatorial(numero)}`);



const lista = [5,6,10,11,2,1,8,7];
console.log("Lista ordenada:", Ordenar(lista));


 
    return "Hello ";
  }
}
