import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './Result.css'



const Result = ({name, score}) => {

  const history = useHistory()

  useEffect (() => {
    if (!name) {
      history.push('/')
    }
  }, [name, history])

  return (
    <div className='result' >
      <span className='title'> Final Score : {score} </span>

      <Button variant='contained' color='primary' size='large' href='/' style= {{alignSelf: 'center', marginTop: 20}} >Return to Homepage</Button>

    </div>
  )
}

export default Result