const form = document.getElementById('form-contato');
const imgAmigo = '<img src="https://i.pinimg.com/originals/d8/f1/0e/d8f10e9361fd3006f48e524642ce3b0b.gif" alt="Peixe amarelo"/>';
const imgColega = '<img src="https://i.pinimg.com/originals/b0/e8/fd/b0e8fda4d486a365d3a36e48eac21f1c.gif" alt="Peixe roxo"/>';
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNúmeroContato = document.getElementById('número-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNúmeroContato.value}</td>`;
    linha += `<td>${inputNúmeroContato.value >= 5500900000000 ? imgAmigo : imgColega}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputNúmeroContato.value = '';
});