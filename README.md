# CARLOS-YANEZ_TECNOLOGIAS-WEB
1. SE EXPLICARA DE FORMA DETALLADA  LA ACCION QUE TIENE CADA PAGINA Y LA FUNCIONALIDAD DE CADA UNA.


---------------PAGINA PRINCIPAL---------


# Página Principal - Gestión y Control de Datos

 A continuación describimos brevemente cómo funciona y cómo está estructurado la seccion principal.


- **index.html**: Este archivo contiene el código HTML para la página principal.
- **estilo principal.css**: Archivo de hojas de estilo que controla la apariencia visual de la página web (aún no incluido, pero se menciona en el HTML).
  

### Encabezado (`<header>`)

- Dentro del encabezado, se incluye un **navegador de enlaces** (`<nav>`), que contiene una lista (`<ul>`) con enlaces a diferentes secciones de la página:
  - **Sección Principal**: Enlace a la página "Pagina Principal.html".
  - **Inicio**: Enlace a la página "Inicio.html".
  - **Funcionalidades Lógicas**: Enlace a la página "funcionalidades.html".
  - **Registro**: Enlace a la página "registro.html".

### Cuerpo Principal (`<main>`)

- La sección principal contiene un bloque de bienvenida (`<section id="bienvenida">`) con un título `<h1>` y un párrafo `<p>`, donde se describe el propósito de la página: gestionar y supervisar los activos de datos dentro de una organización, asegurando que los datos sean precisos, coherentes, accesibles y seguros.

### Pie de Página (`<footer>`)

- El pie de página contiene una pequeña nota de copyright: `&copy; GESTION Y MANEJO DE DATOS`.

## Funcionamiento

El archivo HTML está diseñado para ofrecer una navegación sencilla entre las diferentes secciones del proyecto, y su contenido central describe de manera clara el tema de la página.

Para ver la página en acción, se debe abrir el archivo `index.html` en nuestro navegador web.

## Personalización

Si se  personaliza el diseño o la funcionalidad de la página,se edita el archivo `estilo principal.css` para cambiar la apariencia visual o agrega nuevas secciones y enlaces al archivo HTML según sea necesario.



2. YA ESTABLECIDA LA ESTRUCTURA QUE MANEJAREMOS PARA LA PAGINA PRINCIPAL DICHA ESTRUCTURA PARA EL MENU SE CONSERVARA 
LA DIFERENCIA RADICARA EN LAS DIFERENTES CONFIGURACIONES QUE VAMOS A REALIZAR POR CADA PAGINA.



----------------PAGINA DE INICIO--------------



CONSERVAREMOS LA MISA ESTRUCTURA PARA LA PAGINA DE INICIO **Inicio.html** 

Vamos a definir principales aspectos que se configuran


### Cuerpo Principal (`<main>`)

- La sección principal contiene un bloque de información del estudiante (`<section id="datos-personales">`) con un título `<h1>` y un bloque de información en formato de párrafos (`<div class="info">`), donde se presentan los siguientes datos:
  - **Nombre**: CARLOS RAMIRO YANEZ YAZAN
  - **Correo**: Ramiro3456_@outlook.com
  - **Curso**: Aplicación de Tecnologías Web

### Pie de Página (`<footer>`)

- El pie de página contiene una pequeña nota de copyright: `&copy; GESTION Y MANEJO DE DATOS`.

## Funcionamiento

El archivo HTML está diseñado para mostrar los datos personales de un estudiante y se busco  incluir una navegación para acceder a otras secciones del proyecto. 
La información está organizada en un formato simple para fácil visualización.

COMO MENCIONAMOS EL MENU CONLLEVARA LA MISMA ESTRUCTURA Y SERA DE FACIL NAVEGACION PARA DESPLAZARNOS POR CUALQUIER OPCION 



----------------PAGINA DE FUNCIONALIDADES LOGICAS-------------------



3. CONSERVAREMOS LA MISMA ESTRUCTURA PARA LA PAGINA DE **funcionalidades.html**  LA DIFERENCIA RADICARA EN LA EXPLICACION DE LAS CONFIGURACIONES PARA ESTRUCTURAS IF,SWITCH Y ARRAYS

### Encabezado (`<header>`)

- Dentro del encabezado, se incluye un **navegador de enlaces** (`<nav>`), que contiene una lista (`<ul>`) con enlaces a diferentes secciones de la página:
  - **Sección Principal**: Enlace a la página "Pagina Principal.html".
  - **Inicio**: Enlace a la página "Inicio.html".
  - **Funcionalidades Lógicas**: Enlace a la página "funcionalidades.html".
  - **Registro**: Enlace a la página "registro.html".

### Cuerpo Principal (`<main>`)

