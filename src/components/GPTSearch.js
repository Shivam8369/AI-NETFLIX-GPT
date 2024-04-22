import banner from "../assets/Banner.jpg";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
      <img className=" h-screen w-screen object-cover " src={banner} alt="logo" />
    </div>
    <div className="">
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  </>
  );
};
export default GPTSearch;