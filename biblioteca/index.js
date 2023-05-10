//Sistema Biblioteca

let baseDeLivros =[];

function cadastrarLivro(){
    let codigo = prompt('insira o código do livro com 3 dígitos')
    let titulo = prompt("Digite o título do livro")
    let categoria = prompt("Digite a categoria")

    let livro = {
        codigo,
        titulo,
        categoria,
    }

    baseDeLivros.push(livro)

    executarMenu()
}

function pesquisarLivro (){
    let codigoPesquisa = prompt('Digite o código do livro desejado')

    for (let i = 0; i < baseDeLivros.length; i++) {
        let livro = baseDeLivros[i];

        if(codigoPesquisa == livro.codigo) {
            alert(`
                codigo: ${livro.codigo}
                titulo: ${livro.titulo}
                categoria: ${livro.categoria}
            `)
            executarMenu()
        }
    }

    alert('Livro não encontrado')
    executarMenu()

}

function excluirRegistro (){
    let codigoPesquisa = prompt('Digite o código do livro')
    let msg = ""

    for (let i = 0; i < baseDeLivros.length; i++) {
        let livro = baseDeLivros[i]

        if (codigoPesquisa == livro.codigo) {
            msg += `Título: ${livro.titulo} | Código: ${livro.codigo} 
            foi excluído da base de dados`
            baseDeLivros.splice(i, 1)
        }
    }
    alert(msg)
    executarMenu()

}



function executarMenu() {
    let acao = prompt(`
    (1) cadastrarLivro
    (2) pesquisarLivro
    (3) excluirRegistro
    (4) sair
    `)

    if(acao == "1"){
        cadastrarLivro()
    }else if (acao == "2"){
        pesquisarLivro()
    }else if (acao == "3"){
        excluirRegistro()
    }
}

executarMenu()