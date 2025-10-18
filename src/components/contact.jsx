import React from "react";
import Star from "./star";

export default function Contact() {
  const [contactInfo, setContactInfo] = React.useState({
    avatar:
      "https://cdn3.iconfinder.com/data/icons/star-wars-color/205/clone-trooper-1024.png",
    firstName: "JH",
    lastName: "6598SO",
    phone: "+37545664684",
    email: "6598SO@gmail.com",
    isFavourite: true,
  });

  function toggleFavourite() {
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      isFavourite: !prevInfo.isFavourite,
    }));
  }

  const infoHTMl = (
    <article className="card">
      <Star
        isFilled={contactInfo.isFavourite}
        avatar={contactInfo.avatar}
        handleClick={toggleFavourite}
      />

      <div className="body">
        <h3>
          {contactInfo.firstName} {contactInfo.lastName}
        </h3>
        <p>{contactInfo.phone}</p>
        <p>{contactInfo.email}</p>
      </div>
    </article>
  );

  return <main className="card-container">{infoHTMl}</main>;
}
