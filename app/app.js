const form = document.querySelector('.form');
const negociacao = new NegociacaoController();

form.addEventListener('submit', negociacao.adiciona.bind(negociacao));

document.querySelector('#botao-apaga').addEventListener('click', negociacao.apaga.bind(negociacao));