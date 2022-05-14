import React, { useState } from 'react'
import ResultCard from '../components/ResultCard'

const Add = () => {
  const [value, setValue] = useState('')
  const [results, setResults] = useState([])

  const handleChange = async (e) => {
    setValue(e.target.value)
    try {
      const api = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      )
      const data = await api.json()
      setResults(data.results)
      console.log(data.results)
    } catch (err) {
      setResults([])
    }
  }
  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input
              type='text'
              placeholder='Search for a movie'
              value={value}
              onChange={handleChange}
            />
          </div>
          {results && (
            <ul className='results'>
              {results.map((movie) => {
                return (
                  <li key={movie.id}>
                    <ResultCard movie={movie} />
                  </li>
                )
              })}
            </ul>
          )}
          {!results && <h1>Search for a movie</h1>}
        </div>
      </div>
    </div>
  )
}

export default Add