La sección principal contiene tres secciones que nos permitiran interactuar con diferentes funcionalidades lógicas:

1. **Estructura `if`**: 
   - Título: "Comparación de Números (if)".
   - Campos de entrada para ingresar dos números (`numero1` y `numero2`).
   - Botón para comparar los números.
   - Un `<div>` donde se mostrará el resultado de la comparación.

2. **Estructura `switch`**:
   - Título: "Meses del Año (switch)".
   - Campo de entrada para ingresar un número entre 1 y 12.
   - Botón para mostrar el nombre del mes correspondiente al número ingresado.

3. **Gestión de Arrays**:
   - Título: "Lista de Nombres".
   - Campo de entrada para agregar un nombre a una lista.
   - Botón para agregar el nombre a un array.
   - Un `<div>` que mostrará la lista de nombres agregados.

### Pie de Página (`<footer>`)

- El pie de página contiene una pequeña nota de copyright: `&copy; GESTION Y MANEJO DE DATOS`.

## Funcionamiento

Como se explico de las estrcuturas a usar
está diseñado para demostrar tres funcionalidades lógicas utilizando JavaScript:

1. Comparación de dos números con la estructura `if`.
2. Determinación del mes del año con la estructura `switch`.
3. Gestión de una lista de nombres con arrays.

Las funcionalidades interactivas se lograron a través del formulario de entrada y  botones que  ejecutan funciones definidas en el archivo **script.js**. Los resultados de las interacciones se muestran dinámicamente en la misma página.
------------NOTA-------

- El archivo `script.js` debe estar presente para que las funcionalidades lógicas funcionen correctamente.
Dicho archivo lo explicaremos mas despues.


----------------PAGINA DE REGISTRO--------------------------



4. AHORA PARA LA PAGINA DE REGISTROS  CONSERVAREMOS LA MISMA ESTRUCUTURA CON LA DIFERENCIA DE CAMBIOS EN CIERTAS CONFIGURACIONES QUE SE EXPLICARAN PARA EL REGISTRO DE LOS DATOS

### Cuerpo Principal (`<main>`)

La página principal contiene un título y un formulario de registro con los siguientes campos:

- **ID**: Campo de entrada de texto para que el usuario ingrese su identificación.
- **Cédula de Identidad**: Campo de entrada de texto para que el usuario ingrese su cédula de identidad.
- **Nombres y Apellidos**: Campo de entrada de texto para que el usuario ingrese su nombre completo.
- **Fecha de Nacimiento**: Campo de entrada de tipo fecha para que el usuario seleccione su fecha de nacimiento.
- **Ciudad de Procedencia**: Desplegable (`<select>`) que permite seleccionar la ciudad de procedencia del usuario. Las opciones incluyen Quito, Guayaquil, Cuenca, Manta y Ambato.
- **Botón de Registro**: Un botón para enviar el formulario y registrar los datos proporcionados.

### Pie de Página (`<footer>`)

- El pie de página no está presente en este archivo HTML, pero el formulario tiene un botón para registrar los datos del usuario.

### Funcionalidades del Formulario

El formulario nos  incluye validaciones básicas que requieren que el usuario complete todos los campos antes de enviarlo. El formulario está diseñado para abrirse en una nueva ventana (`target="_blank"`) cuando se envíe.

### Archivos CSS

- **estilo principal.css**: Este archivo controla la apariencia global de la página.
- **Formulario.css**: Estiliza específicamente el formulario de registro, aunque el archivo de estilo no se detalla en este `README.md`.

### Archivos JavaScript

El archivo **script.js** se menciona en el HTML, y contiene funciones adicionales como  el manejo de la interacción del formulario.

## Funcionamiento

Nos  permite que  los usuarios se registran al completar un formulario.
 Los campos incluyen información básica como ID, cédula, nombres, fecha de nacimiento y ciudad de procedencia.

Cuando se  hace clic en el botón "Registrar", el formulario se envía, y si todo está completado correctamente, los datos del formulario pueden procesarse o enviarse a través de un script de JavaScript


5. POR ULTIMO PARA LA PAGINA DE DATOS VALIDADOS ESTABLECEREMOS DE LA MISMA FORMA LA ESTRUCTURA CON CIERTAS CONFIGURACIONES



------------------PAGINA DE DATOS VALIDADOS-----------------

### Encabezado (`<header>`)

- Dentro del encabezado, se incluye un **navegador de enlaces** (`<nav>`), que contiene una lista (`<ul>`) con enlaces a diferentes secciones de la página:
  - **Sección Principal**: Enlace a la página "Pagina Principal.html".
  - **Inicio**: Enlace a la página "inicio.html".
  - **Funcionalidades Lógicas**: Enlace a la página "funcionalidades.html".
  - **Registro**: Enlace a la página "registro.html".

