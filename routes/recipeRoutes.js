import recipeController from '../controllers/recipeController.js';
import express from 'express';
const router = express.Router();

router.get('/api/recipes', recipeController.getAll);
router.get('/api/recipes/:id', recipeController.find);
router.post('/api/recipes', recipeController.create);

export default router;
