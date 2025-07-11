// Data film awal untuk aplikasi
export const initialMoviesData = {
  trending: [
    {
      id: 1,
      title: "Suzume",
      image: "/src/assets/image/Trending-1.png",
      rating: 4.7,
      year: 2023,
      genre: "Animation",
      description: "A story of encounters and farewells woven by a girl and a mysterious door.",
      isInWatchlist: false,
      userRating: null
    },
    {
      id: 2,
      title: "Guardians of the Galaxy Vol. 3",
      image: "/src/assets/image/Trending-2.png",
      rating: 4.5,
      year: 2023,
      genre: "Action",
      description: "The final chapter of the Guardians of the Galaxy trilogy.",
      isInWatchlist: false,
      userRating: null
    },
    {
      id: 3,
      title: "Spider-Man: Across the Spider-Verse",
      image: "/src/assets/image/Trending-3.png",
      rating: 4.8,
      year: 2023,
      genre: "Animation",
      description: "Miles Morales catapults across the Multiverse.",
      isInWatchlist: false,
      userRating: null
    },
    {
      id: 4,
      title: "The Little Mermaid",
      image: "/src/assets/image/Trending-4.png",
      rating: 4.2,
      year: 2023,
      genre: "Musical",
      description: "The beloved story of Ariel comes to life.",
      isInWatchlist: false,
      userRating: null
    },
    {
      id: 5,
      title: "Fast X",
      image: "/src/assets/image/Trending-5.png",
      rating: 4.0,
      year: 2023,
      genre: "Action",
      description: "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted and outdriven every foe in their path.",
      isInWatchlist: false,
      userRating: null
    }
  ],
  
  topRated: [
    {
      id: 6,
      title: "Blue Lock",
      image: "/src/assets/image/top-1.png",
      rating: 4.9,
      year: 2022,
      genre: "Anime",
      description: "A soccer training facility to create the world's greatest striker.",
      hasNewEpisode: true,
      isInWatchlist: false,
      userRating: null
    },
    {
      id: 7,
      title: "Ted Lasso",
      image: "/src/assets/image/top-2.png",
      rating: 4.8,
      year: 2020,
      genre: "Comedy",
      description: "An American football coach is hired to coach a British soccer team.",
      hasNewEpisode: false,
      isInWatchlist: false,
      userRating: null
    },
    {
      id: 8,
      title: "Duty After School",
      image: "/src/assets/image/top-3.png",
      rating: 4.6,
      year: 2023,
      genre: "Drama",
      description: "Students face an alien invasion while preparing for their exams.",
      hasNewEpisode: false,
      isInWatchlist: false,
      userRating: null
    },
    {
      id: 9,
      title: "My Hero Academia",
      image: "/src/assets/image/top-4.png",
      rating: 4.7,
      year: 2016,
      genre: "Anime",
      description: "A world where people with superpowers called Quirks are the norm.",
      hasNewEpisode: true,
      isInWatchlist: false,
      userRating: null
    },
    {
      id: 10,
      title: "Sonic the Hedgehog 2",
      image: "/src/assets/image/top-5.png",
      rating: 4.3,
      year: 2022,
      genre: "Adventure",
      description: "Sonic and Tails face off against Dr. Robotnik and his new partner Knuckles.",
      isTop10: true,
      isInWatchlist: false,
      userRating: null
    }
  ],

  continueWatching: [
    {
      id: 11,
      title: "Don't Look Up",
      image: "/src/assets/image/dont look up.png",
      rating: 4.1,
      year: 2021,
      genre: "Comedy",
      description: "Two astronomers try to warn humanity about an approaching comet.",
      progress: 75,
      isInWatchlist: true,
      userRating: 4
    },
    {
      id: 12,
      title: "The Batman",
      image: "/src/assets/image/carusel 2.png",
      rating: 4.2,
      year: 2022,
      genre: "Action",
      description: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.",
      progress: 45,
      isInWatchlist: true,
      userRating: null
    },
    {
      id: 13,
      title: "Blue Lock",
      image: "/src/assets/image/carusel 3.png",
      rating: 4.6,
      year: 2022,
      genre: "Anime",
      description: "A soccer training facility to create the world's greatest striker.",
      progress: 30,
      isInWatchlist: true,
      userRating: 5
    },
    {
      id: 14,
      title: "A Man Called Otto",
      image: "/src/assets/image/carusel 4.png",
      rating: 4.4,
      year: 2022,
      genre: "Drama",
      description: "A grumpy widower's only joy comes from criticizing and judging his exasperated neighbors.",
      progress: 60,
      isInWatchlist: true,
      userRating: null
    }  ]
};

// Data pengguna
export const initialUserData = {
  watchlist: [],
  ratings: {},
  favorites: []
};
