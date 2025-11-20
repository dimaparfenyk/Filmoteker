//Omdb api key 20094959
// http://www.omdbapi.com/?i=tt3896198&apikey=20094959
import { List, Controls } from "./MovieList.styled";
import { MovieItem } from "../MovieItem";
const movies = [
  {
    poster: "/images/poster.jpg",
    name: "Greyhound",
    genre: ["drama", "action"],
    year: 2023,
  },
  {
    poster: "/images/poster.jpg",
    name: "Greyhound",
    genre: ["drama", "action"],
    year: 2023,
  },
  {
    poster: "/images/poster.jpg",
    name: "Greyhound",
    genre: ["drama", "action"],
    year: 2023,
  },
  {
    poster: "/images/poster.jpg",
    name: "Greyhound",
    genre: ["drama", "action"],
    year: 2023,
  },
  {
    poster: "/images/poster.jpg",
    name: "Greyhound",
    genre: ["drama", "action"],
    year: 2023,
  },
  {
    poster: "/images/poster.jpg",
    name: "Greyhound",
    genre: ["drama", "action"],
    year: 2023,
  },
];

export const MovieList = () => {
  return (
    <>
      <List>
        {movies.map((movie, index) => (
          <MovieItem key={index} movie={movie} />
        ))}
      </List>
      {/* <Controls>
        <button>Prev</button>
        <span>Страница 1</span>
        <button>Next</button>
      </Controls> */}
    </>
  );
};
