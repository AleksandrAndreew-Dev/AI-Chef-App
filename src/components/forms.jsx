export default function Form() {
  return (
    <section className="form-block">
      <form action="/api/users/" id="my-form">
    <label htmlFor="first-name">First name:</label>
    <input id="first-name" type="text" name="firstName" />
    <label htmlFor="last-name">Last name:</label>
    <input id="last-name" type="text" name="lastName" />
    <input type="submit" value="Submit" />

    </form>
    </section>

  )
}
