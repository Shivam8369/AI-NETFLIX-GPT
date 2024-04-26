import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import useTopRatedMovie from "../hooks/useTopRatedMovie";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovie();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
          <Footer/>
        </>
      )}
      {/* 
        MainContainer
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MovieList * n
            - cards * n
    */}
    </div>
  );
};

export default Browse;
