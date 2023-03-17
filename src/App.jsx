import React from 'react'
import Movies from './Movies';
import {Route,Routes} from "react-router-dom" 
import Moviedetails from './Moviedetails';

const App = () => {
  return(
    <div>
      <Routes>
        <Route path='/' element={<Movies/>}/>
        <Route path='/:id' element={<Moviedetails/>}/>
      </Routes>
  </div>
  
  )
}



export default App;
