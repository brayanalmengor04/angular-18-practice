# Angular Problema1
# To-Do List en Angular
![Problema 1 -Angular To-do-List](/img/problema1-angular.png)
Este proyecto es una aplicación de lista de tareas (To-Do List) desarrollada en Angular. A continuación, se documentan los pasos realizados para la creación de la misma.

## 1. Generación del Servicio

El primer paso fue generar un servicio utilizando Angular CLI. Este servicio maneja la lógica relacionada con las tareas, como agregar, eliminar y actualizar tareas.

### Comando utilizado:
ng generate service tarea 


Este comando generó un archivo `tarea.service.ts`, donde se encapsuló toda la lógica de la aplicación. El servicio fue inyectado en la raíz de la aplicación (`providedIn: 'root'`), permitiendo que pueda ser utilizado en cualquier parte del proyecto.

### Métodos implementados en el servicio:

- **`obtenerTareas()`**: Devuelve el arreglo de tareas que se almacena de manera privada en el servicio.
  
- **`agregarTarea(tarea: string)`**: Añade una nueva tarea al arreglo de tareas.

- **`eliminarTarea(index: number)`**: Elimina una tarea del arreglo con base en su índice.

- **`actualizarTarea(index: number, nuevaTarea: string)`**: Actualiza una tarea existente en el arreglo, sustituyéndola por una nueva tarea.

## 2. Creación del Componente Principal

El componente principal de la aplicación (`AppComponent`) fue diseñado para interactuar con el `TareaService`, permitiendo al usuario gestionar las tareas a través de la interfaz de usuario.

### Inicialización del Componente:

- **Inyección del servicio**: Se inyectó el servicio `TareaService` dentro del componente para acceder a los métodos de manejo de tareas.
  
- **Método `ngOnInit()`**: Durante la inicialización del componente, se obtuvieron las tareas almacenadas en el servicio mediante el método `obtenerTareas()`.

### Funcionalidad Implementada:

- **Agregar Tarea**: Se añadió un método `agregarTarea()` que permite agregar nuevas tareas a la lista, verificando que no esté vacía antes de agregarla al servicio.

- **Eliminar Tarea**: El método `eliminarTarea()` permite eliminar una tarea específica utilizando su índice en la lista.

- **Actualizar Tarea**: Se añadió la funcionalidad de actualización mediante el método `actualizarTarea()`, el cual utiliza un `prompt` para capturar la nueva versión de la tarea seleccionada.

## 3. Estructura HTML y Enlace de Datos

La interfaz de usuario fue construida utilizando el lenguaje de plantillas de Angular. Se utilizó `ngModel` para enlazar la nueva tarea ingresada en el formulario con el componente y `ngFor` para iterar sobre las tareas existentes y mostrarlas en la lista.

### Elementos Clave:

- **Formulario**: Se creó un formulario simple que contiene un `input` para ingresar la nueva tarea y un botón para agregarla.

- **Lista de Tareas**: La lista de tareas fue generada dinámicamente utilizando `*ngFor`. Cada tarea tiene opciones para ser actualizada o eliminada, utilizando su índice para identificarla en el arreglo.

## 4. Estilización

Se aplicaron estilos CSS al formulario y a la lista de tareas para mejorar la presentación de la aplicación, asegurando una interfaz limpia y funcional. Se utilizaron clases personalizadas para botones y elementos de la lista.

## 5. Importaciones Necesarias

Para habilitar el uso de formularios en Angular, se incluyó el módulo `FormsModule` en la configuración del componente. Esto permitió utilizar la directiva `ngModel` para el enlace de datos bidireccional.

```typescript
imports: [FormsModule]
 
