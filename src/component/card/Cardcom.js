import React from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import cardinfo from "../../assets/CardInfo.json";

const Cardcom = (props) => {
  const num = props.cardNum;
  return (
    // card component
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        width: "100%",
        maxWidth: "22.66669rem",
        padding: "2rem",
        margin: "auto",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        backgroundColor: "rgba(249, 249, 248, 1)",
        border: "1px solid rgba(233, 232, 232, 1)",
        borderRadius: 0,
        cursor: "pointer",
      }}
      className="card"
    >
      {/* content of card */}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          alignSelf: "stretch",
          padding: 0,
          "&:last-child": {
            paddingBottom: 0,
          },
        }}
        className="card-content"
      >
        {/* image-icon */}
        <Typography
          sx={{
            width: "3rem",
            height: "3rem",
            backgroundColor: "rgba(225, 232, 240, 1)",
            borderRadius: "0.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="img-content"
        >
          <svg
            width="25"
            height="20"
            viewBox="0 0 25 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Vector">
              <path
                d="M4.88295 2.15754C4.88295 3.34864 3.91737 4.31423 2.72627 4.31423C1.53516 4.31423 0.56958 3.34864 0.56958 2.15754C0.56958 0.966435 1.53516 0.000854492 2.72627 0.000854492C3.91737 0.000854492 4.88295 0.966435 4.88295 2.15754Z"
                fill="#94A3B8"
              />
              <path
                d="M24.0971 19.9992H0.56958L6.45145 9.29937L9.57244 12.5823L14.8541 4.31423L24.0971 19.9992Z"
                fill="#94A3B8"
              />
            </g>
          </svg>
        </Typography>
        {/* title content */}
        <Typography
          sx={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
          className="title-content"
        >
          {/* title */}
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 1)",
              textAlign: "center",
              fontSize: "1rem",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "1.35rem",
            }}
            className="title"
          >
            {cardinfo.sections[0].cards[num].title}
          </Typography>
          {/* right-arrow */}
          <scan
            sx={{ width: "1rem", height: "1rem" }}
            className="chevron-right"
          >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Chevron-right">
                <path
                  id="Path"
                  d="M6.33325 11.998L10.3333 7.99805L6.33325 3.99805"
                  stroke="#6B6B6A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </scan>
        </Typography>
        {/* main content */}
        <Typography
          sx={{
            fontSize: "0.875rem",
            fontWeight: 400,
            fontStyle: "normal",
            fontFamily: "Public Sans",
            lineHeight: "1.18125rem",
            color: "rgba(107, 107, 106, 1)",
            alignSelf: "stretch",
            textAlign: "center",
          }}
        >
          {cardinfo.sections[0].cards[num].body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cardcom;
