import { useAppContext } from '../context/appContext'

const MovieControl = ({ movie, type }) => {
  const { removeFromWatchList, removeFromWatched } = useAppContext()
  return (
    <div className='inner-card-controls'>
      {type === 'watchList' && (
        <>
          <button className='ctrl-btn'>
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
          <button className='ctrl-btn'>
            <i className='fa-fw far fa-eye'></i>
          </button>

          <button
            className='ctrl-btn'
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className='fa-fw fa fa-times'></i>
          </button>
        </>
      )}
    </div>
  )
}

export default MovieControl
