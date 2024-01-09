import Cards from "./components/Cards";
import Header from "./components/Header";
import Cover from "./components/Cover";
import { useState } from "react";
import "./styles/global.css";

// const AcceptCard = (
//   <>
//     <p>You are allowed to enter</p>
//   </>
// );
// const DeclineCard = (
//   <>
//     <p>You are not allowed to enter</p>
//   </>
// );
export default function App() {
  // const age = 19;
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* {age > 18 ? AcceptCard : DeclineCard} */}
      <Header />
      <Cover />
      <Cards />
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
