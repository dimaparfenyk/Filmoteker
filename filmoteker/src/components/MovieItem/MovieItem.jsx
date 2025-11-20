import { Li, Card, Poster, Title, Meta } from "./MovieItem.styled";

export const MovieItem = ({ movie }) => {
  return (
    <Li>
      <Card>
        <Poster src={movie.poster} alt={movie.name} />
        <Title>{movie.name}</Title>
        <Meta>
          <span style={{ textTransform: "capitalize", marginRight: 6 }}>
            {Array.isArray(movie.genre) ? movie.genre.join(", ") : movie.genre}
          </span>
          {movie.year}
        </Meta>
      </Card>
    </Li>
  );
};
