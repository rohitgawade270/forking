import React from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import ResponsiveAppBar from './components/AppBar';
import RecipeReviewCard from './components/Card';
import SearchBar from './Pages/SearchBar';
import login from './components/Login';




export default function App() {
  return (
    
    <Router>
      
      <ResponsiveAppBar/>
       <login/>
   
      
      
      <Routes>
        
        <Route path='' Component={RecipeReviewCard}/>

      </Routes>
      

      </Router>

    
  )
}


