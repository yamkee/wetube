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

passport.serializeUser(function(user, done) {
  done(null, user.id);
  // if you use Model.id as your idAttribute maybe you'd want
  // done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
