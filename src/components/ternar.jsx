import React from "react";

export default function TernarComponent() {
  const [isGoingOut, setIsGoingOut] = React.useState(false);

  function handleFlipvalue() {
    setIsGoingOut((prev) => !prev);
  };

  function visibility(visible) {

      return (visible? <h1 id="title" className="title"> "The title is True"</h1> : null)
      };


  return (
    <section className="visible">
        {visibility(isGoingOut)}

      <button
        className="value"
        aria-label={`Current answer is: ${isGoingOut ? 'Yes' : 'No'}. Click to change it`}
        onClick={handleFlipvalue}
      >
        {isGoingOut ? "yes, Its a good Idea" : "Oh, no..."}
      </button>
    </section>
  );
}

