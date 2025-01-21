import "./CommentReviewStyles.css";

function CommentReviewData(props) {
  return (
    <>
      <div className="border-opa"></div>
      <div className="wrap-content-review-comment">
        <div className="img-avatar">
          <img src={props.image} alt="cardAvatar" />
        </div>
        <div className="wrap-content-text-review">
          <div className="heading-text-review">
            <h4>{props.review}</h4> | <p>{props.name}</p>
          </div>
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default CommentReviewData;
