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
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d87e7230-06f9-4e70-bae1-838a7753d810/d7adzx5-6c81698c-68cd-4119-87aa-1039c7aa537e.png/v1/fill/w_791,h_1010,q_70,strp/clone_trooper_helmet_442nd_siege_battalion_by_historymaker1986_d7adzx5-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMwOCIsInBhdGgiOiIvZi9kODdlNzIzMC0wNmY5LTRlNzAtYmFlMS04MzhhNzc1M2Q4MTAvZDdhZHp4NS02YzgxNjk4Yy02OGNkLTQxMTktODdhYS0xMDM5YzdhYTUzN2UucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.qPuG81CWNzJ4hmf52ctanj2JJ2RR07sIzStGwP2v-6w",

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
