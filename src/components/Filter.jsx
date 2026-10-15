import React, { useRef } from 'react'
function Filter({ filter, setFilter, movies }) {
const title = useRef()
const rating = useRef()
function FilterMovies(event) {
    event.preventDefault()
    setFilter(movies.filter(movie => movie.title.includes(title.current.value)&& movie.rating>= rating.current.value))
}
return (
    <form onSubmit={FilterMovies}>
    <input ref={title} type="text" placeholder="Enter movie title" />
    <input ref={rating} type="number" placeholder="Minimum Rating" min="0" max="10" />
    <button type="submit">Search</button>
    </form>
)
}
export default Filter 