import passport from "passport";
import passportVk from "passport-vkontakte";
import userService from "../services/user.service";
import * as dotenv from "dotenv";

dotenv.config();

const VKStrategy = passportVk.Strategy;

passport.use(
  new VKStrategy(
    {
      clientID: process.env.VK_CLIENT_ID as string,
      clientSecret: process.env.VK_CLIENT_SECRET as string,
      callbackURL: process.env.VK_REDIRECT as string,
    },
    async (accessToken: any, refreshToken: any, profile: any, done: any) => {
      const user = {
        username: profile.displayName as string,
        email: profile.emails[0].value as string,
        provider: profile.provider,
        id: 0
      };

      const result = await userService.updateOrCreateUser(user);
      user.id = result.id;
      done(null, user);
    }
  )
);