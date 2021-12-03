# PokeAPP:

![Despliegue](https://res.cloudinary.com/df8qzqymf/image/upload/v1638511632/Captura1_ikocxr.png)

## Descripcion:

Se realizo una aplicacion de pokemoncon el fin de registrarse, iniciar sesion y coleccionar pokemones
podemos verificar los pokemones que tenemos almacenados, los pokemones se generan al azar si se toma
un pokemone tiene una probabilidad para atraparlo, si el storage o pokedex tiene 6 pokemones no podra
atrapar mas a menos que liberemos uno o mas pokemones.

Se crearon roles de usuario, de momento solo dos, que pueden ser escalables

- El perfil Admin o maestro:
  Tiene acceso al CRUD de usuarios, puede cambiar parametros de todos los usuarios y a su vez puede
  eliminar usuarios.
  
- El perfil user o entrenador:
  Solo puede indagar en la funcionalidad del CRUD de pokemones, esto podria ser escalable a acceder
  a su CRUD en cuanto a editar ciertos parametros (imagen, nombre, etc).


### Perspectiva Back-end

El backend se centro en realizar una API-Rest de consumo a traves de una BD relacional, usando MySql
y spring-boot.

### Perspectiva Front-end

El frontend se centro en el consumo de esta API, se crearon las UI y UX usando React y Redux para el
manejo de los estados globales y consumo de la API-Rest, tambien se validaron rutas privadas.

## Despliegue CRUD Usuarios:

https://res.cloudinary.com/df8qzqymf/image/upload/v1638510560/CRUDUserPet_u3fhlv.gif

## Despliegue mini-CRUD Pokemones:

https://res.cloudinary.com/df8qzqymf/image/upload/v1638510574/CRUDPokemonPet_en82hy.gif

## Despliegue rutas privadas:

https://res.cloudinary.com/df8qzqymf/image/upload/v1638510585/RutasPet_wyollk.gif

## Imagenes:

![Despliegue](https://res.cloudinary.com/df8qzqymf/image/upload/v1638511633/Captura2_yw0est.png)

![Despliegue](https://res.cloudinary.com/df8qzqymf/image/upload/v1638511633/Captura3_qjv4lr.png)

![Despliegue](https://res.cloudinary.com/df8qzqymf/image/upload/v1638511634/Captura4_hl0ku6.png)

![Despliegue](https://res.cloudinary.com/df8qzqymf/image/upload/v1638511633/Captura5_zltdrz.png)

![Despliegue](https://res.cloudinary.com/df8qzqymf/image/upload/v1638511634/Captura7_kon5gm.png)

![Despliegue](https://res.cloudinary.com/df8qzqymf/image/upload/v1638511633/Captura8_ql3eus.png)

![Despliegue](https://res.cloudinary.com/df8qzqymf/image/upload/v1638511633/Captura9_culfkm.png)
