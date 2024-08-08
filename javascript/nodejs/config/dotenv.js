const dotenv = require("dotenv");

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

module.exports = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DATABASE_URL,
  secretKey: process.env.SECRET_KEY,
};
