import React from "react";
import Card from "./Card";
import { DummyData } from "../utils/dummyData";
import "../styles/cards.css";

export default function Cards() {
  // console.log(DummyData[0]);
  console.log("dummdata:", DummyData);
  return (
    <div class="hr-cards">
      {/* {DummyData.map(e,index  )} */}
      {/* {DummyData.map(e)} */}
      <Card data={DummyData.map((e)=>{})} />
      <Card data={DummyData.map((e)=>{})} />
      <Card data={DummyData.map((e)=>{})} />
    </div>
  );
}
