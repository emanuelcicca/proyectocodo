document.addEventListener('DOMContentLoaded', function () {
    const ticket = 200;
    let descEstudiante = 0.80;
    let descTrainee = 0.50;
    let descJunior = 0.15;

    const cantidad = document.getElementById('cantidad');
    const categoria = document.getElementById('categoria');
    const totalAPagar = document.getElementById('totalAPagar');
    const btnResumen = document.getElementById('resumen');
    const cambiarFondoBtn = document.getElementById('cambiarFondoBtn');

    console.log(cantidad, categoria, totalAPagar, btnResumen);

    btnResumen.addEventListener('click', (evento) => {
        evento.preventDefault();
        validarFormulario();
    });

    const imagenesFondo = [
        'url("imagenes/cataratas.jpg")',
        'url("imagenes/paris.jpg")',
        'url("imagenes/machu pichu.jpg")'
    ];

    let indiceFondo = 0;

    cambiarFondoBtn.addEventListener('click', function () {
        document.body.style.backgroundImage = imagenesFondo[indiceFondo];
        indiceFondo = (indiceFondo + 1) % imagenesFondo.length;
    });

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

    function validarFormulario() {
        var nombre = document.querySelector('#formulario input[placeholder="Nombre"]').value;
        var apellido = document.querySelector('#formulario input[placeholder="Apellido"]').value;
        var correo = document.querySelector('#formulario input[placeholder="Correo"]').value;
        var cantidadValue = parseInt(cantidad.value);

        if (nombre === '' || apellido === '' || correo === '' || isNaN(cantidadValue) || cantidadValue <= 0 || cantidadValue.toString() !== cantidad.value) {
            alert('Rellenar todos los campos correctamente y asegurarse de que la cantidad sea un número entero positivo.');
        } else {
            calcularPago();
        }
    }
});

