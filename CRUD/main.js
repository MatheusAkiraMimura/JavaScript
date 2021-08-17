'use strict'

const abrirModal = () => document.getElementById('modal')
    .classList.add('active')

const fecharModal = () => {
    limparArquivos()
    document.getElementById('modal').classList.remove('active')
}


const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbCliente) => localStorage.setItem("db_client", JSON.stringify(dbCliente))

// CRUD - create read update delete
const deleteCliente = (index) => {
    const dbCliente = vizualizarCliente()
    dbCliente.splice(index, 1)
    setLocalStorage(dbCliente)
}

const updateCliente = (index, cliente) => {
    const dbCliente = vizualizarCliente()
    dbCliente[index] = cliente
    setLocalStorage(dbCliente)
}

const vizualizarCliente = () => getLocalStorage()

const criarCliente = (cliente) => {
    const dbCliente = getLocalStorage()
    dbCliente.push (cliente)
    setLocalStorage(dbCliente)
}

const arquivosValidos = () => {
    return document.getElementById('form').reportValidity()
}

//Interação com o layout

const limparArquivos = () => {
    const arquivos = document.querySelectorAll('.modal-field')
    arquivos.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
}

const salvarCliente = () => {
    debugger
    if (arquivosValidos()) {
        const cliente = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
        }
        const index = document.getElementById('nome').dataset.index
        if (index == 'new') {
            criarCliente(cliente)
            updateTabela()
            fecharModal()
        } else {
            updateCliente(index, cliente)
            updateTabela()
            fecharModal()
        }
    }
}

const criarRow = (cliente, index) => {
    const novaRow = document.createElement('tr')
    novaRow.innerHTML = `
        <td>${cliente.nome}</td>
        <td>${cliente.email}</td>
        <td>${cliente.celular}</td>
        <td>${cliente.cidade}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Excluir</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(novaRow)
}

const limparTabela = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTabela = () => {
    const dbCliente = vizualizarCliente()
    limparTabela()
    dbCliente.forEach(criarRow)
}

const preencher = (cliente) => {
    document.getElementById('nome').value = cliente.nome
    document.getElementById('email').value = cliente.email
    document.getElementById('celular').value = cliente.celular
    document.getElementById('cidade').value = cliente.cidade
    document.getElementById('nome').dataset.index = cliente.index
}

const editarCliente = (index) => {
    const cliente = vizualizarCliente()[index]
    cliente.index = index
    preencher(cliente)
    abrirModal()
}

const editarDeletar = (evento) => {
    if (evento.target.type == 'button') {

        const [action, index] = evento.target.id.split('-')

        if (action == 'edit') {
            editarCliente(index)
        } else {
            const client = vizualizarCliente()[index]
            const resposta = confirm(`Deseja realmente excluir o cliente ${client.nome}`)
            if (resposta) {
                deleteCliente(index)
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

document.getElementById('salvar')
    .addEventListener('click', salvarCliente)

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editarDeletar)

document.getElementById('cancelar')
    .addEventListener('click', fecharModal)