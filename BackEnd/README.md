# Despliegue Back-End:

Para hacer el despliegue del backend necesitaras tener instalado MySql Workbench y tener el entorno de JAVA correctamente configurado junto con Maven a continuacion 
se presentan tutoriales para estas configuraciones:

**Instala y crea BD en MySql Workbench:**

[Link al Video de MySql Workbench](https://www.youtube.com/watch?v=eDh6-71O12s)

**Instala Maven:**

[Link al Video de Maven](https://www.youtube.com/watch?v=snp1dTlJxqw)

**Configura las variables de entorno JDK - JAVA**

[Link al Video de configuracion JAVA](https://www.youtube.com/watch?v=qF4k830JxXo)

partiendo de esto se mostraran las configuraciones 

# Configurar proyecto para despliegue


## Configurar WorkBench 

Para esto debemos crear un DB con cualquier nombre debemos tenerlo presente para la siguiente configuracion

![BD](https://res.cloudinary.com/df8qzqymf/image/upload/v1638549200/Captura7_ti9v2m.png)

![BD](https://res.cloudinary.com/df8qzqymf/image/upload/v1638549202/Captura8_dsry4e.png)

al crear la BD debemos confirmar la ruta de la DB en la que este y tener muy presente el nombre de la DB

## Configurar las aplication properties

nos ubicamos en el file **application.proppierties** ubicado en:

![configuracion](https://res.cloudinary.com/df8qzqymf/image/upload/v1638549723/Captura5_vcyvbu.png)

agregamos la ruta donde este nuestra BD y ademas agregamos el nombre de la BD, debemos tambien colocar la
contraseña de acceso y el nombre del user con los privilegios de root

![configuracion](https://res.cloudinary.com/df8qzqymf/image/upload/v1638549602/InkedCaptura6_LI_atde5w.jpg)

# Ejecucion del servidor


## Ejecutar linea de comando en un CMD dentro de la carpeta ./BackEnd

### `mvnw.cmd spring-boot:run`

![code](https://res.cloudinary.com/df8qzqymf/image/upload/v1638550418/Captura3_x1crrq.png)

ejecutara scripts y mostrara el puerto donde estara almacenada la API-REST **(por default localHost:8080)**

![code](https://res.cloudinary.com/df8qzqymf/image/upload/v1638550578/Captura4_kjrulp.png)
