import React, { useEffect, useState } from "react";
import { Trending } from "./Trending/Trending";
import { Nrw } from "./Nrw/Nrw";
import { Cards } from "./Card/Cards";
import Footer from "./Footer/Footer";
import { Crsl } from "./Carousel/Crsl";
import axios from "axios";
import Constant from "../Modules/Constant";

export const Home = () => {
  const [allCards, setAllCards] = useState();

  useEffect(() => {
    axios
      .get(Constant.url)
      .then((res) => {
        setAllCards(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <Crsl />
      <Trending />
      <Nrw />

      <Cards data={allCards} />
      <Footer />
    </div>
  );
};
