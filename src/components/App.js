import React, {useState, useEffect} from 'react';
import Quiz from './Quiz';
import Header from './Header'
import QuizList from './QuizList'
import SuggestionsPage from './SuggestionsPage';
import Search from './Search.js';
import { Route, Switch } from "react-router-dom";

function App() {

  const [quizzes, setQuizzes] = useState([]);
  const  [quizzesToShow, setQuizzesToShow] = useState([]); 

  useEffect(()=>{
    fetch('http://localhost:4000/quizzes')
        .then(resp => resp.json())
        .then(data => {
          setQuizzes(data);
          setQuizzesToShow(data)})
}, []);

  function searchHandler(term){
    let arr= quizzes.filter( q => q.title.toLowerCase().includes(term.toLowerCase()))
    setQuizzesToShow(arr)
    
  }

  return (
    <div className="App">

        <Header />
        <Switch>

        {quizzesToShow.map((q)=> {return(
                  <Route path={"/"+q.id} key={q.id}>
                  <Quiz q={q} />
                  </Route>
        )})}

          {/* home page shows list of quizzes*/}
        <Route exact path="/">
        <Search  onSearch={searchHandler}/>  
        <QuizList quizzes={quizzesToShow} />
        </Route>

        <Route path="/suggestions">
          <SuggestionsPage />
        </Route>

        </Switch>
        


      
      
    </div>
  );
}

export default App;

/*

THINGS THAT DON'T WORK YET 
-- Remove the search bar from Quiz pages
-- Comment form - adds to the DOM on submit, persists on refresh. BUT it doesn't persist if you 
    navigate to another component then navigate back 
--Need to add styling



*/
