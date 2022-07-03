require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbPort: process.env.DB_PORT,
  dbDatabase: process.env.DB_DATABASE,
  dbUrl: process.env.DATABASE_URL,
  nameCloudinary: process.env.CLOUDINARY_NAME,
  apiKeyCloudinary: process.env.API_KEY_CLOUDINARY,
  apiSecretCloudinary: process.env.API_SECRET_CLOUDINARY
}

module.exports = { config };