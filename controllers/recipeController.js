import Recipe from '../models/Recipe.js';

async function getAll(req, res) {
  const recipes = await Recipe.find();
  return res.json(recipes);
}

async function find(req, res) {
  const recipes = await Recipe.findById(req.params.id);
  return res.json(recipes);
}

async function create(req, res) {
  const newRecipe = await Recipe.create(req.body);
  return res.json(newRecipe);
}

export default { getAll, find, create };
