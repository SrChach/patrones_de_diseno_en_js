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

class ProductFilter {
    filterByColor (products, color) {
        return products.filter(p => p.color === color)
    }

    /** Aqui empieza el código malo
     * Una vez que testeamos y hacemos deploy al filtro de arriba, 
     * esto NO debería modificarse aquí, sino extenderse y modificarse. 
    */
    filterBySize (products, size) {
        return products.filter(p => p.size === size)
    }

    filterBySizeAndColor (products, size, color) {
        return products.filter(p => p.size === size && p.color === color)
    }

    /** Al añadir más se produce el `Space State Explosion`
     *      Que significa que esto no trabajará hasta el infinito, y si se añaden más
     *      funcionalidades acá, el código quedará completamente ilegible/largo
     * 
     *      Si en vez de 'size' y 'color' tuviéramos 3 criterios, dan
     *          7 posibles métodos....
     */
}

let apple = new Product('apple', Color.green, Size.small)
let tree = new Product('Tree', Color.green, Size.large)
let house = new Product('House', Color.blue, Size.large)

let products = [apple, tree, house]

let pf = new ProductFilter()
console.log("Green products:")

for (let p of pf.filterByColor(products, Color.green))
    console.log(` * ${p.name} is green`)