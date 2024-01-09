import React from "react";
import Card from "./Card";
import MyName, { DummyData } from "../utils/dummyData";
import "../styles/cards.css";

export default function Cards() {
  console.log("dummydata:", DummyData);
  return (
    <div className="hr-cards">
      {DummyData.map((news, index) => {
        return <Card news={news} key={index} />;
      })}
      {/* <p>{MyName}</p> */}
      {/* <Card
        title={DummyData[0].title}
        share={DummyData[0].share}
        comment={DummyData[0].comment}
      />
      <Card
        title={DummyData[1].title}
        share={DummyData[1].share}
        comment={DummyData[1].comment}
      />
      <Card
        title={DummyData[2].title}
        share={DummyData[2].share}
        comment={DummyData[2].comment}
      />
      <Card
        title={DummyData[3].title}
        share={DummyData[3].share}
        comment={DummyData[3].comment}
      /> */}
      {/* <Card data={DummyData.map((e) => {})} />
      <Card data={DummyData.map((e) => {})} />
      <Card data={DummyData.map((e) => {})} /> */}
    </div>
  );
}
function MyCard(props) {
  console.log("props:", props);
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.share}</p>
    </>
  );
}
