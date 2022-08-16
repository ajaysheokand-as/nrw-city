import React from "react";
import Ticker from "react-ticker";
import { Button } from "bootstrap";
import Classes from "./Trending.module.css";

export const Trending = () => {
  return (
    <div className="border border-1 p-3 mb-5 bg-light rounded">
      <div className={Classes.trendingTitile}>
        <span>Top Category</span>
      </div>

      <Ticker className={Classes.ticker}>
        {({ index }) => (
          <>
            {/* <Button variant="outline-success">Success</Button>{" "} */}
            {/* <p>This is the Headline of element #{index}!</p> */}
            <div className={Classes.btn}> Category {index}</div>
          </>
        )}
      </Ticker>
    </div>
  );
};
