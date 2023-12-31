export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  timeZone: process.env.TIMEZONE || 'Europe/Zurich',
  hostUrl: process.env.HOST_URL || 'http://localhost:4200',
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    username: process.env.DATABASE_USER || 'admin',
    password: process.env.DATABASE_PASSWORD || '12345',
    name: process.env.DATABASE_NAME || 'ffxi-galaxy',
  },
});
