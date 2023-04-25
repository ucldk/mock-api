'use strict';

import express from 'express';
import cors from 'cors';
import router from './router/index.js';
import { host, port } from './config.js';

import { initDatabase } from './services/db.js';

const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, host, () => {
  initDatabase();
  console.log(`Server listening on: http://${host}:${port}`);
});

app.use('/', router());
