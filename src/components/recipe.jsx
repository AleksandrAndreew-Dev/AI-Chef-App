import Markdown from "react-markdown"

export default function Recipe(props) {

  const markdown = props.recipe;
  return (
<section aria-live="polite">

        <h2>Chef Claude Recommends:</h2>
        <Markdown>{markdown}</Markdown>

      </section>
  )
}



