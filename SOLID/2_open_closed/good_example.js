let Color = Object.freeze({
    red: 'red',
    green: 'green',
    blue: 'blue'
})

let Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large'
})

class Product {
    constructor (name, color, size) {
        this.name = name
        this.color = color
        this.size = size
    }
}

/** construyendo especificaciones para filtrar/hacer algo y que quede reutilizable
 * Podrías pensar que es excesivo, pero el construir esto implica que cada filtro está
 * SEPARADO y NO DEPENDE de los otros :D
 * 
 * Lo que significa que si necesitas una nueva NO MODIFICAS NINGUNA CLASE EXISTENTE
 * A que mola, eh?
*/
class ColorSpecification {
    constructor (color) {
        this.color = color
    }

    isSatisfied (item) {
        return this.color === item.color
    }
}

class SizeSpecification {
    constructor (size) {
        this.size = size
    }

    isSatisfied (item) {
        return this.size === item.size
    }
}

// Filtro para usar las especificaciones
class ItemFilter {
    filter (items, specification) {
        return items.filter(x => specification.isSatisfied(x))
    }
}

/**Usando un combinador para combinar varias especificaciones
 *  AL MISMO TIEMPO
 *  Así como creamos una AndSpecification podemos hacer una Or, o para
 *  lo que sea. Eso son los 'Combinators'
 */
class AndSpecification {
    constructor (...specs) {
        this.specs = specs
    }

    isSatisfied (item) {
        return this.specs.every(x => x.isSatisfied(item))
    }
}

// Definimos una especificación y el filtro
let f = new ItemFilter()
let spec_green = new ColorSpecification(Color.green)

// Definimos algo que pueda USAR VARIAS especificaciones al mismo tiempo
let a_spec = new AndSpecification(
    spec_green,
    new SizeSpecification(Size.large)
)

let apple = new Product('apple', Color.green, Size.small)
let tree = new Product('Tree', Color.green, Size.large)
let house = new Product('House', Color.blue, Size.large)

let products = [apple, tree, house]

// Una sola especificacion
console.log("Green products:")
for (let p of f.filter(products, spec_green))
    console.log(` * ${p.name} is green`)

console.log('-------------------')

console.log('Green and Large products:')
for(let p of f.filter(products, a_spec))
    console.log(` * ${p.name} is GREEN and LARGE`)