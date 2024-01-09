import "../styles/cover.css";
export default function Cover() {
  return (
    <div className="cover">
      <div className="cover-left">
        <div className="cover-top-button">Бизнес</div>
        <h2>"NB Esports" дэлхийн аваргын хоёрдугаар шатанд шалгарлаа</h2>
        <p>
          PUBG Mobile-ын дэлхийн аварга шалгаруулах тэмцээн "PMGC 2023" Малайзын
          нийслэл Куала Лумпур хотод үргэлжилж байна.
        </p>
        <div className="cover-card-comment">
          <div className="share-button">
            <i className="fas fa-share color-light-gray"></i>
            <span>63</span>
          </div>
          <div className="comment-button">
            <i className="fa-solid fa-comment"></i>
            <span>5</span>
          </div>
        </div>
      </div>
      <div className="cover-card">
        <div className="cover-card-img">
          <span>
            Дэлгэрэнгүй унших<i className="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
