document.getElementById('carregar-voltar').style.visibility = 'hidden';

document.getElementById('carregar-maq').addEventListener('click', function () {


    /* Esse código de validação não impede alguém que entenda JS de entrar, mas deve manter o usuário comum fora */
    let passw = prompt("Entre com a senha:");
    let aviso;
    if (passw !== "info@prev" || passw == "") {
        aviso = "Senha incorreta.";
        alert(aviso);
        return;
    }

    const listaTarefas = document.getElementById('tarefas');

    /* Achar um modo de simplificar a fetch API para não repetir código */

    fetch('maq.json').then(resposta => resposta.json()).then(json => carregaDb(json));

    function carregaDb(json) {

        for (let p of json) {
            const container = document.createElement('div');
            const tarefa = document.createElement('input');
            const label = document.createElement('label');
            const descricao = document.createTextNode(p.passo);

            tarefa.setAttribute('type', 'checkbox');

            label.setAttribute('for', p.passo);
            label.appendChild(descricao);

            container.appendChild(tarefa);
            container.appendChild(label);

            listaTarefas.appendChild(container);
        }

        /* Usar QuerySelectorAll para menos codigo ? */
        document.getElementById('carregar-maq').style.visibility = 'hidden';
        document.getElementById('carregar-vpn').style.visibility = 'hidden';
        document.getElementById('carregar-3').style.visibility = 'hidden';
        document.getElementById('carregar-4').style.visibility = 'hidden';
        document.getElementById('carregar-5').style.visibility = 'hidden';
        document.getElementById('carregar-voltar').style.visibility = 'visible';
    }

})

document.getElementById('carregar-vpn').addEventListener('click', function () {

    const listaTarefas = document.getElementById('tarefas');

    fetch('vpn.json').then(resposta => resposta.json()).then(json => carregaDb(json));

    function carregaDb(json) {

        for (let p of json) {
            const container = document.createElement('div');
            const tarefa = document.createElement('input');
            const label = document.createElement('label');
            const descricao = document.createTextNode(p.passo);

            tarefa.setAttribute('type', 'checkbox');

            label.setAttribute('for', p.passo);
            label.appendChild(descricao);

            container.appendChild(tarefa);
            container.appendChild(label);

            listaTarefas.appendChild(container);

        }

        const img = document.createElement('img');
        img.setAttribute('src', './src/imagem/VPN.jpg');
        listaTarefas.appendChild(img);

        /* Usar QuerySelectorAll para menos codigo ? */
        document.getElementById('carregar-maq').style.visibility = 'hidden';
        document.getElementById('carregar-vpn').style.visibility = 'hidden';
        document.getElementById('carregar-3').style.visibility = 'hidden';
        document.getElementById('carregar-4').style.visibility = 'hidden';
        document.getElementById('carregar-5').style.visibility = 'hidden';
        document.getElementById('carregar-voltar').style.visibility = 'visible';
    }

})