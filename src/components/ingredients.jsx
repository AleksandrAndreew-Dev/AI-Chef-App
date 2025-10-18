
export default function InredientsOnHand(props) {
  return (
    <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-ul">{props.ingredients}</ul>



        <div className="container">
          <div ref={props.ref}>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from you list of ingredients</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
        </section>
  )
}


