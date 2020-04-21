## 2. Open-Closed Principle

Dicta que los objetos deben estar *"Abiertos para su extensión, pero cerrados para su modificación"*. 

Pero bien, qué significa esto?

### Modificación

Es modificar una parte del código que podría ya estar testeada, o en producción. Es malo hacerlo por que pueden haber cosas que dependan de él, por lo que un cambio puede traer *resultados inesperados*, quebrando funcionalidades ya establecidas.

### Extensión

Típicamente, significa *herencia*. Heredando de una clase padre, traer funcionalidad de ella y automáticamente adquirir algunas de sus funciones, propiedades... y añadir más código.