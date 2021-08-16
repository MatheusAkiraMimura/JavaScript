'use strict';

const getBanco = () => JSON.parse(localStorage.getItem ('lista')) ?? []; //"??" Se isto for nulo, seguir adiante

const setBanco = (bancoDeDados) => localStorage.setItem ('lista', JSON.stringify(bancoDeDados));

const criarItem = (tarefa, status='', indice) => {
    const item = document.createElement('label');
    item.classList.add('item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div> ${tarefa} </div>
        <input type="button" value="X" data-indice=${indice}>
    `

    document.getElementById('lista').appendChild(item);
}

const limparTarefas = () => {
    const lista = document.getElementById('lista');
    while (lista.firstChild) {
        lista.removeChild(lista.lastChild)
    }
}

const atualizarTela = () => {
    limparTarefas()
    const bancoDeDados = getBanco();
    bancoDeDados.forEach ((item, indice) => criarItem (item.tarefa, item.status, indice));

}

const adicionarItem = (evento) => {
    const tecla = evento.key; //Saber a tecla que foi digitada
    const texto = evento.target.value; //Pega o que for escrito na caixa de texto
    if (tecla === 'Enter') {
        const bancoDeDados = getBanco();
        bancoDeDados.push ({'tarefa': texto, 'status': ''});
        setBanco(bancoDeDados);
        atualizarTela(); //atualiza o banco
        evento.target.value = ''; //Limpar campo de texto
    }
}

const removerItem = (indice) => {
    const bancoDeDados = getBanco();
    bancoDeDados.splice (indice, 1);
    setBanco(bancoDeDados);
    atualizarTela();
}

const atualizarItem = (indice) => {
    const bancoDeDados = getBanco();
    bancoDeDados[indice].status = bancoDeDados[indice].status === '' ? 'checked' : ''; // "?" significa "então" ":" Significa "Senão"
    setBanco(bancoDeDados);
    atualizarTela();
}

const clickItem = (evento) => {
    const elemento = evento.target;
    if (elemento.type === 'button') {
        const indice = elemento.dataset.indice;
        removerItem(indice); // Remover o item
    }else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
        atualizarItem (indice);
    }

}

document.getElementById('novo_item').addEventListener('keypress', adicionarItem);
document.getElementById('lista').addEventListener('click', clickItem)

atualizarTela();