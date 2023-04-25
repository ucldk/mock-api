import express from 'express';

export default (router) => {
  router.get('/status', (req, res) => res.status(200).end('OK'));
}
