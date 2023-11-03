const ticket = 200;

let descEstudiante = 0.80;
let descTrainee = 0.50;
let descJunior = 0.15;

const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const totalpagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');

function calcularPago() {
    let total = cantidad.value * ticket;
    switch (categoria.value) {
        case "estudiante":
            total = total - (total * descEstudiante);
            break;
        case "trainee":
            total = total - (total * descTrainee);
            break;
        case "junior":
            total = total - (total * descJunior);
            break;
    }

    totalAPagar.textContent = `Total a Pagar: $ ${total}`;
}

btnResumen.addEventListener('click', (evento) => {
    evento.preventDefault();
    calcularPago();
});
