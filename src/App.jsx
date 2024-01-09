import MyName, { DummyProducts } from "./utils/dummyData";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Highlight from "./components/Highlight";
import "./styles/global.css";
const AcceptCard = (
  <>
    <p>You are allowed to enter</p>
  </>
);
const DeclineCard = (
  <>
    <p>You are not allowed to enter</p>
  </>
);
export default function App() {
  const age = 19;
  return (
    <div>
      {age > 18 ? AcceptCard : DeclineCard}
      <Header />
      <Highlight />
      <Cards />
    </div>
  );
}
