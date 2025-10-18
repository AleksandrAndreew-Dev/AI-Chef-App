import React from "react";

export default function Complex() {
  const [myFavourite, setMyFavourite] = React.useState([]);
  const allFavouriteThings = ["💌", "🍕", "🍗", "🍭", "🍺"];

  const thingsHTML = myFavourite.map((elem, index) => (
    elem && <p key={`${elem} + ${index}`}>
      {index + 1} {elem}
    </p>
  ));

  function addFavor() {
    setMyFavourite((prev) => [...prev,
      allFavouriteThings[prev.length]

    ]);
  }

  return (
    <main>
      <button onClick={addFavor}>Add item</button>
      <p>All: {myFavourite}</p>

      {thingsHTML? thingsHTML : "No items"}
    </main>
  );
}
