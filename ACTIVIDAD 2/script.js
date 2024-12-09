// Función para comparar dos números utilizando if
const compararNumeros = () => {
    const num1 = parseInt(document.getElementById("numero1").value);
    const num2 = parseInt(document.getElementById("numero2").value);
    const resultado = document.getElementById("resultado");

    if (num1 > num2) {
        resultado.innerHTML = `El mayor número es: ${num1}`;
    } else if (num2 > num1) {
        resultado.innerHTML = `El mayor número es: ${num2}`;
    } else {
        resultado.innerHTML = "Ambos números son iguales.";
    }
};

// Función para mostrar el mes utilizando switch
const mostrarMes = () => {
    const mes = parseInt(document.getElementById("mes").value);
    switch (mes) {
        case 1: alert("Enero"); break;
        case 2: alert("Febrero"); break;
        case 3: alert("Marzo"); break;
        case 4: alert("Abril"); break;
        case 5: alert("Mayo"); break;
        case 6: alert("Junio"); break;
        case 7: alert("Julio"); break;
        case 8: alert("Agosto"); break;
        case 9: alert("Septiembre"); break;
        case 10: alert("Octubre"); break;
        case 11: alert("Noviembre"); break;
        case 12: alert("Diciembre"); break;
        default: alert("Número inválido. Ingresa un número entre 1 y 12.");
    }
};

// Función para gestionar un array de nombres
let nombresArray = [];
const agregarNombre = () => {
    const nombre = document.getElementById("nombre").value;
    if (nombre) {
        nombresArray.push(nombre);
        document.getElementById("nombres").innerHTML = `<p><strong>Lista de Nombres:</strong></p><ul>${nombresArray.map(n => `<li>${n}</li>`).join('')}</ul>`;
    }
};

// Verificar si el formulario de registro existe
const registroForm = document.getElementById("registroForm");

if (registroForm) {
    // Manejar el evento submit del formulario
    registroForm.onsubmit = (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado

        // Obtener los datos ingresados en el formulario
        const datos = {
            id: document.getElementById("id").value,
            cedula: document.getElementById("cedula").value,
            nombres: document.getElementById("nombres").value,
            fechaNacimiento: document.getElementById("fechaNacimiento").value,
            ciudad: document.getElementById("ciudad").value
        };

        // Recuperar datos previos del localStorage
        const registros = JSON.parse(localStorage.getItem("registros")) || [];

        // Agregar los nuevos datos al arreglo
        registros.push(datos);

        // Guardar el arreglo actualizado en localStorage
        localStorage.setItem("registros", JSON.stringify(registros));
        console.log("Registros actualizados:", registros); // Verificar que los datos se guardan correctamente

        // Abrir la página de datos en una nueva pestaña
        window.open("datosvalidados.html", "_blank");
    };
}

// Mostrar los datos en la página datosvalidados.html
if (window.location.pathname.includes("datosvalidados.html")) {
    // Obtener los datos del localStorage
    const registrosGuardados = JSON.parse(localStorage.getItem("registros")) || [];

    if (registrosGuardados.length > 0) {
        // Obtener el contenedor de la tabla
        const tablaDatos = document.getElementById("tabla-datos");

        // Recorrer los registros y agregar cada uno a la tabla
        registrosGuardados.forEach((registro) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${registro.id}</td>
                <td>${registro.cedula}</td>
                <td>${registro.nombres}</td>
                <td>${registro.fechaNacimiento}</td>
                <td>${registro.ciudad}</td>
            `;
            tablaDatos.appendChild(row);
        });
    } else {
        alert("No se encontraron datos registrados.");
    }
}