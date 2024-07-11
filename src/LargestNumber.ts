export function largerNumber(numeros: number[]): number {
    if (numeros.length === 0) {
      throw new Error("A lista não pode estar vazia.");
    }
    
    let larger = numeros[0]; 
    
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > larger) {
        larger = numeros[i]; 
      }
    }
    
    return larger; 
}
  