var campos = [
    document.querySelector('#nome'),
    document.querySelector('#data'),
    document.querySelector('#peso'),
    document.querySelector('#altura')
];

var tbody = document.querySelector('table tbody');

document.querySelector('#formulario').addEventListener('submit', function(evento) {
    evento.preventDefault();
    var tr = document.createElement('tr');

    campos.forEach(function(campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var td = document.createElement('td');
    td.textContent = (
        campos[2].value /
        ((campos[3].value / 100) * (campos[3].value / 100))
    ).toFixed(2);
    tr.appendChild(td);

    tbody.appendChild(tr);

    this.reset();
    campos[0].focus();

});