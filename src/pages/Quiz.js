import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import './Quiz.css'
import Question from '../Question'



const Quiz = ({name, score, setScore, questions, setQuestions, }) => {

  const [options, setOptions] = useState()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  

  useEffect (() => {
    //console.log(questions)

    setOptions(
      questions && 
        shuffleHandler([
          questions[currentQuestion]?.correct_answer, 
          ...questions[currentQuestion]?.incorrect_answers,
        ])
    )
  }, [questions, currentQuestion ])

  //console.log(options)

  const shuffleHandler = (theOptions) => {
    return theOptions.sort(() => Math.random() - 0.5)
}

  return (
    <div className='quiz'>
      <span className='greet'>Welcome, {name}</span>

      {questions ? (
        <>
        <div className="quizInfo">
          <span>{questions[currentQuestion].category}</span>
          <span> Score : {score}
          </span>
        </div>

           <Question
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            questions={questions}
            options={options}
            correct={questions[currentQuestion]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
            />
          </> 
         
      ) : (
        <CircularProgress style={{margin:100}} size={100} color="primary" />
      )
      }
    </div>
  )
}

export default Quiz




