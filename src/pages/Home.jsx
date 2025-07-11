import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrendingMovies from '../components/TrendingMovies';
import TopRating from '../components/TopRating';
import NewReleases from '../components/NewReleases';
import ContinueWatching from '../components/ContinueWatching';
import WatchlistSection from '../components/WatchlistSection';
import MovieManager from '../components/MovieManager';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-primary min-h-screen text-white">
      <Navbar />
      <Hero />
      <ContinueWatching />
      <TrendingMovies />
      <TopRating />
      <NewReleases />
      <WatchlistSection />
      <MovieManager />
      <Footer />
    </div>
  );
};

export default Home;
