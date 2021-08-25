class ConsultasView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }


    _template(model) {
            return `
        <table class="table table-primary">
            <thead class="thead-primaryrk">
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Data da Consulta</th>
                    <th scope="col">Peso (kg)</th>
                    <th scope="col">Altura (m)</th>
                    <th scope="col">IMC</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.consultas.map(linha => `
                    <tr>
                        <td>${linha.nome}</td>
                        <td>${DateHelper.dataParaTexto(linha.data)}</td>
                        <td>${linha.peso}</td>
                        <td>${linha.altura}</td>
                        <td>${linha.imc}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
        `;
    }
}