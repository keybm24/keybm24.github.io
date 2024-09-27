// Inicializa el índice de la pregunta actual
let preguntaActualIndex = 0;


// Definición de preguntas y respuestas
const preguntas = [
    { //1
        pregunta: "¿Cuántos libros tiene la Biblia?",
        opciones: ["66", "47", "73", "86"],
        respuestaCorrecta: "66"
    },
    { //2
        pregunta: "Según Efesios 6, ¿Cuál es el escudo del cristiano?",
        opciones: ["La Biblia", "El amor", "La fe", "El hierro"],
        respuestaCorrecta: "La fe"
    },
    { //3
        pregunta: "¿Cuál es el primer libro de la Biblia?",
        opciones: ["Éxodo", "Génesis", "Deuteronomio", "Lucas"],
        respuestaCorrecta: "Génesis"
    },
    { //4
        pregunta: "¿Qué discípulo no quiso que Jesús le lavara los pies?",
        opciones: ["Juan", "Mateo", "Pablo", "Pedro"],
        respuestaCorrecta: "Pedro"
    },
    { //5
        pregunta: "Nombre de uno de los cuatro evangelios",
        opciones: ["Marcos", "Santiago", "Pedro", "Pablo"],
        respuestaCorrecta: "Marcos"
    },
    { //6
        pregunta: "¿Cuantos dias estuvo Jonas dentro del gran pez?",
        opciones: ["2 dias y 1 noche", "2 noches y 3 dias", "3 dias y 3 noches", "4 dias"],
        respuestaCorrecta: "3 dias y 3 noches"
    },
    { //7
        pregunta: "¿Cuál discípulo traiciona a Jesús?",
        opciones: ["Santiago", "Adán", "Juan", "Judas"],
        respuestaCorrecta: "Judas"
    },
    { //8
        pregunta: "¿Cuál es el principio de la sabiduria?",
        opciones: ["El conocimiento de Dios", "El temor al Señor", "Acumular riquezas y bienes", "Despreciar los consejos de los demás"],
        respuestaCorrecta: "El temor al Señor"
    },
    { //9
        pregunta: "¿Cuántos libros tiene el Nuevo Testamento?",
        opciones: ["27", "46", "26", "73"],
        respuestaCorrecta: "27"
    },
    { //10
        pregunta: "¿Cuántos años tenian Abraham y Sara cuando nacio su hijo Isaac?",
        opciones: ["Abraham 90 y Sara 70", "Abraham 90 y Sara 80", "Abraham 100 y Sara 90", "Ambos 80"],
        respuestaCorrecta: "Abraham 100 y Sara 90"
    },
    { //11
        pregunta: "¿Que significa Emanuel, el otro nombre con el que se conocio a Jesus?",
        opciones: ["Dios con nosotros", "El hijo de Dios", "El salvador del mundo", "Nuestro salvador"],
        respuestaCorrecta: "Dios con nosotros"
    },
    { //12
        pregunta: "Nombres de los 4 evangelistas",
        opciones: ["Mateo, Marcos, Lucas y Pedro", "Mateo, Lucas, Juan y Simón", "Mateo, Marcos, Lucas y Juan", "Mateo, Marcos, Judas y Pedro"],
        respuestaCorrecta: "Mateo, Marcos, Lucas y Juan"
    },
    { //13
        pregunta: "¿Que animal se comió a jonas?",
        opciones: ["Un gran pez", "Tiburon", "Caiman", "Ballena"],
        respuestaCorrecta: "Un gran pez"
    },
    { //14
        pregunta: "¿Cuantas epistolas de Pedro hay en la biblia?",
        opciones: ["2", "4", "1", "3"],
        respuestaCorrecta: "2"
    },
    { //15
        pregunta: "¿Quien escribio el libro de Apocalipsis?",
        opciones: ["Pablo de Tarso", "Moisés", "David", "Juan"],
        respuestaCorrecta: "Juan"
    },
    { //16
        pregunta: "¿Cuantos eran los discípulos de Jesús?",
        opciones: ["10", "12", "11", "14"],
        respuestaCorrecta: "12"
    },
    { //17
        pregunta: "Quien dijo 'Entonces respondí yo; Heme aquí, envíame a mí'",
        opciones: ["Jeremias", "Ezequiel", "Isaías", "Jose"],
        respuestaCorrecta: "Isaías"
    },
    { //18
        pregunta: "¿Quien sano a Saulo de la ceguera?",
        opciones: ["Pedro", "Ananías", "Juan", "Elías"],
        respuestaCorrecta: "Ananías"
    },
    { //19
        pregunta: "¿Cuál es el 8vo libro del antiguo testamento?",
        opciones: ["1º Samuel", "1º Reyes", "Rut", "Jueces"],
        respuestaCorrecta: "Rut"
    },
    { //20
        pregunta: "¿Cuántos libros tiene el Antiguo Testamento?",
        opciones: ["47", "39", "66", "73"],
        respuestaCorrecta: "39"
    },
    { //21
        pregunta: "¿Quien acompaño a Pablo en su primer viaje misionero?",
        opciones: ["Silas", "Timoteo", "Juan Marcos", "Bernabé"],
        respuestaCorrecta: "Bernabé"
    },
    { //22
        pregunta: "Segun 1reyes 4:32 ¿Quien compuso 3000 proverbios y 5000 cantares?",
        opciones: ["David", "Salomón ", "Salomón II", "Ezequías"],
        respuestaCorrecta: "27"
    },
    { //23
        pregunta: "¿Con que palabra acaba la Biblia?",
        opciones: ["Amén", "Fin", "Adiós", "Gracias"],
        respuestaCorrecta: "Amén"
    },
    { //24
        pregunta: "¿Quien fue el nombre que vivio mas años sobre la tierra?",
        opciones: ["Noé", "Adán", "Abraham", "Matusalén"],
        respuestaCorrecta: "27"
    },
];

