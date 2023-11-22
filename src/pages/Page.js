import React, { useEffect, useState } from "react";
import Cardcom from "../component/card/Cardcom";

const Page = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(!scroll);
    };

    if (scroll === true) {
      // set height of the svg path as constant
      const svg1 = document.getElementById("svgPath1");
      const length1 = svg1.getTotalLength();

      // start positioning of svg drawing
      svg1.style.strokeDasharray = length1;

      // hide svg before scrolling starts
      svg1.style.strokeDashoffset = length1;

      // set height of the svg path as constant
      const svg2 = document.getElementById("svgPath2");
      const length2 = svg2.getTotalLength();

      // start positioning of svg drawing
      svg2.style.strokeDasharray = length2;

      // hide svg before scrolling starts
      svg2.style.strokeDashoffset = length2;

      const scrollpercent =
        (document.body.scrollTop + document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      console.log(scrollpercent);
      
      const draw1 = length1 * scrollpercent;

      // Reverse the drawing when scroll upwards
      svg1.style.strokeDashoffset = length1 - draw1;

      const draw2 = length2 * scrollpercent;

      // Reverse the drawing when scroll upwards
      svg2.style.strokeDashoffset = length2 - draw2;
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <div className="pg-container text-center">
      <p
        style={{
          fontSize: "1rem",
          fontWeight: "700",
          letterSpacing: "0.0375rem",
          color: "#6B6B6A",
        }}
      >
        ACTIVE INSURANCE
      </p>
      <br />
      <p className="title mx-auto">
        Protect your business with broad coverage and proactive security
      </p>
      <p
        className="mt-5 pt-5"
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          lineHeight: "120%",
          color: "#2B70D7",
        }}
      >
        Insurance
        <div className="svg-container">
          <svg className="svg">
            <path
              id=""
              class="narmol"
              stroke="#d3d3d3"
              stroke-width="1px"
              fill="none"
              d="M423.295 2C423.295 12.6667 423.295 23.3333 423.295 34C423.295 34.7879 423.591 36.2816 423.295 37C422.49 38.9567 419.134 37.9131 417.018 37.9444C402.929 38.1532 388.829 38 374.74 38C358.851 38 342.962 38 327.073 38C238.74 38 150.406 38 62.0732 38C42.5546 38 23.0361 38 3.5176 38C1.07274 38 2.32302 40.4151 2.29538 45.6667C2.21955 60.0733 2.29538 74.4819 2.29538 88.8889C2.29538 169.667 2.29538 250.444 2.29538 331.222C2.29538 449.963 2.29538 568.704 2.29538 687.444C2.29538 697.963 2.29538 708.481 2.29538 719C2.29538 725.185 2.29538 731.37 2.29538 737.556C2.29538 737.767 2.47524 737.085 2.68426 737.056C4.45989 736.802 6.4001 737 8.18426 737C62.3324 737 116.481 737 170.629 737C248.184 737 325.74 737 403.295 737C407.555 737 411.814 737 416.073 737C423.093 737 423.295 735.975 423.295 744C423.295 752.333 423.295 760.667 423.295 769"
            />
            <path
              id="svgPath1"
              stroke="#4E5051"
              stroke-width="1px"
              fill="none"
              d="M423.295 2C423.295 12.6667 423.295 23.3333 423.295 34C423.295 34.7879 423.591 36.2816 423.295 37C422.49 38.9567 419.134 37.9131 417.018 37.9444C402.929 38.1532 388.829 38 374.74 38C358.851 38 342.962 38 327.073 38C238.74 38 150.406 38 62.0732 38C42.5546 38 23.0361 38 3.5176 38C1.07274 38 2.32302 40.4151 2.29538 45.6667C2.21955 60.0733 2.29538 74.4819 2.29538 88.8889C2.29538 169.667 2.29538 250.444 2.29538 331.222C2.29538 449.963 2.29538 568.704 2.29538 687.444C2.29538 697.963 2.29538 708.481 2.29538 719C2.29538 725.185 2.29538 731.37 2.29538 737.556C2.29538 737.767 2.47524 737.085 2.68426 737.056C4.45989 736.802 6.4001 737 8.18426 737C62.3324 737 116.481 737 170.629 737C248.184 737 325.74 737 403.295 737C407.555 737 411.814 737 416.073 737C423.093 737 423.295 735.975 423.295 744C423.295 752.333 423.295 760.667 423.295 769"
            />
            <path
              id=""
              class="narmol"
              stroke="#d3d3d3"
              stroke-width="1px"
              fill="none"
              d="M423.131 2C423.131 12.6667 423.131 23.3333 423.131 34C423.131 34.7879 422.836 36.2816 423.131 37C423.937 38.9567 427.293 37.9131 429.409 37.9444C443.498 38.1532 457.598 38 471.687 38C487.576 38 503.465 38 519.354 38C607.687 38 696.02 38 784.354 38C803.872 38 823.391 38 842.909 38C845.354 38 844.104 40.4151 844.131 45.6667C844.207 60.0733 844.131 74.4819 844.131 88.8889C844.131 169.667 844.131 250.444 844.131 331.222C844.131 449.963 844.131 568.704 844.131 687.444C844.131 697.963 844.131 708.481 844.131 719C844.131 725.185 844.131 731.37 844.131 737.556C844.131 737.767 843.952 737.085 843.743 737.056C841.967 736.802 840.027 737 838.243 737C784.094 737 729.946 737 675.798 737C598.243 737 520.687 737 443.131 737C438.872 737 434.613 737 430.354 737C423.334 737 423.131 735.975 423.131 744C423.131 752.333 423.131 760.667 423.131 769"
            />
            <path
              id="svgPath2"
              stroke="#4E5051"
              stroke-width="1px"
              fill="none"
              d="M423.131 2C423.131 12.6667 423.131 23.3333 423.131 34C423.131 34.7879 422.836 36.2816 423.131 37C423.937 38.9567 427.293 37.9131 429.409 37.9444C443.498 38.1532 457.598 38 471.687 38C487.576 38 503.465 38 519.354 38C607.687 38 696.02 38 784.354 38C803.872 38 823.391 38 842.909 38C845.354 38 844.104 40.4151 844.131 45.6667C844.207 60.0733 844.131 74.4819 844.131 88.8889C844.131 169.667 844.131 250.444 844.131 331.222C844.131 449.963 844.131 568.704 844.131 687.444C844.131 697.963 844.131 708.481 844.131 719C844.131 725.185 844.131 731.37 844.131 737.556C844.131 737.767 843.952 737.085 843.743 737.056C841.967 736.802 840.027 737 838.243 737C784.094 737 729.946 737 675.798 737C598.243 737 520.687 737 443.131 737C438.872 737 434.613 737 430.354 737C423.334 737 423.131 735.975 423.131 744C423.131 752.333 423.131 760.667 423.131 769"
            />
          </svg>
        </div>
      </p>
      <div className="cards">
        <div class="cards-container">
          <div class="col-md-4" style={{ maxWidth: "22.66669rem" }}>
            <Cardcom cardNum="0" />
          </div>
          <div class="col-md-4 card2" style={{ maxWidth: "22.66669rem" }}>
            <Cardcom cardNum="1" />
          </div>
          <div class="col-md-4" style={{ maxWidth: "22.66669rem" }}>
            <Cardcom cardNum="2" />
          </div>
        </div>
        <div className="mid-text">
          Active <br />
          Insurance
        </div>
        <div class="cards-container">
          <div class="col-md-4" style={{ maxWidth: "22.66669rem" }}>
            <Cardcom cardNum="3" />
          </div>
          <div class="col-md-4 card4" style={{ maxWidth: "22.66669rem" }}>
            <Cardcom cardNum="4" />
          </div>
          <div class="col-md-4" style={{ maxWidth: "22.66669rem" }}>
            <Cardcom cardNum="5" />
          </div>
        </div>
      </div>
      <p
        className="my-2"
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          lineHeight: "120%",
          color: "#2B70D7",
        }}
      >
        Security & Services
      </p>
    </div>
  );
};

export default Page;
