import {API_KEY} from './constants/constant'

export const trending =
  `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
export const action =
  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
export const originals =
`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
export const ComedyMovies =
  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
export const HorrorMovies =
  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
export const ActionMovies =
  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
export const RomanceMovies =
  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
