
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

module.exports = (sequelize) => {
  return session({
    secret: "secret-key",
    store: new SequelizeStore({
      db: sequelize,
      table: "Sessions",
      extendDefaultFields: (defaults, session) => {
        return {
          data: defaults.data,
          expires: defaults.expires,
          userID: session.userID
        }
      }
    }),
    resave: false,
    proxy: true,
    checkExpirationInterval: 15 * 60 * 1000, // 15 minutes
    expiration: 1 * 60 * 60 * 1000 // 1 hour
  });
}
