function fullName(){
    const firstName = 'Murillo'
    const secondName = 'Vinícius'
    const space = ' '
    const fullName = firstName + space + secondName
    return fullName
}
console.log(fullName())

console.log('=====PRÓXIMA QUESTÃO=====')

function FullnameTwo(firstName, secondName){
    return ` ${firstName} ${secondName}`
}
console.log(FullnameTwo('Murillo', 'Vinícius'))

console.log('=====PRÓXIMA QUESTÃO=====')

function somaNumbers(valueA, valueB){
    return valueA + valueB
}
console.log(somaNumbers(1, 5))

console.log('=====PRÓXIMA QUESTÃO=====')

function areaDoRetangulo(comprimento, altura){
    area = comprimento * altura
    return area
}
console.log(areaDoRetangulo(10, 5))

console.log('=====PRÓXIMA QUESTÃO=====')

function perimetroRetangulo(comprimento, altura){
    perimetro = 2 * (comprimento + altura)
    return perimetro
}
console.log(perimetroRetangulo(12, 5))

console.log('=====PRÓXIMA QUESTÃO=====')

function perimetroRetanguloPrism(largura, comprimento, altura){
    perimetro = comprimento * largura * altura
    return perimetro
}
console.log(perimetroRetanguloPrism(1, 2, 3))

console.log('=====PRÓXIMA QUESTÃO=====')

function areaDoCirculo(raio){
    area = Math.PI * raio * raio
    return area
}
console.log(areaDoCirculo(10))

console.log('=====PRÓXIMA QUESTÃO=====')

function circuferenciaCirculo(raio){
    circuferencia = 2 * Math.PI * raio
    return circuferencia
}
console.log(circuferenciaCirculo(10))

console.log('=====PRÓXIMA QUESTÃO=====')

function densidade(massa, volume){
    density = massa / volume
    return density
}
console.log(densidade(20, 5))

console.log('=====PRÓXIMA QUESTÃO=====')

function speed(quantidade, tempo){
    velocidade = quantidade / tempo
}
console.log(speed(10, 5))

console.log('=====PRÓXIMA QUESTÃO=====')

function calcularPeso(mass, gravity = 9.81){
    peso = mass * gravity
    return peso
}
console.log(calcularPeso(10))

console.log('=====PRÓXIMA QUESTÃO=====')

const conversorTemperatura = (celsius) =>{
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit
}
console.log(conversorTemperatura(10))

console.log('=====PRÓXIMA QUESTÃO=====')

const calcularImc = (peso, altura) =>{
    return (peso/(altura * altura))
}

let BMI = calcularImc(150, 1.70)
if(BMI < 18.5) {
    console.log(`Seu IMC é ${BMI} você está abaixo do peso`)
}else if(BMI <= 24.9) {
    console.log(`Seu IMC é ${BMI} você está com o peso normal`)
} else if (BMI <= 29.9) {
    console.log(`Seu IMC é ${BMI} vccê está acima do peso`)
} else {
    console.log(`Seu IMC é ${BMI} vccê está OBESO`)
}

console.log('=====PRÓXIMA QUESTÃO=====')






