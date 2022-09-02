const express = require('express');
const router = express.Router();
const {
  authenticate,
  authenticateSchema,
  create,
  createSchema,
  getAll,
  getById,
  update,
  updateSchema,
  _delete,
} = require('../controllers/users.controller');

module.exports = router;

const publicPath = '/';

// routes

router.get(`${publicPath}`, getAll);
router.get(`${publicPath}:id`, getById);
router.post(`${publicPath}signup`, createSchema, create);
router.post(`${publicPath}login`, authenticateSchema, authenticate);
router.put(`${publicPath}:id`, updateSchema, update);
router.delete(`${publicPath}:id`, _delete);
