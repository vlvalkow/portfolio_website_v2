import fs from 'fs'
import path from 'path'

export default class StageRepository {
    findAll() {
        const stages = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "data/stages.json")));

        return stages
    }
}
