class NegociacaoController {
	constructor() {
		const $ = document.querySelector.bind(document);

		this._data = $("#data");
		this._quantidade = $("#quantidade");
		this._valor = $("#valor");
	}

	adiciona(e) {
		e.preventDefault();

		const negociacao = new Negociacao(
			DateConverter.paraData(this._data.value),
			parseInt(this._quantidade.value),
			parseFloat(this._valor.value)
		);

		let dataTexto = DateConverter.paraTexto(negociacao.data);
	}

}