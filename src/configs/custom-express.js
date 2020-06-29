import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

import router from '../routes';

const app = express();

app.use(cors());
app.use(rateLimit({
  windowMs: 5 * 60 * 1000, max: 200, // 5min, 200 requests
}));
app.use(router);

export default app;
