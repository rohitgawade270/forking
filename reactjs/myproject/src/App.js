import React from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import ResponsiveAppBar from './components/AppBar';
import RecipeReviewCard from './components/Card';
import Login from './components/Login';




export default function App() {
  return (
    
    <Router>
      
      <ResponsiveAppBar/>
       <login/>
   
      
      
      <Routes>
        
        <Route path='/' element={<RecipeReviewCard />}/>
        <Route path='/login' element={<Login />} />

      </Routes>
      

      </Router>

    
  )
}


