import { MenuItem, TextField, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
//import { renderIntoDocument } from 'react-dom/test-utils'
import { useHistory } from 'react-router-dom'
import ErrorMessage from '../ErrorMessage'
import Quizclass from '../Quizclass'
import './Home.css'

const Home = ({name, setName, fetchQuestions}) => {
    const [quizClass, setQuizClass] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [error, setError] = useState(false)

    const history = useHistory()

    const submitHandler = (e) =>{
        e.preventDefault()
        if (!quizClass || !difficulty || !name) {
            setError(true);
            return;
            
        } 
        
        else{
            history.push('/quiz')
            setError(false)
            fetchQuestions(quizClass, difficulty)
            
        }
    }

  return (
    <div className='content'>
        <div>
            <span>SETTINGS</span>

            <div className='settings'>
                {error && <ErrorMessage>Please Complete Selections</ErrorMessage>}
            <div className='textField'>
                <TextField onChange={(e) => setName(e.target.value)} label='Please enter your name' variant='outlined' style={{marginBottom: 20,    }}/>

                <TextField onChange={(e) => setQuizClass(e.target.value)} value={quizClass} select label='Please Select a Class' variant='outlined' style={{marginBottom: 20,}}>
                {Quizclass.map((cat) => (
                    <MenuItem key={cat.category} value={cat.value} >
                    {cat.category}
                    </MenuItem>
                ))}
                </TextField>
                <TextField onChange={(e) => setDifficulty(e.target.value)} value={difficulty} select label='Select Difficulty' variant='outlined' style={{marginBottom: 20,}} >
                    <MenuItem key='Easy' value='easy'>Easy</MenuItem>
                    <MenuItem key='Meduim' value='medium'>Meduim</MenuItem>
                    <MenuItem key='Hard' value='hard'>Hard</MenuItem>
                </TextField>
                
                <Button onClick={submitHandler} variant='contained' style={{color: 'white', marginBottom: 20, size: 'large'}}>Let's Begin</Button>
                
            </div>
            </div>
        
        </div>
        <img src='/banner2.svg' className='banner' alt='img'></img>
    </div>
  )
}

export default Home


