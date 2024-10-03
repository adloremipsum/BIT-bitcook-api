import 'dotenv/config';
import Recipe from '../models/Recipe.js';
import connectDB from '../config/mongoose.config.js';

connectDB();

async function recipeSeeder() {
  const theRecipes = [
    {
      title: 'Spaghetti Bolognese',
      intro: 'A classic Italian pasta dish with rich, savory flavors.',
      times: {
        preparation: '15 minutes',
        cooking: '45 minutes',
        total: '1 hour',
      },
      image:
        'https://plus.unsplash.com/premium_photo-1677000666761-ff476a65c8ba?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      instructions: [
        'Boil the pasta according to package instructions.',
        'In a pan, heat olive oil and sauté onions and garlic until softened.',
        'Add ground beef and cook until browned.',
        'Stir in tomato sauce, herbs, salt, and pepper. Simmer for 30 minutes.',
        'Serve the sauce over the pasta and garnish with Parmesan cheese.',
      ],
      ingredients: [
        '200g spaghetti',
        '400g ground beef',
        '1 onion, chopped',
        '2 garlic cloves, minced',
        '400g tomato sauce',
        'Salt and pepper',
        'Olive oil',
        'Parmesan cheese',
      ],
      nutritional_values: {
        calories: '500',
        carbohydrates: '60g',
        proteins: '25g',
        fats: '20g',
      },
    },
    {
      title: 'Chicken Caesar Salad',
      intro:
        'A refreshing salad with crispy lettuce, grilled chicken, and Caesar dressing.',
      times: {
        preparation: '10 minutes',
        cooking: '15 minutes',
        total: '25 minutes',
      },
      image:
        'https://images.unsplash.com/photo-1582034986517-30d163aa1da9?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      instructions: [
        'Grill the chicken breasts until fully cooked and slice.',
        'Toss the lettuce with Caesar dressing.',
        'Add croutons, Parmesan cheese, and sliced chicken on top.',
        'Season with black pepper and serve.',
      ],
      ingredients: [
        '2 chicken breasts',
        '1 head of romaine lettuce',
        'Caesar dressing',
        'Croutons',
        'Parmesan cheese',
        'Black pepper',
      ],
      nutritional_values: {
        calories: '350',
        carbohydrates: '15g',
        proteins: '30g',
        fats: '20g',
      },
    },
    {
      title: 'Vegetable Stir-Fry',
      intro: 'A quick and healthy vegetable stir-fry with a soy sauce glaze.',
      times: {
        preparation: '10 minutes',
        cooking: '10 minutes',
        total: '20 minutes',
      },
      image:
        'https://images.unsplash.com/photo-1464500650248-1a4b45debb9f?q=80&w=2598&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      instructions: [
        'Heat a pan with oil and sauté garlic.',
        'Add vegetables and stir-fry for 5-7 minutes.',
        'Stir in soy sauce, sesame oil, and a pinch of salt.',
        'Serve hot with rice or noodles.',
      ],
      ingredients: [
        '1 bell pepper, sliced',
        '1 carrot, sliced',
        '100g broccoli florets',
        '2 garlic cloves, minced',
        '2 tbsp soy sauce',
        '1 tbsp sesame oil',
        'Olive oil',
        'Salt',
      ],
      nutritional_values: {
        calories: '200',
        carbohydrates: '30g',
        proteins: '5g',
        fats: '10g',
      },
    },
    {
      title: 'Chocolate Chip Cookies',
      intro: 'Delicious homemade cookies with gooey chocolate chips.',
      times: {
        preparation: '15 minutes',
        cooking: '10 minutes',
        total: '25 minutes',
      },
      image:
        'https://images.unsplash.com/photo-1584847801423-852691e41bc7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      instructions: [
        'Preheat the oven to 180°C (350°F).',
        'Mix butter, sugar, and vanilla extract until smooth.',
        'Add eggs and stir in flour, baking soda, and chocolate chips.',
        'Drop spoonfuls of dough onto a baking sheet.',
        'Bake for 10 minutes until golden brown.',
      ],
      ingredients: [
        '200g butter',
        '150g sugar',
        '2 eggs',
        '1 tsp vanilla extract',
        '300g flour',
        '1 tsp baking soda',
        '200g chocolate chips',
      ],
      nutritional_values: {
        calories: '250',
        carbohydrates: '40g',
        proteins: '3g',
        fats: '12g',
      },
    },
    {
      title: 'Margarita Pizza',
      intro:
        'A simple yet delicious pizza with fresh tomatoes, mozzarella, and basil.',
      times: {
        preparation: '20 minutes',
        cooking: '15 minutes',
        total: '35 minutes',
      },
      image:
        'https://images.unsplash.com/photo-1669895616443-5d21d5acc6e0?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      instructions: [
        'Preheat the oven to 220°C (425°F).',
        'Roll out the pizza dough and place on a baking sheet.',
        'Spread tomato sauce over the dough.',
        'Top with mozzarella cheese and sliced tomatoes.',
        'Bake for 15 minutes until the crust is golden.',
        'Garnish with fresh basil leaves before serving.',
      ],
      ingredients: [
        'Pizza dough',
        '200g mozzarella cheese',
        '3 tomatoes, sliced',
        '100g tomato sauce',
        'Fresh basil leaves',
      ],
      nutritional_values: {
        calories: '400',
        carbohydrates: '50g',
        proteins: '15g',
        fats: '18g',
      },
    },
    {
      title: 'Avocado Toast',
      intro:
        'A simple and healthy breakfast option with creamy avocado and toasted bread.',
      times: {
        preparation: '5 minutes',
        cooking: '2 minutes',
        total: '7 minutes',
      },
      image:
        'https://images.unsplash.com/photo-1704545229893-4f1bb5ef16a1?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      instructions: [
        'Toast the bread until golden brown.',
        'Mash the avocado with lime juice, salt, and pepper.',
        'Spread the avocado mixture on the toasted bread.',
        'Top with optional ingredients like chili flakes or poached egg.',
      ],
      ingredients: [
        '2 slices of bread',
        '1 ripe avocado',
        '1 tsp lime juice',
        'Salt',
        'Pepper',
        'Chili flakes (optional)',
        'Poached egg (optional)',
      ],
      nutritional_values: {
        calories: '300',
        carbohydrates: '30g',
        proteins: '7g',
        fats: '20g',
      },
    },
  ];

  await Recipe.insertMany(theRecipes);

  console.log('[Seeder] Recipe created!');
  process.exit(1);
}

recipeSeeder();
