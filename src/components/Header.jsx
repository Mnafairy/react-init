import "../styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <div>
          <img src="http://127.0.0.1:5500/images/gogo-logo.png"/>
        </div>
        <ul className="header_list">
          <li>
            Мэдээ<i className="fas fa-chevron-down text-12"></i>
          </li>
          <li>
            GoGo булан<i className="fas fa-chevron-down text-12"></i>
          </li>
          <li>
            Үзэх<i className="fas fa-chevron-down text-12"></i>
          </li>
          <li>
            Хэв маяг<i className="fas fa-chevron-down text-12"></i>
          </li>
          <li>English</li>
          <li class="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
        </ul>
      </div>
      <div className="header_right">
        <div className="header_right_1">
          <p>Цаг агаар</p>
          <span>
            <img
              src="https://mgl.gogo.mn/newsn/v4/images/icon-snowflake.1fe08d41.svg"
              alt=""
            />
            -3
          </span>
        </div>
        <div className="header_right_2">
          <p>Зурхай</p>
          <span>
            <img
              src="https://mgl.gogo.mn/newsn/v4/images/calendar-icon.ff84145b.svg"
              alt=""
            />
            11.21
          </span>
        </div>
        <div className="header_right_3">
          <p>Валютын ханш</p>
          <span>
            <span className="text-green">$</span>3439₮
          </span>
        </div>
      </div>
    </div>
  );
}
