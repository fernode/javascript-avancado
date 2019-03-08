class NegociacaoController {
	constructor() {
		const $ = document.querySelector.bind(document);

		this._data = $('#data');
		this._quantidade = $('#quantidade');
		this._valor = $('#valor');

		this._negociacoes = new Negociacoes();
		this._negociacoesView = new NegociacoesView('#negociacoes');

		this._negociacoesView.update(this._negociacoes);

		this._mensagem = new Mensagem();

		this._mensagemView = new MensagensView('#mensageView');
		this._mensagemView.update(this._mensagem);
	}

	adiciona(e) {
		e.preventDefault();

		this._negociacoes.adiciona(this._criaNegociacoes());
		this._limpaFormulario();
		this._mensagem.texto = 'Negociação adicionada com sucesso!';
		this._negociacoesView.update(this._negociacoes);
		this._mensagemView.update(this._mensagem);
	}

	_criaNegociacoes() {
		return new Negociacao(
			DateConverter.paraData(this._data.value),
			parseInt(this._quantidade.value),
			parseFloat(this._valor.value)
		);
	}

	_limpaFormulario() {
		this._data.value = '';
		this._quantidade.value = 1;
		this._valor.value = 0.02;

		this._data.focus();
	}
}