import { Review } from "../entities/Review";
import { Sight } from "../entities/Sight";
import { dataSource } from "../data/data.source";

class ReviewService {
  async findReview(sightId: number, userId: number) {
    return await Review.findOne({
      where: {
        creator: { id: userId },
        sight: { id: sightId }
      }
    });
  }

  async createReview(review: any) {
    return await Review.save(Review.create(review));
  }

  async getAverageRating(sight: Sight) {
    const repo = await dataSource.getRepository(Review);
    const average = await repo.sum("grade", { sight: { id: sight.id } });
    const cnt = await repo.count({ where: { sight: { id: sight.id } } });
    return [average, cnt];
  }
}

export default new ReviewService;