class DateHelper {

    constructor() {
        throw new Error("Essa classe não pode ser instanciada.");
    }

    static textoParaData(texto) {
        if (texto.match(!/^d{4}-d{2}-d{2}$/)) {
            throw new Error("O formato correto é yyyy-MM-dd");
        }
        return new Date(...texto.split('-')
            .map(function(item, indice) {
                return item - (indice % 2);
            })
        );
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

}