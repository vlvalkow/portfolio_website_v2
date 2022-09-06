import fs from 'fs'
import path from 'path'

export default class ProjectRepository {
    constructor() {
        this.projects = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "data/projects.json")));
    }
    findAll() {
        return this.projects.sort((a, b) => a.order - b.order)
    }

    findByIri(iri) {
        const id = parseInt(iri.replace('/projects/', ''))

        return this.projects.filter(p => p.id === id)[0]
    }

    findOther(slug) {
        return this.projects.filter(p => p.slug !== slug)
    }
}
