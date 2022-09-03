import fs from 'fs'
import path from 'path'

export default class SettingRepository {
    findAll() {
        const settings = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "data/settings.json")));

        return settings
    }
}
