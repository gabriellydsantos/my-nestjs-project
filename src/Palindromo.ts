
export function Palindromo(word :string): boolean{

const reverse = word.split('').reverse().join('');
return word ==reverse;

}