function nomecompleto(){
    const firstName = 'Murillo'
    const secondName = 'Vinícius'
    const space = ' '
    const fullName = firstName + space + secondName
    return fullName
} // exemplo de função com return, return serve para armazenar os dados para chamar depois
console.log(nomecompleto())

function areaDoCirculo(r){
    let area = Math.PI * r * r
    return area
} // adicionando um paramentro na função
console.log(areaDoCirculo(15))

function somaDoisParametros(valorOne, valorTwo){
    let soma = valorOne + valorTwo
    return soma
} // exemplo de função com dois parametros
console.log(somaDoisParametros(10, 30))
console.log(somaDoisParametros(10, 100))

const somaDosNumeros = (...args) => {
    let soma = 0
    for (let i = 0; i <= 100; i++){
        soma += i
    }
    return soma
} // função arrow pode armazenando inlimitados parametros
console.log(somaDosNumeros())

const funcaoAnonima = function(){
    console.log('Função anonima, meu valor está armazenado em na CONST')
}

function valorPadrão(seuAnoNascenca, AnoAtual = 2022){
    suaIdade = -1 * (seuAnoNascenca - AnoAtual)
    return suaIdade
} // adicionando um valor padrão a função. PS: IMPORTANTE PARA ALGUNS PROJETOS
console.log(valorPadrão(2002))

const idade = (anoNascenca, anoAtual = 2022) => {
    age = anoAtual - anoNascenca
    return age
}
console.log(idade(2000))




