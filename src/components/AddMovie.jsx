import React, { useRef } from 'react'
function AddMovie({ movies, setMovies, setFilter }){
const title =useRef()
const description =useRef()
const posterURL =useRef()
const rating =useRef()
function addMovie(event) {
event.preventDefault()
const movie = {
    id: Date.now(),
    title: title.current.value,
    description: description.current.value,
    posterURL: posterURL.current.value,
    rating: Number(rating.current.value),
}
setMovies([...movies, movie])
setFilter([...movies, movie])
console.log(movies)
} 
return (
    <form onSubmit={addMovie}>
    <input
        ref={title} placeholder="Movie title"/>
    <input
        ref={description} placeholder="Description"/>
    <input
        ref={posterURL} placeholder="Poster URL"/>
        <input
        ref={rating} type="number" placeholder="Rating" min="0" max="10"/>
    <button type="submit">Add Movie</button>
    </form>
)
};
export default AddMovie