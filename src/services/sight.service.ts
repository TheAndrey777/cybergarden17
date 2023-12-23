import { Sight } from "../entities/Sight";

class SightService {
  async getSight(id: number) {
    await Sight.findOneOrFail({
      where: {
        id: id
      }
    });
  }
}

export default new SightService;