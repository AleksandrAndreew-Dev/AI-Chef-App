import React, { useEffect } from "react";

import { useState } from "react";
import InredientsOnHand from "./ingredients";
import Recipe from "./recipe";
import { getRecipeFromMistral } from "../js/ai";

export default function Main() {
  const [newIngredient, setNewIngredient] = useState([
    // "Eggs",
    // "Cheese",
    // "Mushrooms",
    // "Chicken",
  ]);

  const [recipe, setRecipe] = useState("");

  const recipeSection = React.useRef(null);
  console.log(recipeSection);

  useEffect(() => {
    if (recipe && recipeSection.current) {
      recipeSection.current.scrollIntoView({behavior: "smooth"});
    }
  }, [recipe]);

  async function getRecipe() {
    const recipeIdeaMD = await getRecipeFromMistral(newIngredient);
    setRecipe(recipeIdeaMD);
  }

  const newIngredienthtml = newIngredient.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  function addIngredient(formData) {
    const newingredientfromForm = formData.get("ingredient");

    {
      newingredientfromForm
        ? setNewIngredient((prev) => [...prev, ` ${newingredientfromForm} `])
        : alert("No ingredient");
    }
  }

  return (
    <main>
      <form className="add-ingredient-form" action={addIngredient}>
        <input
          className="input-ingred"
          aria-label="Add ingredient"
          type="text"
          name="ingredient"
          placeholder="e.g. oregano"
        />
        <button type="submit" className="btn-add-ingredient">
          Add Ingredient
        </button>
      </form>

      {newIngredient.length > 0 && (
        <>
          <InredientsOnHand
            ref={recipeSection}
            key="ingredientsonhand"
            ingredients={newIngredient}
            getRecipe={getRecipe}
          />
          {recipe && <Recipe key="recipe" recipe={recipe} />}
        </>
      )}
    </main>
  );
}
