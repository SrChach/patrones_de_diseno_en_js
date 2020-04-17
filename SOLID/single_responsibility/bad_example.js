const fs = require ('fs')

class Journal {

    static count = 0

    constructor () {
        this.entries = {}
    }

    addEntry (text) {
        let c = ++Journal.count
        let entry = `${c}: ${text}`
        this.entries[c] = entry
        return c;
    }

    removeEntry (index) {
        delete this.entries[index]
    }

    toString () {
        return Object.values(this.entries).join('\n')
    }

    /* Funcionalidades que rompen el principio "single responsibility"
    *   Por que el código tiene más de una funcionalidad
    */
    save (filename) {
        fs.writeFileSync(filename, this.toString())
    }

    load (filename) {
        // código ejemplo
    }

    loadFromUrl (url) {
        // código ejemplo
    }

}

let j = new Journal()
j.addEntry('I cried today.')
j.addEntry('I ate a bug today.')
console.log(j.toString())