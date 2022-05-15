import React from 'react'
import MovieCard from '../components/MovieCard'
import { useAppContext } from '../context/appContext'

const WatchList = () => {
  const { watchList } = useAppContext()
  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'>WatchList Movies</h1>
          <span className='count-pill'>
            {watchList.length} {watchList.length === 1 ? 'Movie' : 'Movies'}
          </span>
        </div>
        {watchList.length > 0 ? (
          <div className='movie-grid'>
            {watchList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type='watchList'>
                {movie.title}
              </MovieCard>
            ))}
          </div>
        ) : (
          <h2 className='no-movies'>No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  )
}

export default WatchList
