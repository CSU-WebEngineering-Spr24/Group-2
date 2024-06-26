import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Home = () =>{
    return(
      <div>
        <h1 class = "colorscheme"> Hearthstone Card Search
        </h1>
        <h3 class = "center">
          Select Cards to Search for cards by name <br></br>
                        Or <br></br> 
          Select Sets to see all cards from a set
        </h3>
        <div class = "center">
          <iframe width="640px" height="390px" src= "https://www.youtube.com/embed/QdXl3QtutQI?si=x91tek9PGYthHP84"></iframe>
        </div>
      </div>
    )
}
export default Home