import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Spinner } from "../components";

export const MovieList = ({ apiPath, title }) => {
  //eslint-disable-next-line
  const pageTitle = useTitle(title);
  const { data: movies, loading } = useFetch(apiPath);
  if (loading) {
    return <Spinner />;
  }

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justiofy-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
