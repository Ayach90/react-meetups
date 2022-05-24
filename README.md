# React Meetups

## Project

Project to manage meetups. You can view all meetups, select some meetups as favorites and view a list of favorites meetups and add new meetups.

## Dependencies / Libraries

Forms: react-hook-form
Styles: styled-components
Navigation: react-router-dom@6
Head: react-helmet

## Testing

Jest + Enzyme
Some basic unit tests in order to have basic tests for each component.

## Run project

1.- Clone project
2.- npm i
3.- npm start
4.- http://localhost:3000

## TODO

When we have the backend, we will have to create the endpoint to add new Meetup.

## Exercises

1.- Para el header se requiere una animación para tener un acceso rápido a las distintas páginas cuando hacemos scroll. Se quiere que cuando hacemos scroll down, este tiene que desaparecer y cuando hacemos scroll up tiene que volver a aparecer en la posición de la página dónde te encuentres.

R: I've solved it with useScrollDirection hook.

2.- Desde el header se puede navegar a las distintas páginas, pero por temas de SEO se requiere que esta navegación se vea reflejada en la url. (Ejemplo: la página de favoritos podría ser /favorites)

R: I've used react-router-dom@6 in order to create a route per page.

3.- El botón de añadir a favoritos no está funcionando. Implementa la lógica para añadir y quitar de favoritos.

R: I've created a context in order to have the favorite items in all components. We need this information in MainNavigation (Badge number), in FavoritesPage and in AllMeetupsPage. In AllMeetupsPage, we change the button depending of each item depending on if this item is favorite or not.

4.- Implementación de algún test. Puede ser e2e, unitario o funcional. En el proyecto encontrarás algunos test
que el programador que inició el proyecto, empezó a hacer.

R: I've created some basic test with jest + enzyme in order to have a basic test in each component.

Bonus:

-Styled Components: I have moved all styles to styled components. With it we can write styles in a nested way and we can re-use this styles in other components.

-Form: I have converted the simple form of add new meetup with react-hook-form library.

-Architecture of files: I've created a folder for each component that it have more one file.

-404: I've created a 404 page

-Head: I've added head information (title, description) for each page and a new Favicon.

-Loader: I've put a loader animation while the list of all meetups is loading.
