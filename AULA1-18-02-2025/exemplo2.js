
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const form = document.querySelector('#form');
const tbody = document.querySelector('#data tbody');
let dados = [];

form.addEventListener('submit', function (event) {
    event.preventDefault();
    dados.push({ nome: nome.value, email: email.value }); // add no vetor
    form.reset(); // limpo os campos do formulario
    render(); // renderizo a tabela
});

const render = () => {
    tbody.innerHTML = ''; // limpo a tabela
    // despeja os dados na tabela   
    dados.forEach(item => {
        const tr = document.createElement('tr');
        const tdNome = document.createElement('td');
        const tdEmail = document.createElement('td');
        const tdAcao = document.createElement('td');

        const buttonExcluir = document.createElement('button');
        buttonExcluir.textContent = 'Excluir';

        const buttonEditar = document.createElement('button');
        buttonEditar.textContent = 'Editar';

        tdAcao.appendChild(buttonExcluir);
        tdAcao.appendChild(buttonEditar);

        buttonExcluir.addEventListener('click', function () {
            const index = dados.indexOf(item);
            dados.splice(index, 1);
            render();
        }
        );

        buttonEditar.addEventListener('click', function () {
            nome.value = item.nome;
            email.value = item.email;
            const index = dados.indexOf(item);
            dados.splice(index, 1);
            render();
        }
        );

        tdNome.textContent = item.nome;
        tdEmail.textContent = item.email;

        tr.appendChild(tdNome);
        tr.appendChild(tdEmail);
        tr.appendChild(tdAcao);

        tbody.appendChild(tr);
    });
};