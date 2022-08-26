// input altura
// input peso

//botão limpar
//botão calcular

function calculo (){
    let altura = document.getElementById('altura')
    let peso = document.getElementById('peso')

    let IMC = peso / (altura * altura)
    console.log(IMC)
}