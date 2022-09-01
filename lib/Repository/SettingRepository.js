import settingDTOs from "../../data/settings.json";

export default class SettingRepository {
    findAll() {
        return settingDTOs;
    }

}
