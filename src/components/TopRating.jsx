import { useMovies } from '../context/MovieContext';
import MovieCard from './MovieCard';

const TopRating = () => {
  const { getMoviesByCategory, selectedCategory, searchQuery } = useMovies();
  
  // Only show top rated section if we're viewing all categories or top rated specifically
  if (selectedCategory !== 'all' && selectedCategory !== 'topRated') {
    return null;
  }

  const movies = getMoviesByCategory('topRated');

  // Filter by search query if present
  const filteredMovies = searchQuery 
    ? movies.filter(movie => 
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.genre.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : movies;

  if (filteredMovies.length === 0) {
    return null;
  }

  return (
    <section className="px-4 py-6 sm:px-10 sm:py-10 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl sm:text-2xl font-bold">
          Top Rating Film dan Series Hari ini
          {searchQuery && (
            <span className="text-sm text-gray-400 ml-2">
              ({filteredMovies.length} hasil)
            </span>
          )}
        </h2>
      </div>

      {/* Grid film */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden">
        {filteredMovies.map((movie, index) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            className={`${index >= 2 ? 'hidden sm:block' : ''}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TopRating;
