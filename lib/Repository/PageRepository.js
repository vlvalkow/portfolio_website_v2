import fs from 'fs'
import path from 'path'

export default class PageRepository {
    constructor() {
        this.pages = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "data/pages.json")));
    }
    findByType(type) {
        return this.pages.filter(p => p.type === type)
    }

    findBySlug(slug) {
        return this.pages.filter(p => p.slug === slug)[0]
    }
}
