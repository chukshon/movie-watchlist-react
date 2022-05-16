import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Error = () => {
  return (
    <MajorDiv>
      <h1>Page does not exist</h1>
      <SLink to='/' className='count-pill error'>
        Go back home
      </SLink>
    </MajorDiv>
  )
}

const MajorDiv = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: -200px;
  }
`

const SLink = styled(Link)`
  display: inline;
`

export default Error