### Cuerpo Principal (`<main>`)

La página principal contiene una sección con el siguiente contenido:

- **Título**: "Datos Registrados".
- **Tabla**: La tabla muestra los datos de los usuarios registrados. Tiene las siguientes columnas:
  - **ID**: El identificador del usuario.
  - **Cédula de Identidad**: El número de cédula del usuario.
  - **Nombres y Apellidos**: El nombre completo del usuario.
  - **Fecha de Nacimiento**: La fecha de nacimiento del usuario.
  - **Ciudad de Procedencia**: La ciudad de procedencia del usuario.
  
  Los datos de la tabla se insertarán dinámicamente a través de JavaScript en el `<tbody id="tabla-datos">`.

### Pie de Página (`<footer>`)

- El pie de página contiene una pequeña nota de copyright: `&copy; GESTION Y MANEJO DE DATOS`.

### Archivos CSS

- **estilo principal.css**: Este archivo controla la apariencia global de la página.
- **datos.css**: Estiliza específicamente la sección de datos registrados.
### Archivos JavaScript

El archivo **script.js** se menciona en el HTML, y  contiene las funciones necesarias para insertar los datos en la tabla. Los datos  proviene del  formulario de registro.

## Funcionamiento

El archivo  está diseñado para mostrar una tabla de datos registrados. Inicialmente, la tabla estará vacía, pero los datos serán insertados dinámicamente a través de JavaScript. Este archivo está pensado para ser una página de consulta de los datos registrados previamente, posiblemente después de un proceso de registro de usuario.

 

 6. COMO HEMOS VISTO SE HA HABLADO DE FORMA ESPECIFICA CADA PARTE DEL CODIGO QUE HEMOS USADO PERO SI SE HACE BASTANTE REFERENCIA EN PAGINAS COMO FUNCIONALIDAD HTML Y DATOS VALIDADOS EL USO DE UN JAVA SCRIPT PARA OTORGA ACCIONES A LOS FORMULARIOS DE REGISTRO DE Y DE LOGICA.

 CABE RECALCAR QUE PARA EL SIGUIENTE JAVA SCRIPT SE USO LA MAYOR PARTE ARROW FUNCTIONS.




-------------ARCHIVO JAVA SCRIPT-----------------------


### 1. Comparación de Números (Función `compararNumeros`)

La función **compararNumeros** compara dos números ingresados por el usuario en campos de entrada (`input`). 
- Los números se obtienen utilizando `document.getElementById` y se convierten en enteros con `parseInt`.
- Si el primer número es mayor que el segundo, muestra un mensaje indicando que el primer número es mayor.
- Si el segundo número es mayor, muestra un mensaje indicando lo mismo para el segundo número.
- Si los dos números son iguales, muestra un mensaje que indica que ambos son iguales.

### 2. Mostrar Mes (Función `mostrarMes`)

La función **mostrarMes** utiliza una estructura de control `switch` para mostrar el nombre del mes correspondiente al número ingresado por el usuario:
- El usuario ingresa un número entre 1 y 12 (representando los meses del año).
- La función muestra el nombre del mes en una ventana de alerta (`alert`).
- Si el número ingresado no está entre 1 y 12, muestra un mensaje de error indicando que el número es inválido.

### 3. Gestión de una Lista de Nombres (Función `agregarNombre`)

La función **agregarNombre** permite al usuario agregar un nombre a una lista:
- El nombre ingresado por el usuario se agrega a un array llamado `nombresArray`.
- La lista de nombres se muestra en un contenedor HTML con el `id="nombres"`, usando el método `innerHTML` para actualizar la página con los nuevos nombres.

### 4. Manejo del Formulario de Registro (Formulario de `registroForm`)

La función de registro permite a los usuarios ingresar sus datos personales en un formulario, y esos datos se guardan en el **localStorage** del navegador:
- Cuando el formulario de registro se envía, los datos del formulario (ID, cédula, nombres, fecha de nacimiento y ciudad) se almacenan en un objeto.
- Los datos se agregan a un arreglo en el `localStorage` bajo la clave "registros".
- Después de guardar los datos, se abre una nueva ventana con la página `datosvalidados.html`, donde se mostrarán los datos registrados.

### 5. Mostrar Datos Registrados (Página `datosvalidados.html`)

Cuando se visita la página `datosvalidados.html`, la función siguiente muestra los registros almacenados en el `localStorage`:
- Si hay datos almacenados, se recuperan y se muestran en una tabla HTML en la página.
- Cada registro se agrega a la tabla como una nueva fila, con los valores de ID, cédula, nombres, fecha de nacimiento y ciudad.
- Si no se encuentran registros, se muestra un mensaje de alerta indicando que no hay datos registrados.



