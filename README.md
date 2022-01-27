![harrypotter-modulo--3](https://user-images.githubusercontent.com/93329410/151358969-d47a12a0-7548-4dc1-971b-0b0bd1b0bc84.jpg)


<h1>Buscador de personajes de Harry Potter</h1>

<h2>Para esta evaluación tenemos que hacer un buscador de personajes de Harry Potter, filtrar por casa y por nombre, además de añadir otros elementos que nombramos a continuación:</h2>

✨ 1. Lista de personajes filtrados por la casa a la que pertenecen. En cada uno (`<li>`) tiene que aparecer:
- Foto
- Nombre
- Especie

✨ 2. Imágenes

Reemplazar imágenes que no tienen nada por una por defecto.

 ✨ 3. Filtrado de personajes

Una vez tenemos el listado de personajes en pantalla, y filtrado por nombre, a continuación vamos a poder buscarlos por casa. Añadiendo un `<select>`, de forma que al seleccionar una casa, queden en la interfaz solo los personajes cuya casa es la seleccionada.

✨ 4. Componentes del listado de personajes

El listado debe tener los siguientes componentes:

- Componente para filtro de nombre
- Componente para el listado
- Componente para la tarjeta de cada personaje del listado
- Componente para el detalle de cada personaje

✨ 5. Detalle de personajes

Al hacer click sobre cada personaje, debe aparecer su información a pantalla completa. Para hacer esto usaremos rutas y React Router DOM. En la pantalla de detalle, aparecerá:

- Foto
- Nombre
- Casa
- Vivo o muerto
- Género
- Especie
- Nombres alternativos (si tiene)

✨ BONUS:
-  Si refescamos el navegador en el detalle de un personaje debe volver a mostrar el detalle del personaje.
-  Ordenar el listado de personajes alfabéticamente por nombre.
-  Añadir más filtros para filtrar, por ejemplo, por género.
-  Añadir un boton de reset para que la página vuelva a su listado principal.
-  En el caso de que el usuario navegue a una URL inexistente como por ejemplo http://localhost:3000/#/detail/12345 (el id 12345 no existe) debemos mostrar un mensaje
del tipo "El personaje que buscas no existe".
