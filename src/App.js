//import {useState} from 'react' 
import React, { useState } from 'react';
import SearchBar from "./components/SearchBar"
import searchImages from "./api"
import Imagelist from './components/ImageList';

function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async (term) =>{
    const results = await searchImages(term)
    setImages(results)
  }

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit}/>
      <Imagelist images={images}/>
     
    </div>
  )
}

export default App;
