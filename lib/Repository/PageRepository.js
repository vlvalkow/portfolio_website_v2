import pageDtos from "../../data/pages.json";

export default class PageRepository {
    findByType(type) {
        return pageDtos.filter(p => p.type === type)
    }

    findBySlug(slug) {
       return pageDtos.filter(p => p.slug === slug)[0]
    }
}
