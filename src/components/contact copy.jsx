import React from "react";

const emptyStar = "https://www.svgrepo.com/show/379262/star-empty.svg"

const filedStar = "https://www.svgrepo.com/show/243542/star.svg"



export default function Contact() {
  const [contactInfo, setContactInfo] = React.useState([
    { id: 1,
      avatar:
        "https://cdn3.iconfinder.com/data/icons/star-wars-color/205/clone-trooper-1024.png",

      firstName: "JH",
      lastName: "6598SO",
      phone: "+37545664684",
      email: "6598SO@gmail.com",
      isFavourite: false,
    },

    { id: 2,
      avatar:
        "url",

      firstName: "Tk",
      lastName: "12487EF",
      phone: "+37545664684",
      email: "12487EF@gmail.com",
      isFavourite: true,
    },
  ]);

  function toggleFavourite(id) {
    setContactInfo(prev => prev.map(contact => contact.id === id ? {...contact,
       isFavourite: !contact.isFavourite}: contact))
  }

  const infoHTMl = contactInfo.map((person) => (
    <article className="card" key={person.id}>
      <div className="title">
        <button className="btn-star"
        aria-pressed={person.isFavourite}
        aria-label={person.isFavourite ? "Remove from favourites": "Add to favourites"}
        onClick={() => toggleFavourite(person.id)}
        >
          <img src={person.isFavourite? filedStar : emptyStar} alt={person.isFavourite? "Filled star Icon": "Empty star icon"} />{!person.isFavourite? "Add to favourites": "Remove from favourites"}

        </button>

        <img src={person.avatar} alt="avatar" width="220px" />
      </div>
      <div className="body">
        <h3>
          {person.firstName} {person.lastName}
        </h3>
        <p>{person.phone}</p>
        <p>{person.email}</p>
      </div>
    </article>
  ));

  return <main className="card-container">{infoHTMl}</main>;
}
