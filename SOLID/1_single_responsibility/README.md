# Single Responsibility Principle

Es un principio que dicta que cada clase debe ocuparse de **UNA** y **SOLO UNA** responsabilidad.

Así, si tiene motivos para cambiar será solo por una razón, se mantendrá aislado, fácil de cambiar y sin entorpecerse mucho por muchas funcionalidades en un solo lugar.

##  Ejemplos

Los ejemplos de esta carpeta muestran la clase `Journal` (diario, en español). Maneja entradas a un diario.

### Mal ejemplo

El ejemplo malo (`bad example.js`) muestra como manejar metodos para guardar/cargar desde el sistema operativo es mala idea, ya que no pertenece directamente al diario, pueden haber otras clases que necesiten guardar al SO y tendríamos que hacer doble trabajo.

### Buen ejemplo

El archivo `good_example.js` muestra cómo aislar las responsabilidades, haciendo que cada clase se ocupe solo de lo suyo y pudiendo escalarse más fácilmente.

Evitamos los "god object", que son objetos masivos que tienen montones de responsabilidades y terminan convirtiendose en código spaghetti, difícil de mantener.

## Separación de intereses

Concepto que trata sobre separar un sistema por sus responsabilidades. Facilita su manejo y refactorización.