import express from 'express';
import {
  allTasks,
  completedTasks,
  pendingTasks,
  createTask,
} from '../services/tasks.js';

const router = express.Router();

export default (router) => {
  router.get('/tasks', async (req, res) => res.status(200).json(await allTasks()));
  router.get('/tasks/completed', async (req, res) => res.status(200).json(await completedTasks()));
  router.get('/tasks/pending', async (req, res) => res.status(200).json(await pendingTasks()));
  router.post('/tasks', async (req, res) => {
    try {
      const entry = await createTask(req.body);
      res.status(201).json({ id: entry.insertId, ...req.body });
    } catch(error) {
      console.error(error.message, error);
      return res.status(400).json(error.message);
    }
  });
};
