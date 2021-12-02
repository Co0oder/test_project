require('dotenv').config();

const { env } = process;

const config = {
  db: {
    host: env.DB_HOST || 'localhost',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'co0oder',
    password: env.DB_PASSWORD || 'V1qidES5k3DSJICDRgXtyT8qeu2SPCZp',
    database: env.DB_NAME || 'shop',
  },
  port: env.APP_PORT,
};

module.exports = config;
