# Despliegue Front-End:
Para hacer el despliegue del front-end debemos tener instalado Node.JS o yarn a continuacion se presentan enlaces a tutoriales de instalacion:

**Instala node.JS:**

[Link al Video de node](https://www.youtube.com/watch?v=_DQP6UxKEn8)

**Instala yarn:**

[Link al Video de yarn](https://www.youtube.com/watch?v=E-ko1U2l-k4)

# Ejecucion del servidor de desarrollo (despliegue de la pagina)


## Ejecutar linea de comando en un CMD dentro de la carpeta ./FrontEnd/pokeapp

* Con NPM (NodeJS):

### `npm install`

* Con YARN:

### `yarn add`

![code](https://res.cloudinary.com/df8qzqymf/image/upload/v1638551459/Captura1_iqcfrp.png)

Esta linea ya sea con NPM o YARN recorreran el **package.json** e instalara todas las dependencias que se encuentren alli enlistadas

![json](https://res.cloudinary.com/df8qzqymf/image/upload/v1638551414/Captura10_gfpbp8.png)

Debemos luego ejecutar el npm start o yarn start para montar el server de desarrollo

* Con NPM (NodeJS):

### `npm start`

* Con YARN:

### `yarn start`

si se realiza con exito mostrara el puerto donde se desplegara el servidor de desarrollo **(por default localHost:3000)**

![code](https://res.cloudinary.com/df8qzqymf/image/upload/v1638551695/Captura2_t8yyb3.png)

se debe realizar el despliegue en el localHost:3000 ya que el crossOrigin de los controladores del Back-End estan configurados con esa ruta

