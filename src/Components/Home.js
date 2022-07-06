import React from "react";
import { Trending } from "./Trending/Trending";
import { Nrw } from "./Nrw/Nrw";
import { Cards } from "./Card/Cards";
import Footer from "./Footer/Footer";
import { Crsl } from "./Carousel/Crsl";

export const Home = () => {
  return (
    <div>
      <Crsl />
      <Trending />
      <Nrw />
      <Cards />
      <Footer />
    </div>
  );
};
