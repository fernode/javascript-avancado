class DateConverter {
	constructor() {
		throw new Error('Está classe não pode ser instanciada');
	}

	static paraTexto(data) {
		return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
	}

	static paraData(texto) {
		return new Date(
			...texto
			.split('-')
			.map((item, indice) => item - indice % 2)
		);
	}

}