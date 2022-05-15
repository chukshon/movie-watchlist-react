import { useAppContext } from '../context/appContext'

const MovieControl = ({ movie, type }) => {
  const {
    removeFromWatchList,
    removeFromWatched,
    addToWatched,
    moveToWatchList,
  } = useAppContext()
  return (
    <div className='inner-card-controls'>
      {type === 'watchList' && (
        <>
          <button className='ctrl-btn' onClick={() => addToWatched(movie)}>
            <i className='fa-fw far fa-eye'></i>
          </button>

          <button
            className='ctrl-btn'
            onClick={() => removeFromWatchList(movie.id)}
          >
            <i className='fa-fw fa fa-times'></i>
          </button>
        </>
      )}
      {type === 'watched' && (
        <>
          <button className='ctrl-btn' onClick={() => moveToWatchList(movie)}>
            <i className='fa-fw far fa-eye-slash'></i>
          </button>

          <button className='ctrl-btn' onClick={() => removeFromWatched(movie)}>
            <i className='fa-fw fa fa-times'></i>
          </button>
        </>
      )}
    </div>
  )
}

export default MovieControl
