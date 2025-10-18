export default function ReactForm() {
  function signUp(formData) {

    const data = Object.fromEntries(formData)
    const dietaryData = formData.getAll('diet')
 const allData = {
    ...data,
    dietaryRestrictions: dietaryData,
 }



    // const email = formData.get("email");
    // const firstName = formData.get("firstName");
    // const password = formData.get("password");
    // const comments = formData.get("comments");
    // const status = formData.get("employmentStatus");
    // const diet = formData.getAll("diet");
    // const color = formData.get("colors");
    // // const data = Object.fromEntries(formData.entries())
     console.log('---------------')
    getInfo(allData );
    console.log('---------------')
      //  getInfo({allData} );


    // const email = formData.get('email')
    // const firstName = formData.get('firstName')
    // const password = formData.get('password')
    // getInfo({email, firstName, password});

    function getInfo(data) {
      const info = JSON.stringify(data);
      console.log(info);
    }
  }

  return (
    <section className="form-box">
      <h3>Signup form</h3>
      <form
        // onSubmit={handleSubmit}
        action={signUp}
        className="react-form"
      >
        <label>
          Email:
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john@gmail.com"
            defaultValue="Alisa@gmail.com"
          />
        </label>

        <label>
          First name:
          <input
            type="text"
            name="firstName"
            id="first-name"
            defaultValue="Alisa"
          />
        </label>
        <label htmlFor="password">Enter Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          defaultValue="Secret"
        />
        <label htmlFor="textarea">Comments:</label>
        <textarea
          name="comments"
          id="textarea"
          cols="20"
          rows="5"
          defaultValue="Description"
        ></textarea>
        <fieldset>
          <legend>Employment Status:</legend>
          <label >
            <input
              type="radio"
              name="employmentStatus"
              value="junior"
              defaultChecked="true"
            />
            Junior
          </label>
          <label >
            <input type="radio" name="employmentStatus" value="middle" />
            Middle
          </label>
          <label >
            <input type="radio" name="employmentStatus" value="senior" />
            Senior
          </label>
        </fieldset>
        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label >
            <input type="checkbox" name="diet" value="eggs" />
            Eggs
          </label>
          <label >
            <input type="checkbox" name="diet" value="milk" />
            Milk
          </label>
          <label >
            <input
              type="checkbox"
              defaultChecked="true"
              name="diet"
              value="cheese"
            />
            Cheese
          </label>
        </fieldset>

        <label htmlFor="colors">What is your favourite color?</label>
        <select name="colors" id="colors" required>
          <option value="" disabled={true}>-- Choose a color</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>

        <button id="btn-submit">Submit Click</button>
      </form>
    </section>
  );
}
