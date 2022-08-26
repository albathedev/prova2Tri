// input altura
// input peso

//botão limpar
//botão calcular

function calculo (){
    let altura = (document.getElementById('altura').value)/100
    let peso = document.getElementById('peso').value

    let IMC = parseFloat(altura) / parseFloat(peso)*parseFloat(peso)
    document.getElementById('result').value=IMC
    console.log(IMC)
}
