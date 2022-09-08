import { BrowserRouter, Switch,  Route, } from "react-router-dom"
import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer'
import Home from "./pages/Home";
import Result from "./pages/Result";
import Quiz from "./pages/Quiz";
import axios from "axios";




function App() {
  
  const [name, setName] = useState('')

  const [questions, setQuestions] = useState()

  const [score, setScore] = useState(0)


  const fetchQuestions = async (quizClass='', difficulty='') => {

    const {data} = await axios.get(
      `https://opentdb.com/api.php?amount=20${
        quizClass && `&category=${quizClass}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`)

      setQuestions(data.results)
  }

  return (
    <BrowserRouter>
        <div className="App"  >
      
      <Header/>
      
      <Switch>

        <Route path='/' exact>
          <Home name={name} setName={setName} fetchQuestions={fetchQuestions} />
        </Route>

        <Route path='/quiz' exact>
          <Quiz name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions} />
        </Route>

        <Route path='/result' exact>
          <Result score={score} name={name} />  
        </Route>
        
      </Switch>

    </div>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;


