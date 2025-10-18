export default function Star(props) {
  const emptyStar = "https://www.svgrepo.com/show/379262/star-empty.svg";

  const filedStar = "https://www.svgrepo.com/show/243542/star.svg";

  return (
    <div className="title">
      <button
      onClick={props.handleClick}
        className="btn-star"
        aria-pressed={props.isFilled}
        aria-label={
          props.isFilled ? "Remove from favourites" : "Add to favourites"
        }
      >
        <img
          src={props.isFilled ? filedStar : emptyStar}
          alt={props.isFilled ? "Filled star Icon" : "Empty star icon"}
        />
        {!props.isFilled ? "Add to favourites" : "Remove from favourites"}
      </button>

      <img src={props.avatar} alt="avatar" width="220px" />
    </div>
  );
}
