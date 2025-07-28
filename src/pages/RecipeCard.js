import { useState } from 'react';
import React from 'react';
import './RecipeCard.css';

function RecipeCard({ recipe, addToMealPlan }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => setShowDetails(!showDetails);
  const handleAddToMealPlan = () => addToMealPlan && addToMealPlan(recipe);

  const image = React.createElement('img', {
    src: recipe.image,
    alt: recipe.title,
    className: 'recipe-image'
  });

  const title = React.createElement('h3', { className: 'recipe-title' }, recipe.title);

  const calories = React.createElement(
    'div',
    { className: 'recipe-calories' },
    '🔥 ',
    recipe.nutrition?.calories || recipe.calories || 'N/A',
    ' kcal'
  );

  const time = React.createElement(
    'div',
    { className: 'recipe-time' },
    '⏱️ ',
    recipe.readyInMinutes || '30',
    ' min'
  );

  const meta = React.createElement('div', { className: 'recipe-meta' }, calories, time);

  const descriptionText = showDetails
    ? React.createElement('p', {
        dangerouslySetInnerHTML: {
          __html: recipe.summary?.substring(0, 150) + '...' || 'No description available'
        }
      })
    : React.createElement('p', null, `${recipe.title} - A delicious and nutritious meal option.`);

  const nutrientList = showDetails
    ? React.createElement('ul', { className: 'nutrient-list' }, [
        React.createElement('li', {}, `Protein: ${recipe.nutrition?.nutrients.find(n => n.name === 'Protein')?.amount || 'N/A'}g`),
        React.createElement('li', {}, `Carbs: ${recipe.nutrition?.nutrients.find(n => n.name === 'Carbohydrates')?.amount || 'N/A'}g`),
        React.createElement('li', {}, `Fat: ${recipe.nutrition?.nutrients.find(n => n.name === 'Fat')?.amount || 'N/A'}g`)
      ])
    : null;

  const detailsButton = React.createElement(
    'button',
    {
      onClick: handleToggleDetails,
      className: 'btn btn-secondary btn-full'
    },
    showDetails ? 'Show Less' : 'Show More'
  );

  const addToMealPlanBtn = addToMealPlan
    ? React.createElement(
        'button',
        {
          onClick: handleAddToMealPlan,
          className: 'btn btn-primary btn-full'
        },
        'Add to Meal Plan'
      )
    : null;

  const recipeContent = React.createElement(
    'div',
    { className: 'recipe-content' },
    title,
    meta,
    React.createElement('div', { className: 'recipe-description' }, descriptionText),
    showDetails &&
      React.createElement('h4', { className: 'nutrient-heading' }, 'Nutrients:'),
    showDetails && nutrientList,
    detailsButton,
    addToMealPlanBtn
  );

  return React.createElement('div', { className: 'recipe-card' }, image, recipeContent);
}

export default RecipeCard;
