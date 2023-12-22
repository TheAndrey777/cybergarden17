import passport from "passport";
import passportJwt from "passport-jwt";
import * as dotenv from "dotenv";

dotenv.config();

const JwtStrategy = passportJwt.Strategy;

const cookieExtractor = (req: Request) => {
  if (req && (req as any).cookies) {
    return (req as any).cookies["auth"];
  }
  return null;
}

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor as any,
      secretOrKey: process.env.JWT_SECRET,
    },
    (jwtToken, done) => {
      done(null, jwtToken);
    }
  )
);