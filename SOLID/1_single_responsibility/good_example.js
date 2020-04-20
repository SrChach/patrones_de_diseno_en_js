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

}

class PersistenceManager {
    saveToFile (filename, text) {
        fs.writeFileSync(filename, text)
    }
}

let j = new Journal()
j.addEntry('I cried today.')
j.addEntry('I ate a bug today.')
console.log(j.toString())

let p = new PersistenceManager()
let filename = '/home/srchach/Escritorio/projects/design-patterns/journey.txt'
p.saveToFile(filename, j.toString())