import React, { createContext, useContext, useState } from 'react';
import { initialMoviesData, initialUserData } from '../data/moviesData';

const MovieContext = createContext();

export const useMovies = () => {
    const context = useContext(MovieContext);
    if (!context) {
        throw new Error('useMovies must be used within a MovieProvider');
    }
    return context;
};

export const MovieProvider = ({ children }) => {
    // State film - menggabungkan semua kategori film
    const [movies, setMovies] = useState(() => {
        const allMovies = [
            ...initialMoviesData.trending,
            ...initialMoviesData.topRated,
            ...initialMoviesData.continueWatching
        ];
        return allMovies;    });
    // State data pengguna
    const [userData, setUserData] = useState(initialUserData);

    // State UI
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');  // Operasi CRUD untuk Film

    // CREATE: Tambah film baru ke array
    const addMovie = (newMovie) => {
        const movieWithId = {
            ...newMovie,            id: Date.now(), // Pembuatan ID sederhana
            isInWatchlist: false,
            userRating: null,
            rating: newMovie.rating || 4.0
        };
        setMovies(prevMovies => [...prevMovies, movieWithId]);
        return movieWithId;    };

    // READ: Ambil film berdasarkan kategori
    const getMoviesByCategory = (category) => {
        switch (category) {
            case 'trending':
                return movies.filter(movie => initialMoviesData.trending.some(t => t.id === movie.id));
            case 'topRated':
                return movies.filter(movie => initialMoviesData.topRated.some(t => t.id === movie.id));
            case 'continueWatching':
                return movies.filter(movie => initialMoviesData.continueWatching.some(t => t.id === movie.id));
            case 'watchlist':
                return movies.filter(movie => movie.isInWatchlist);
            default:
                return movies;
        }    };

    // UPDATE: Perbarui film yang ada di array
    const updateMovie = (movieId, updates) => {
        setMovies(prevMovies =>
            prevMovies.map(movie =>
                movie.id === movieId ? { ...movie, ...updates } : movie
            )
        );    };

    // DELETE: Hapus film dari array
    const deleteMovie = (movieId) => {
        setMovies(prevMovies => prevMovies.filter(movie => movie.id !== movieId));    };

    // Operasi Watchlist
    const toggleWatchlist = (movieId) => {
        setMovies(prevMovies =>
            prevMovies.map(movie =>
                movie.id === movieId
                    ? { ...movie, isInWatchlist: !movie.isInWatchlist }
                    : movie
            )
        );    };

    // Operasi Rating
    const rateMovie = (movieId, rating) => {
        setMovies(prevMovies =>
            prevMovies.map(movie =>
                movie.id === movieId
                    ? { ...movie, userRating: rating }
                    : movie
            )
        );

        setUserData(prevData => ({
            ...prevData,
            ratings: {
                ...prevData.ratings,
                [movieId]: rating
            }
        }));    };

    // Fungsi pencarian
    const getFilteredMovies = () => {
        let filteredMovies = getMoviesByCategory(selectedCategory);

        if (searchQuery) {
            filteredMovies = filteredMovies.filter(movie =>
                movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
                movie.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return filteredMovies;    };

    // Ambil film berdasarkan ID
    const getMovieById = (movieId) => {
        return movies.find(movie => movie.id === movieId);    };

    // Statistik
    const getStats = () => {
        return {
            totalMovies: movies.length,
            watchlistCount: movies.filter(m => m.isInWatchlist).length,
            ratedMoviesCount: movies.filter(m => m.userRating !== null).length,
            averageRating: movies.reduce((sum, movie) => {
                return sum + (movie.userRating || 0);
            }, 0) / movies.filter(m => m.userRating).length || 0
        };
    };    const value = {
        // State
        movies,
        userData,
        searchQuery,
        selectedCategory,

        // Aksi
        setSearchQuery,
        setSelectedCategory,        // Operasi CRUD
        addMovie,        // CREATE
        getMoviesByCategory,  // READ
        updateMovie,     // UPDATE
        deleteMovie,     // DELETE
        getFilteredMovies,
        getMovieById,

        // Interaksi pengguna
        toggleWatchlist,
        rateMovie,

        // Utilitas
        getStats
    };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
};
