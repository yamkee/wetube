import passport from "passport";
import GitHubStrategy from "passport-github";
import routes from "./routes";
import User from "./models/User";
import { gitHubLoginCallback } from "./controllers/userController";

passport.use(User.createStrategy());

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`
    },
    gitHubLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
