import React, { useState } from "react";

function RecipeCreate({ recipes, updateRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (event)=>{
    event.preventDefault();
    const newRecipe = {"name": name, "cuisine": cuisine, "photo": photo, "ingredients":ingredients, preparation: preparation};
    updateRecipe([...recipes, newRecipe]);
    setName(""); setCuisine(""); setPhoto(""); setIngredients(""); setPreparation("");
  }

  const table = <table>
    <thead>
    <tr>
      <th>Name</th>
      <th>Cuisine</th>
      <th>Photo</th>
      <th>Ingredients</th>
      <th>Preparation</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>
        <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </td>
      <td>
        <input name="cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)} />
      </td>
      <td>
        <input name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} />
      </td>
      <td>
        <textarea name="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
      </td>
      <td>
        <textarea name="preparation" value={preparation} onChange={(e) => setPreparation(e.target.value)} />
      </td>
      <td>
        <button type="submit">Create</button>
      </td>
    </tr>
    </tbody>
  </table>


  return (
    <form name="create" onSubmit={handleSubmit}>
      {table}
    </form>
  );
}

export default RecipeCreate;
