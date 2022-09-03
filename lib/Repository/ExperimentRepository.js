import fs from 'fs'
import path from 'path'

export default class ExperimentRepository {
    findAll() {
        const experiments = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "data/experiments.json")));

        return experiments
            .filter(ex => ex.published)
            .sort((a, b) => a.order - b.order)
            .map(ex => {
                const { order, published, ...experimentItemDto } = ex

                return experimentItemDto
            })
    }
}
