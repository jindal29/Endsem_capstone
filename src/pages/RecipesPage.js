// RecipesPage.js
import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import "./RecipesPage.css";

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://api.spoonacular.com/recipes/random?number=10&apiKey=4f1dda6a286040d29fc0535f653bbca7&includeNutrition=true"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched data:", data); // ✅ Debugging help

        if (data.recipes && Array.isArray(data.recipes)) {
          setRecipes(data.recipes);
        } else {
          setError("No recipes found. Please check your API key or limits.");
        }
      } catch (err) {
        console.error("Fetch error:", err); // ✅ Debug log
        setError("Failed to load recipes. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Featured Recipes</h1>
      {loading && <p>Loading recipes...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="recipes-grid">
        {recipes.length > 0 &&
          recipes.map((recipe, index) => (
            <RecipeCard key={recipe.id || index} recipe={recipe} index={index} />
          ))}
      </div>
    </div>
  );
}
