import React from "react";

function RecipeList({ recipes, updateRecipe}) {

    const handleDelete =(indexToDelete, event)=>{
    event.preventDefault();
    updateRecipe(recipes.filter((_, index) => index !== indexToDelete));
    }

    const recipeList = recipes.map((recipe, index) => (
        <tr key={index}>
            <td>{recipe["name"]}</td>
            <td>{recipe["cuisine"]}</td>
            <td><img src={recipe["photo"]} alt={recipe["name"]} style={{ width: '100%', height: '100%', objectFit: 'scale-down' }} /></td>
            <td className="content_td"><p>{recipe["ingredients"]}</p></td>
            <td className="content_td"><p>{recipe["preparation"]}</p></td>
            <td><button type={"button"} name="delete" onClick={(event) => handleDelete(index, event)}>Delete</button></td>
        </tr>
    ));

    return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {recipeList}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
