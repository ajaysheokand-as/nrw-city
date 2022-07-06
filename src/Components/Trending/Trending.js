import React from "react";
import Ticker from "react-ticker";
import { Button } from "bootstrap";
import Classes from "./Trending.module.css";

export const Trending = () => {
  return (
    <div>
      <div className={Classes.trendingTitile}>
        <b>Top Category</b>
      </div>
      <hr></hr>
      <Ticker className={Classes.ticker}>
        {({ index }) => (
          <>
            {/* <Button variant="outline-success">Success</Button>{" "} */}
            {/* <p>This is the Headline of element #{index}!</p> */}
            <div className={Classes.btn}> Category {index}</div>
          </>
        )}
      </Ticker>
      <hr></hr>
    </div>
  );
};
