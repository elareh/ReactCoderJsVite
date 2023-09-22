# Pokemon Store 
## Descripción

Sitio web realizado con React Vite. El alcance del proyecto es una tienda de cartas Pokemon en las que podemos filtrar entre cartas "Comunes" y "Especiales". Además podremos agregarlas a un carrito de compras para luego realizar el Checkout, antes llenando un formulario, el cual nos entregará un Order Id del pedido.


## Cómo levantar el proyecto 
Para levantar el proyecto se debe ejecutar los siguientes comandos:

    npm install
    npm start
    npm install bootstrap
    npm install prop-types
    npm install firebase

## Variables de Entorno
 Para el correcto funcionamiento, es necesario tener seteadas las variables de entorno en el archivo `.env`. 
Las variables son: 
 - `VITE_API_KEY`: la API key de Firebase. 
 - `VITE_AUTH_DOMAIN`: el dominio de autenticación de Firebase. 
 - `VITE_PROJECT_ID`: el ID del proyecto de Firebase.
 - `VITE_STORAGE_BUCKET`: el bucket de almacenamiento de Firebase. 
 - `VITE_MESSAGING_SENDER_ID`: el ID del sender de Firebase. 
 - `VITE_APP_ID`: el ID de la aplicación de Firebase. 
 
 
 ## Demo 
Pokemon Store Demo: https://youtu.be/O0DlKfEFvBo

 ## Componentes 
 ### Navbar
 
El navbar es un componente que integra lo siguiente:

- Logo empresarial
- Categorias de la web
- Componente CartWidget.jsx en donde se mostraran la cantidad de productos seleccionados y también se lo podrá seleccionar para ir a la pantalla de Checkout.

### Cart Widget

Componente de carrito en donde se mostrarán la cantidad de productos que se hayan seleccionado como asi también la posibilidad de al ser seleccionado redirigirnos a la pantalla de Checkout.

### Checkout

Componente que estructura la pantalla de Checkout. En esta pantalla tendremos un formulario para ser rellenado por el cliente, una vista previa de los productos seleccionados, la posibilidad de sumar o restar dichos productos y la opción de Finalizar Compra.

### Item Detail
Este componente forma la estructura de la vista detallada del producto cuando se selecciona el botón "Ver Mas".

### Item Detail Container
Es el container que soportará al componente "ItemDetail.jsx"

### Item List
Componente que listará los distintos productos en el front. Este mismo también realiza las acciones de filtrado cuando se selecciona algunas de las categorías en el Navbar.

### Item List Container
Componente que soportará al componente "ItemList.jsx"

### CartProvider

Componente que crea la funcionalidad de agregado o restado de productos seleccionados en el carrito. Este componente controla que no se resten mas productos de los que hay actualmente en el carrito.