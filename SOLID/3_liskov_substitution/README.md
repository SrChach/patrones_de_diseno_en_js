# Liskov Substitution Principle

Este principio dicta que: **si una función toma como argumento una clase padre/base (de la que otras heredan), debería ser perfectamente capaz de tomar clases que heredan de él como argumento, sin romper la funcionalidad.**

La idea es que, a veces, puedes meter alguna clase hija que ROMPA algunas funcionalidades

## Mal ejemplo

En el archivo `bad_example.js` se aborda un ejemplo (forzado) con rectangulos y cuadrados. De alguna forma, al pasar por una función un rectángulo y un cuadrado, éste último no funciona correctamente, cuando debería hacerlo, por un error de construcción.

En esta ocasión no hay buen ejemplo, solo el malo, para enseñar cómo se podría presentar el problema. Si, si se puede arreglar, pero no valía la pena hacerlo.

**Comentario**

Qué hay de malo en la idea de `bad_example.js`? Pues básicamente definir un cuadrado aparte, en vez de ponerlo como un caso especial de rectángulo es el error aquí.
