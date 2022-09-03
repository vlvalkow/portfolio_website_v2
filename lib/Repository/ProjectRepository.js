import projectDtos from "../../data/projects.json";

export default class ProjectRepository {
    findAll() {
        return projectDtos.sort((a,b) => a.order - b.order)
    }

    findByIri(iri) {
        const id = parseInt(iri.replace('/projects/', ''));

        return projectDtos.filter(p => p.id === id)[0]
    }

    findOther(slug) {
        return projectDtos.filter(p => p.slug !== slug)
    }
}
