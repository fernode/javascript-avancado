class NegociacoesView {
	constructor(elemento) {
		this._negociacoes = document.querySelector(elemento);
	}

	update(model) {
		this._negociacoes.innerHTML = this.template(model);
	}

	template(model) {
		return `
			<table class="table table-hover table-bordered">
				<thead>
					<tr>
						<th>DATA</th>
						<th>QUANTIDADE</th>
						<th>VALOR</th>
						<th>VOLUME</th>
					</tr>
				</thead>

				<tbody>
				${model.paraArray().map(negociacao => {
				return `
					<tr>
					<td>${DateConverter.paraTexto(negociacao.data)}</td>
					<td>${negociacao.quantidade}</td>
					<td>${negociacao.valor}</td>
					<td>${negociacao.volume}</td>
					</tr>
				`
				}).join('')}

				<tfoot>
				</tfoot>
			</table>
		`

	}

}