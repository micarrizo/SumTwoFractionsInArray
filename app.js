const fractions = ["2/6+2/6","7/10+13/10"]
const fractionsOut = []
const den3 = 0
const num3 = 0


function maximoComunDivisor(a, b){ 
    if (a == 0) {
        return b
    }
    else{
        return maximoComunDivisor(b % a, a)
    } 
    
} 
function menorNumero(den3, num3) 
{ 
    factorComun = maximoComunDivisor(num3, den3); 
    den3 = den3/factorComun; 
    num3 = num3/factorComun; 
    fractionsOut.push(`${num3}/${den3}`)
}

function addFraction(num1, den1, num2, den2, num3, den3) 
{ 
    den3 = maximoComunDivisor(den1, den2); 
    den3 = (den1 * den2) / den3; 
    num3 = (num1) * (den3 / den1) +  (num2) * (den3 / den2); 
    menorNumero(den3, num3)
} 

function addingFractions(fractions){
    const reg = /\d+/g
    //const numeros = fractions[1].match(reg)

    for(let i = 0; i < fractions.length;  i++){
        const numeros = fractions[i].match(reg)
        const num1 = numeros[0]
        const den1 = numeros[1]
        const num2 = numeros[2]
        const den2 = numeros[3]
        addFraction(num1, den1, num2, den2, num3, den3)        
    }
    console.log(fractionsOut)
}

addingFractions(fractions)