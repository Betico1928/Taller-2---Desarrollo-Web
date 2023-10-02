# Taller-2---Desarrollo-Web

# Buscador de Usuarios en Angular
## Descripción
El Buscador de Usuarios es una aplicación Angular que se integra con una API externa para obtener y desplegar detalles de usuario basados en un criterio de búsqueda. Haciendo uso del módulo HttpClientModule de Angular, el proyecto gestiona solicitudes HTTP asincrónicas, aprovechando la librería RxJS para la programación reactiva, permitiendo una mejor manipulación y gestión de flujos de datos.


## Índice

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Uso](#instalación-y-uso)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)


## Características

1. **HttpClientModule**: Utilizado para realizar peticiones HTTP a la API. Proporciona una interfaz para gestionar solicitudes y respuestas HTTP.

2. **Integración con API Externa**: La aplicación se comunica con una API (https://dummyjson.com/) que provee detalles de usuario, posts asociados y comentarios. Esta API devuelve datos en formato JSON que la aplicación procesa y muestra.

3. **Programación Reactiva con RxJS**: Todas las llamadas a la API se manejan de manera reactiva usando observables de RxJS, permitiendo una mejor gestión de eventos asincrónicos y flujos de datos.

4. **Manejo de Errores**: En caso de una respuesta inesperada de la API o un error, se muestra un modal (muy elegante) al usuario con información pertinente sobre el problema.

5. **Componentes y Modularidad**: La aplicación sigue la arquitectura de Angular, dividiendo la funcionalidad en componentes modulares y reutilizables.

6. **Estilización CSS**: Estilos personalizados y animaciones para mejorar la experiencia del usuario, con un enfoque en la responsividad y adaptabilidad.

7. **Búsqueda de Usuarios**: Introduce un nombre de usuario para obtener información detallada.
  
8. **Visualización de Posts**: Muestra los posts asociados a un usuario específico.
   
9. **Mostrar Comentarios**: Permite ver los comentarios relacionados con un post específico.

   

## Tecnologías Utilizadas

- **Angular**: Framework principal para el desarrollo frontend.
- **RxJS**: Biblioteca utilizada para programación reactiva en JavaScript, especialmente para manejar llamadas HTTP.
- **HttpClientModule**: Módulo de Angular que facilita las llamadas HTTP a APIs y servicios web.
- **CSS**: Estilización personalizada y adaptativa para la aplicación.


## Instalación y Uso

1. Clona el repositorio:
```
git clone https://github.com/Betico1928/Taller-2---Desarrollo-Web
```
2. Navega al directorio del proyecto y instala las dependencias:
```
cd Taller-2---Desarrollo-Web
npm install
```
3. Ejecuta el servidor de desarrollo:
```
ng serve
```
4. Abre un navegador y visita `http://localhost:4200/`.


## Capturas de Pantalla

<img width="3008" alt="Screenshot 2023-10-01 at 23 11 49" src="https://github.com/Betico1928/Taller-2---Desarrollo-Web/assets/29442839/2ff7f1c3-ddf5-4720-b825-87f30e397eab">

<img width="1177" alt="Screenshot 2023-10-01 at 23 12 12" src="https://github.com/Betico1928/Taller-2---Desarrollo-Web/assets/29442839/3e987637-2a79-4649-9660-0230af6a05df">

<img width="1168" alt="Screenshot 2023-10-01 at 23 12 49" src="https://github.com/Betico1928/Taller-2---Desarrollo-Web/assets/29442839/fdd150f1-252e-4c94-9c8d-04a86ef5f624">

<img width="1336" alt="Screenshot 2023-10-01 at 23 13 01" src="https://github.com/Betico1928/Taller-2---Desarrollo-Web/assets/29442839/0b665a59-999c-4ebd-ad7b-79427c6b740e">

## Documentación Adicional

- [Angular](https://angular.io/docs)
- [RxJS](https://rxjs.dev/guide/overview)
- [HttpClientModule](https://angular.io/guide/http)


## Licencia

[MIT](https://choosealicense.com/licenses/mit/)
