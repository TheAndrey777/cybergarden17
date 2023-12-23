import passport from "passport";
import passportGoogle from "passport-google-oauth20";
import userService from "../services/user.service";
import * as dotenv from "dotenv";

dotenv.config();

const GoogleStrategy = passportGoogle.Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: process.env.GOOGLE_REDIRECT,
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = {
        username: profile._json.name as string,
        email: profile._json.email as string,
        provider: profile.provider,
        id: 0,
        admin: false
      };
      
      const result = await userService.updateOrCreateUser(user);
      user.id = result.id;
      done(null, user);
    }
  )
);

passport.serializeUser((user: Express.User, done) => {
    done(null, user);
});

passport.deserializeUser((user: Express.User, done) => {
    done(null, user);
});