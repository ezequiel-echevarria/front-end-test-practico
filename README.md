# Test Práctico - Frontend

Bienvenido al test práctico para aspirantes al área de front-end de Mercado Libre.
A continuación presentamos el diseño y la descripción funcional de una pequeña aplicación que será la
base del trabajo que deberás desarrollar.

La aplicación consta de tres componentes principales: la caja de búsqueda, la visualización de
resultados, y la descripción del detalle del producto.
Tenés que usar el siguiente stack tecnológico para construir la aplicación:

* Cliente:
* HTML
* JS (Deseable utilizar React o Backbone)
* CSS (Deseable utilizar Sass)
* Servidor:
* Node >= 6
* Express

Para resolverlo, te pedimos que tengas en cuenta:
* Usabilidad
* SEO
* Performance
* Escalabilidad

Las vistas son navegables de manera independiente y cuentan con su propia url:
* Caja de Búsqueda: "/"
* Resultados de la búsqueda: "/items?search="
* Detalle del producto: "/items/:id"


Construir los siguientes endpoints para ser utilizados desde las vistas:

* /api/items?q=:query
* /api/items/:id


# Ejecución 

```
git clone https://github.com/ezequiel-echevarria/front-end-test-practico.git
cd front-end-test-practico
cd .\client\
npm install
npm run build
cd ..\server
npm install
npm run start
```

# Url
http://localhost:3001




