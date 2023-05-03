import { query } from './db.js';

export const allTasks = async () => await query('SELECT * FROM tasks');
export const completedTasks = async () => await query('SELECT * FROM tasks WHERE completed = 1');
export const pendingTasks = async () => await query('SELECT * FROM tasks WHERE completed = 0');
export const createTask = async (task) => await query(`INSERT INTO tasks (title, completed) VALUES (${task.title? `"${task.title}"` : null}, "${task.completed || 0}")`);
export const updateTask = async (task) => await query(`UPDATE tasks SET title = ${task.title? `"${task.title}"` : null}, completed = completed = ${task.completed} WHERE id = ${task.id}`);
