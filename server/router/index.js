import express from 'express';
import status from './status.js';
import api from './api.js';

const router = express.Router();

export default () => {
  status(router);
  api(router);
  return router;
};
