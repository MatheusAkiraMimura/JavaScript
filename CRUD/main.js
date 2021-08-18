'use strict'

const abrirModal = () => document.getElementById('modal')
    .classList.add('active')

const fecharModal = () => {
    limparArquivos()//Criado na linha 42
    document.getElementById('modal').classList.remove('active')
}


const getLocalStorage = () => JSON.parse/*Transforma a String em JSON novamente*/(localStorage.getItem('db_cliente'))/*Vê o que está no localStorage */ ?? []/*Para evitar erro, caso o localStorage esteja vazio ou nulo*/
const setLocalStorage = (dbCliente) => localStorage.setItem/*Manda de volta para o banco*/("db_cliente", JSON.stringify/*Transforma o objeto em string, fazendo o DB funcionar*/(dbCliente)) //db_cliente é a key, da localStorage e o valor contido na JSON.stringify é o value.

// CRUD - create read update delete
const deleteCliente = (indice) => {
    const dbCliente = vizualizarCliente()
    dbCliente.splice(indice, 1) //A partir do indice, vai excluir ele mesmo
    setLocalStorage(dbCliente)
}

const updateCliente = (indice, cliente) => {
    const dbCliente = vizualizarCliente()
    dbCliente[indice] = cliente //indice, indica qual a posição, para assim saber qual cliente que deve receber o update
    setLocalStorage(dbCliente) //Envia para o banco dbCliente
}

const vizualizarCliente = () => getLocalStorage() //Função para apenas ver os clientes do localStorage

const criarCliente = (cliente) => {
    const dbCliente = getLocalStorage() //Para trazer os clientes do localStorage
    dbCliente.push (cliente) //push, adiciona mais um em cliente, com base nos dados vindos da const getLocalstorage
    setLocalStorage(dbCliente) //Para enviar os clientes ao localStorage
}

const arquivosValidos = () => { 
    return document.getElementById('form').reportValidity() //Verifica se os campos estão preenchidos
}

//Interação com o layout

const limparArquivos = () => {
    const arquivos = document.querySelectorAll('.modal-field')//Ele vai trazer um array com todos os campos que ele encontrar
    arquivos.forEach(field => field.value = "")//forEach, vai varrer campo por campo, no fim ele iguala a vazio para zerar os campos
    document.getElementById('nome').dataset.indice = 'new'
}

const salvarCliente = () => {
    debugger
    if (arquivosValidos()) { //Verifica se os campos estão preenchidos
        const cliente = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
        }
        const indice = document.getElementById('nome').dataset.indice //Diferenciando os botões de salvar, para subitituir ao editar, e não criar um novo.
        if (indice == 'new') {
            criarCliente(cliente)
            updateTabela()
            fecharModal()
        } else {
            updateCliente(indice, cliente)
            updateTabela()
            fecharModal()
        }
    }
}

const criarLinha = (cliente, indice) => {
    const novaRow = document.createElement('tr')
    novaRow.innerHTML = `
        <td>${cliente.nome}</td>
        <td class="esconder">${cliente.email}</td>
        <td class="esconder2">${cliente.celular}</td>
        <td class="esconder3">${cliente.cidade}</td>
        <td>
            <button type="button" class="button green" id="editar-${indice}">Editar</button>
            <button type="button" class="button red" id="delete-${indice}" >Excluir</button>
        </td>
    `
    document.querySelector('#tabelaCliente>tbody').appendChild(novaRow)//
}

const limparTabela = () => {
    const rows = document.querySelectorAll('#tabelaCliente>tbody tr')//Seleciona os arrays com tr
    rows.forEach(row => row.parentNode.removeChild(row))//Após pegar cada uma das linhas com o forEach, as exclue 
}

const updateTabela = () => {
    const dbCliente = vizualizarCliente()
    limparTabela()//Para não duplicar os dados
    dbCliente.forEach(criarLinha)//Envia os dados para a função criarLinha
}

const preencher = (cliente) => {
    document.getElementById('nome').value = cliente.nome
    document.getElementById('email').value = cliente.email
    document.getElementById('celular').value = cliente.celular
    document.getElementById('cidade').value = cliente.cidade
    document.getElementById('nome').dataset.indice = cliente.indice //Para mudar de "new" para 0, 1, 2 ....
}

const editarCliente = (indice) => {
    const cliente = vizualizarCliente()[indice]
    cliente.indice = indice //Faz com que o cliente tenha um indice, ao enviar para preencher
    preencher(cliente)
    abrirModal()
}

const editarDeletar = (evento) => {
    if (evento.target.type == 'button') { //Se o lugar clicado for button, da prosseguimento

        const [acao, indice] = evento.target.id.split('-')//antes do "-" fica a ação e depois fica o ID. 

        if (acao == 'editar') {
            editarCliente(indice)
        } else {
            const cliente = vizualizarCliente()[indice]
            const resposta = confirm(`Deseja realmente excluir o cliente ${cliente.nome}?`)
            if (resposta) {
                deleteCliente(indice)
                updateTabela()
            }
        }
    }
}

updateTabela()

// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', abrirModal)

document.getElementById('modalClose')
    .addEventListener('click', fecharModal)

document.getElementById('salvar') //Quando clicar em salvar
    .addEventListener('click', salvarCliente) //Aciona a função, salvarCliente

document.querySelector('#tabelaCliente>tbody')
    .addEventListener('click', editarDeletar)

document.getElementById('cancelar')
    .addEventListener('click', fecharModal)