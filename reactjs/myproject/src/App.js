import React from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import ResponsiveAppBar from './components/AppBar';
import RecipeReviewCard from './components/Card';
import SearchBar from './Pages/SearchBar';
import Header from './components/Drawer';


export default function App() {
  return (
    
    <Router>
      <Header/>
      <ResponsiveAppBar/>
      <div>
        <SearchBar/>

        </div>
      
      
      <Routes>
        
        <Route path='' Component={RecipeReviewCard}/>

      </Routes>
      

      </Router>

    
  )
}


