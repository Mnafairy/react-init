import "../styles/card.css";
const Card = ({ data }) => {
  console.log("data:", data);
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
    // { data.map((e)=>(
    <div className="card">
      <div className="card-img">
        <span>
          Унших<i className="fa-solid fa-arrow-right"></i>
        </span>
      </div>
      <p>{props.title}</p>
      <div className="comment-box">
        <i className="fas fa-share color-light-gray"></i>
        <span>{data.share}</span>
        <i className="fa-solid fa-comment"></i> <span>{data.comment}</span>
      </div>
    </div>
    // ))}
  );
};
export default Card;
// [{}, {}, {}];
