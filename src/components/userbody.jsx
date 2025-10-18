export default function UserBody(props) {
  return (


    <section>
      <h3>Hello {props.userName}</h3>

      <p>Mr. {props.userName} проснулся в 7.00</p>
      <p>Дорогой {props.userName}, где ты был?  </p>
    </section>
  )
}
