document.addEventListener("DOMContentLoaded",
function(event){

  let ingredientForm = document.getElementById('recipe-form')
  ingredientForm.addEventListener('submit', addIngredientWithState)

  const myPantry = [];

  function addIngredientWithState(e) {
    e.preventDefault()
    myIngredient = {}
    myIngredient.name = document.getElementById('ingredient-name').value
    myPantry.push(myIngredient)
    myIngredient.id = myPantry.indexOf(myIngredient)
    console.log(myIngredient.id)
    document.getElementById('ingredient-name').value = ""
    let myLi = myPantry.map((ingredient, id, pantry) => `<li id=${id}>${ingredient.name}</li> <button onClick=pantry.filter((ingredient, index) => index !== ${id} )>delete</button>`).join('')
    const myUL = document.getElementById('pantry')
    myUL.innerHTML = myLi
  };




})
