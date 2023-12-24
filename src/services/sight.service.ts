import { Sight } from "../entities/Sight";

class SightService {
  async getAllSights() {
    return await Sight.find();
  }

  async findSight(query: any) {
    return await Sight.find({
      where: query
    });
  }

  async getSight(id: number) {
    return await Sight.findOne({
      where: {
        id: id
      }
    });
  }

  async createSight(sight: any) {
    return await Sight.save(Sight.create(sight));
  }
}

export default new SightService;