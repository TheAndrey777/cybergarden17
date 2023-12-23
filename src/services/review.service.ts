import { Review } from "../entities/Review";
import { Sight } from "../entities/Sight";
import { User } from "../entities/User";

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
}

export default new ReviewService;