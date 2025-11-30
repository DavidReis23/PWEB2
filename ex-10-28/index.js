document.querySelector('#teste').textContent = 'Conteúdo adicionado via JavaScript!';

let teste = document.querySelector('#teste');
teste.style.color = 'red';
teste.style.fontSize = '40px';
teste.style.backgroundColor = 'yellow';

let botao = document.querySelector('#botao');
botao.addEventListener('click', function() {
    teste.style.color = 'blue';
    teste.style.backgroundColor = 'lightgray';
});

const formulario = document.querySelector('#formulario');
formulario.addEventListener('Clicar', function(event) {
    event.preventDefault();
    const inputTexto = document.querySelector('#inputTexto');
    teste.textContent = inputTexto.value;
}); 