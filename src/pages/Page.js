import React from "react";
import Cardcom from "../component/card/Cardcom";

const Page = () => {
  return (
    <div>
      <p>ACTIVE INSURANCE</p>
      <h1>Protect your business with broad coverage and proactive security</h1>
      <Cardcom cardNum="1" />
      <Cardcom cardNum="2" />
      <Cardcom cardNum="3" />
      <Cardcom cardNum="4" />
      <Cardcom cardNum="5" />
      <Cardcom cardNum="0" />
    </div>
  );
};

export default Page;
