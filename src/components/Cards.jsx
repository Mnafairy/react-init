import React from "react";
import Card from "./Card";

const DummyData = [
  {
    title: "title 1",
    img: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
  },
  {
    title: "title 2",
    img: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
  },
  {
    title: "title 3",
    img: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
  },
];

export default function Cards() {
  // console.log(DummyData[0]);
  console.log(DummyData);
  return (
    <div>
      {/* {DummyData.map(e,index)} */}
      <Card data={DummyData} />
    </div>
  );
}
