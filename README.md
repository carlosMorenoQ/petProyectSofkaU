# PokeAPP:

## Descripcion:

Se realizo una aplicacion de pokemon, el fin es registrarse, iniciar secion y coleccionar pokemones
podemos verificar los pokemones que tenemos almacenados, los pokemones se generan al azar y a la vez
tienen una probabilidad para atraparlos, si ademas mi storage o pokedex tiene 6 pokemones no podremos
atrapar mas, a menos que liberemos algun pokemon.

Tambien se crearon roles de usuario, de momento solo dos, que pueden ser escalables

- El perfil Admin o maestro:
  Tiene acceso al CRUD de usuarios, puede cambiar parametros de todos los usuarios y a su vez puede
  eliminar usuarios.
  
- El perfil user o entrenador:
  Solo puede indagar en la funcionalidad del CRUD de pokemones, esto podria ser escalable a acceder
  a su CRUD en cuanto a editar ciertos parametros (imagen, nombre, etc).


### Perspectiva Back-end

El backend se centro en realizar una API-Rest de consumo a traves de una BD relacional, usando MySql
y spring-boot.

### Perspectiva Back-end

El frontend se centro en el consumo de esta API, se crearon las UI y UX usando React y Redux para el
manejo de los estados globales y consumo de la API-Rest tambien se validaron rutas privadas.

##Despliegue CRUD Usuarios:

![Alt Text](https://res.cloudinary.com/df8qzqymf/image/upload/v1638510560/CRUDUserPet_u3fhlv.gif)

##Despliegue mini-CRUD Pokemones:

![Alt Text](https://res.cloudinary.com/df8qzqymf/image/upload/v1638510574/CRUDPokemonPet_en82hy.gif)

##Despliegue rutas privadas:

![Alt Text](https://res.cloudinary.com/df8qzqymf/image/upload/v1638510585/RutasPet_wyollk.gif)
