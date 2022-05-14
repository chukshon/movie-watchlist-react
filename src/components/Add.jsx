import React, { useState } from 'react'

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
    } catch (err) {
      console.log(err)
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
          {results.map((movie) => {
            return <h1 key={movie.id}>{movie.title}</h1>
          })}
        </div>
      </div>
    </div>
  )
}

export default Add
