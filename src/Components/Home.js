import React, { useEffect, useState } from "react";
import { Trending } from "./Trending/Trending";
import { Nrw } from "./Nrw/Nrw";
import { Cards } from "./Card/Cards";
import Footer from "./Footer/Footer";
import { Crsl } from "./Carousel/Crsl";
import jsonData from "../data/data.json";

export const Home = () => {
  const [allCards, setAllCards] = useState();
  console.log(jsonData.all_cards);
  useEffect(() => {
    setAllCards(jsonData);
  }, []);
  return (
    <div>
      <Crsl />
      <Trending />
      <Nrw />
      <Cards data={jsonData.all_cards} />
      <Footer />
    </div>
  );
};