// Variable para almacenar el botón seleccionado
let botonSeleccionado; 


// Función para mostrar la pregunta en el modal
function mostrarPregunta(indice) {
    preguntaActualIndex = indice - 1; // Ajustar el índice para que comience en 0
    const preguntaSeleccionada = preguntas[preguntaActualIndex];

    // Mostrar la pregunta
    document.getElementById("pregunta").innerText = preguntaSeleccionada.pregunta;

    // Mostrar las opciones de respuesta
    const botonesOpciones = document.querySelectorAll('.modal-body .btn-primary');
    botonesOpciones.forEach((btn, index) => {
        btn.innerText = preguntaSeleccionada.opciones[index];
        btn.onclick = () => seleccionarOpcion(preguntaSeleccionada.opciones[index], btn); // Asigna la opción seleccionada
        btn.classList.remove('btn-danger', 'btn-success'); // Asegúrate de que el botón esté habilitado y visible
    });

    // Limpia el mensaje de respuesta
    document.getElementById("mensajeRespuesta").innerText = "";

    // Cambiar el fondo del botón seleccionado a blanco
    const botones = document.querySelectorAll('.button1');
    botones.forEach(btn => {
        btn.classList.remove('button-selected'); // Quitar clase de todos los botones
    });

    botonSeleccionado = document.getElementById(`btn${indice}`);
    botonSeleccionado.classList.add('button-selected'); // Agregar clase al botón seleccionado

    // Muestra el modal de Bootstrap
    $('#preguntaModal').modal('show');
}



// Función para seleccionar una opción y verificar la respuesta
function seleccionarOpcion(opcionSeleccionada, botonSeleccionado) {
    const preguntaActual = preguntas[preguntaActualIndex];
    const respuestaCorrecta = preguntaActual.respuestaCorrecta;

    // Obtener todos los botones de respuesta
    const botonesOpciones = document.querySelectorAll('.modal-body .btn-primary');
    
    respuestaCorrectaSeleccionada = false;

    botonesOpciones.forEach(btn => {
        // Resaltar la opción seleccionada
        if (btn.innerText === opcionSeleccionada) {
            if (opcionSeleccionada === respuestaCorrecta) {
                btn.classList.add('btn-success'); // Cambiar a verde si es correcto
                respuestaCorrectaSeleccionada = true; // Marca que se ha seleccionado la correcta
            } else {
                btn.classList.add('btn-danger'); // Cambiar a rojo si es incorrecto
            }
        } else if (btn.innerText === respuestaCorrecta) {
            btn.classList.remove('btn-success'); // Asegúrate de que no esté resaltado
        }
    });
}

// Inicializa los puntajes de los equipos
let puntajeEquipo1 = 0;
let puntajeEquipo2 = 0;

// Función para sumar puntos
function sumarPuntos(equipo) {
    if (equipo === 'equipo1') {
        puntajeEquipo1 += 10; // Sumar 10 puntos al equipo 1
        document.getElementById("scoreTeam1").innerText = puntajeEquipo1; // Actualiza el puntaje en la interfaz
    } else if (equipo === 'equipo2') {
        puntajeEquipo2 += 10; // Sumar 10 puntos al equipo 2
        document.getElementById("scoreTeam2").innerText = puntajeEquipo2; // Actualiza el puntaje en la interfaz
    }

    // Cerrar el modal
    $('#preguntaModal').modal('hide');

    // Limpiar los botones de respuesta
    const botonesOpciones = document.querySelectorAll('.modal-body .btn-primary');
    botonesOpciones.forEach(btn => {
        btn.classList.remove('btn-success', 'btn-danger'); // Restablecer colores
    });

    botonSeleccionado = document.getElementById(`btn${indice}`);

    // Muestra el modal de Bootstrap
    $('#preguntaModal').modal('show');
}

// Cierra el modal y haz el botón transparente
$('#preguntaModal').on('hidden.bs.modal', function () {
    if (botonSeleccionado) {
        botonSeleccionado.style.opacity = '0.3'; // Hacer el botón transparente
    }
});