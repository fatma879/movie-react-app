import React, { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'
import AddMovie from './components/AddMovie'
import Filter from './components/Filter'
import MovieList from './components/MovieList';
const App = () => {
  const initialMovies = [
  {
    id: 1,
    title: "Friends",
    description: "Follow six close friends as they navigate love, careers, hilarious mishaps, and everyday life together in New York City.",
    posterURL: "friends.jfif",
    rating:9.5,
  },
  {
    id: 2,
    title: "Emily in Paris",
    description: "An American marketing executive moves to Paris for work and navigates romance, friendships, and career challenges while discovering French culture.",
    posterURL: "Emily in Paris.jfif",
    rating: 9.4,
  },
  {
    id: 3,
    title: "The Devil wears prada",
    description: "A young journalist becomes assistant to a powerful fashion magazine editor and struggles to survive the demanding world of high fashion.",
    posterURL: "The Devil Wears Prada.jfif",
    rating: 8.5,
  },
  
  {
    id: 4,
    title: "Me Before You",
    description: "A young woman becomes a caregiver for a wealthy man who is paralyzed, and their lives change as they form an unexpected connection.",
    posterURL: "me before you.jfif",
    rating: 9,
  },
  {
    id: 5,
    title: "Off Campus",
    description: "A college romance drama about students navigating love, relationships, friendship, and life on campus.",
    posterURL: "offcampus.jfif",
    rating: 8.0,
  },
  {
    id: 6,
    title: "Spider-Man: Brand New Day",
    description: "Peter Parker protects New York as Spider-Man while facing new threats and the challenges of a world that has forgotten him.",
    posterURL: "spiderman.jfif",
    rating: 8.0,
  },
  {
    id: 7,
    title: "The Lion King",
    description: "Simba must overcome betrayal and tragedy to embrace his destiny and reclaim his place as king of the Pride Lands.",
    posterURL: "the lion king.jfif",
    rating: 8.5,
  },
  {
    id: 8,
    title: "How to Lose a Guy in 10 Days",
    description: "A magazine writer tries to make a man fall out of love with her in ten days, while he secretly tries to make her fall for him.",
    posterURL: "10days.jfif",
    rating: 10,
  },
  
  {
    id: 9,
    title: "High Potential",
    description: "A single mother with an exceptional mind helps the police solve complex crimes while balancing her family life and an unconventional career.",
    posterURL: "High potential.jfif",
    rating: 10,
  },

];
const [movies, setMovies] = useState(initialMovies)
const [filter, setFilter] = useState(movies)
return (
  <div>
    <AddMovie movies={movies} setMovies={setMovies} setFilter={setFilter}/>

    <Filter filter={filter} setFilter={setFilter} movies={movies} />

    <MovieList movies={filter} />
    
  </div>
)
}     
export default App