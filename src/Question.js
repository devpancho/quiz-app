//import { buttonBaseClasses } from '@mui/material'
//import { Button } from '@mui/material'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ErrorMessage from './ErrorMessage'
import './Question.css'

const Question = ({ score, setScore, questions, setQuestions, correct, options, currentQuestion, setCurrentQuestion }) => {


    const [selected,setSelected] = useState()

    const [error, setError] = useState(false)

    const selectHandler = (i) => {
        if (selected === i && selected === correct)
        {return 'select'}
        else if (selected === i && selected !== correct)
        {return 'wrong'}
        else if (1 ===correct)
        {return 'select'}
    }

    const checkHandler = (i) => {
        setSelected(i)
        if (i === correct) setScore(score + 1)
        setError(false)
    }

    const quitHandler = () => {

    }

    const history = useHistory()

         const nextHandler = () => {
            if (currentQuestion>18) {
                history.push('./result')
            }
            else if (selected) {
                setCurrentQuestion(currentQuestion + 1)
                setSelected()
            }
            else {
                setError('Please Select an Option')
            }
            
        }
        

  return (
    <div className='question'>
        <h1>Question {currentQuestion + 1} :</h1>

        <div className="singleQueston">
            <h2>{questions[currentQuestion].question}</h2>

            <div className="options">
            {error && <ErrorMessage>{error}</ErrorMessage>}

            {options && options.map(i=>( <button onClick={() => checkHandler(i)}
            className={`singleOption ${selected && selectHandler(i)}`}
            key = {i}
            disabled = {selected}
            >{i}</button> ))}

            </div>

            <div className='controls' >
                <Button onClick={quitHandler} variant='contained' color='secondary' size='large' style={{width: 180}} href='/'>
                    Quit
                </Button>

                <Button onClick={nextHandler}  variant='contained' color='error' size='large' style={{width: 180}} >
                    Next Question
                </Button>
            </div>

         
        </div>

    </div>
  )
}

export default Question