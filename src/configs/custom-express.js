import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { createConnection } from 'typeorm';

import router from '../routes';
import { databaseConfig } from './server-config';

const app = express();

app.use(cors());

app.use(rateLimit({
  windowMs: 5 * 60 * 1000, max: 200, // 5min, 200 requests
}));

app.use(router);

// Start TypeORM
(async () => {
  await createConnection(databaseConfig);
})();

export default app;
