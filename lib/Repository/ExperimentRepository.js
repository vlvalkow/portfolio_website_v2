import experimentDtos from "../../data/experiments.json";

export default class ExperimentRepository {
    findPublished() {
        return experimentDtos
            .filter(ex => ex.published)
            .sort((a, b) => a.order - b.order)
    }
}
