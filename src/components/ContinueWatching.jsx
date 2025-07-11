import { useMovies } from '../context/MovieContext';
import MovieCard from './MovieCard';

const ContinueWatching = () => {
  const { getMoviesByCategory, selectedCategory, searchQuery } = useMovies();
  
  // Only show continue watching section if we're viewing all categories or continue watching specifically
  if (selectedCategory !== 'all' && selectedCategory !== 'continueWatching') {
    return null;
  }

  const movies = getMoviesByCategory('continueWatching');

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
    <section className="px-4 py-6 sm:px-10 sm:py-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl sm:text-2xl font-bold">
          Melanjutkan Tonton Film
          {searchQuery && (
            <span className="text-sm text-gray-400 ml-2">
              ({filteredMovies.length} hasil)
            </span>
          )}
        </h2>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {filteredMovies.map((movie, index) => (
          <div
            key={movie.id}
            className={`${
              index === 0 ? 'col-span-4 sm:col-span-1' : 'hidden sm:block'
            } relative`}
          >
            <MovieCard
              movie={movie}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md"
            />
            
            {/* Progress overlay */}
            {movie.progress && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <div className="flex justify-between items-center text-white text-sm">
                  <span>{movie.title}</span>
                  <span>⭐ {movie.userRating || movie.rating}</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-1 mt-1">
                  <div 
                    className="bg-red-600 h-1 rounded-full transition-all duration-300"
                    style={{ width: `${movie.progress}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-300 mt-1">
                  {movie.progress}% complete
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContinueWatching;
