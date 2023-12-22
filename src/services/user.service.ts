import { User } from "../entities/User";

class UserService {
  async findUser(query: any) : Promise<User | null> {
    const existsUser = await User.findOne({
      where: {
        ...query
      }
    });

    return existsUser;
  }

  async updateOrCreateUser(user: any) : Promise<any> {
    const existsUser = await this.findUser({
      email: user.email,
      provider: user.provider
    });

    if (existsUser) {
      const updatedUser = {
        ...existsUser,
        username: user.username,
      }
  
      await User.update({ email: user.email, provider: user.provider }, updatedUser)
      return { id: existsUser.id };
    }

    return await User.save(User.create(user));
  }

  async createUser(user: any) {
    return await User.save(User.create(user));
  }
}

export default new UserService;