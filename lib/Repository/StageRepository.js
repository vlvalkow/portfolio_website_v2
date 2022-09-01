import stageDTOs from "../../data/stages.json";

export default class StageRepository {
    findAll() {
        return stageDTOs;
    }
}
