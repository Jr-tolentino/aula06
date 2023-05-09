//OBJECT

// let carro = {
//     marca: 'vw',
//     ano: 2020,
//     cor: 'preto'
// }

// carro.modelo = 'gol' //é possível informar uma nova descrição para o objeto a qualquer momento

// alert(carro.cor)

let carros =[];

function cadastrarCarro(){
    let placa = prompt('digite a placa do veículo com 7 digitos')
        if (placa.length != 7) {
            alert('Placa incorreta, digite novamente. Não utilize - ou .')
            } executarMenu()
    let cor = prompt("Digite a cor")
    let ano = prompt("Digite o ano")

    let carro = {
        placa,
        cor,
        ano,
    }

    carros.push(carro)

    executarMenu()
}


function pesquisarCarro (){
    let placaPesquisa = prompt('Digite o ano de pesquisa')

    for (let i = 0; i < carros.length; i++) {
        let carro = carros[i];

        if(placaPesquisa == carro.placa) {
            alert(`
                placa: ${carro.placa}
                cor: ${carro.cor}
                ano: ${carro.ano}
            `)
            executarMenu()
        }
    }

    alert('Carro não encontrado')
    executarMenu()

}



function pesquisaPorAno (){
    let anoPesquisa = prompt('Digite a placa de pesquisa')
    let msg = ""

    for (let i = 0; i < carros.length; i++) {
        let carro = carros[i];

        if(anoPesquisa == carro.ano){
           msg += `Placa: ${carro.placa} | Cor: ${carro.cor} | Ano: ${carro.ano}` 
        }
    }

    alert(msg)
    executarMenu()

}

function executarMenu() {
    let acao = prompt(`
    (1) cadastrar automóvel
    (2) pesquisar automóvel
    (3) pesquisar carro por ano
    (4) sair
    `)

    if(acao == "1"){
        cadastrarCarro()
    }else if (acao == "2"){
        pesquisarCarro()
    }else if (acao == "3");{
        pesquisaPorAno()
    }
}

executarMenu()