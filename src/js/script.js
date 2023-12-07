function exibirNota() {
    console.log("Botão Pressionado")

    var notaParcial = document.getElementById('nota1').value
    var notaBimestral = document.getElementById('nota2').value
    
    var notaParcialConvertida = parseInt(notaParcial)
    var notaBimestralConvertida= parseInt(notaBimestral)
    
    calculoNotaGlobal = notaParcialConvertida + notaBimestralConvertida 
    
    var resultado = calculoNotaGlobal / 2
    console.log(`Sua nota e: ${resultado}`)

    document.getElementById('exibirNota').innerHTML = resultado



}