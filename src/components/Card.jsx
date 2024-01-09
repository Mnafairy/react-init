import "../styles/card.css";
const Card = (props) => {
  console.log("props:", props);
  const cardData = props.news;
  // console.log("props news:", props.news);
  return (
    // <div>
    //   <p>{data.title}</p>
    //   <img src={data.img} alt="" />
    //   <div>
    //     {data.map((e) => (
    //       <>
    //         <p>{e.title}</p>
    //         <img src={e.img} />
    //       </>
    //     ))}
    //   </div>
    // </div>
    <div className="card">
      <div className="card-img">
        <span>
          Унших<i className="fa-solid fa-arrow-right"></i>
        </span>
      </div>
      <p>{cardData.title}</p>
      <div className="comment-box">
        <i className="fas fa-share color-light-gray"></i>
        <span>{cardData.share}</span>
        <i className="fa-solid fa-comment"></i> <span>{cardData.comment}</span>
      </div>
    </div>
  );
};
export default Card;
