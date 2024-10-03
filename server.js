import 'dotenv/config';
import connectDB from './config/mongoose.config.js';
import express from 'express';
import recipeRoutes from './routes/recipeRoutes.js';
const app = express();

connectDB();
app.use(express.json());

app.use(recipeRoutes);

app.listen(3000, () => {
  console.log('[Server] Server running!');
});
