require("dotenv").config();

const { MONGO_URI, PORT, SECRET_KEY, SECRET_IV, ENCRYPTION_METHOD } =
  process.env;

if (!SECRET_KEY || !SECRET_IV || !ENCRYPTION_METHOD) {
  throw new Error(
    "Missing required env variable: SECRET_KEY, SECRET_IV, or ENCRYPTION_METHOD"
  );
}

module.exports = {
  secret_key: SECRET_KEY,
  secret_iv: SECRET_IV,
  encryption_method: ENCRYPTION_METHOD,
};
