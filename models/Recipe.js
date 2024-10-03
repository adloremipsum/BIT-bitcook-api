import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  title: String,
  intro: String,
  times: {
    preparation: String,
    cooking: String,
    total: String,
  },
  image: String,
  instructions: [String],
  ingredients: [String],
  nutritional_values: {
    calories: String,
    carbohydrates: String,
    proteins: String,
    fats: String,
  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
