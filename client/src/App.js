import React, { useState, useEffect } from 'react';
import Axios from "axios"

import './App.css';

function App() {
  
  const [movieName, setMovieName] = useState('');
  const [review, setReview] = useState('');
  const [movieReviewList, setMovieReviewList] = useState('');
  const [newReview, setNewReview] = useState('');

  useEffect(() =>{
    Axios.get("http://localhost:3333/api/get").then((response) => {
      setMovieReviewList(response.data);
    });
  }, []);

  const submitReview = () => {
    Axios.post("http://localhost:3333/api/insert", {
      movieName: movieName,
      movieReview: review,
    })

    setMovieReviewList([
      ...movieReviewList,
      { movieName: movieName, movieReview: review },
    ]);
  };

  const deleteReview = (movie) => {
    Axios.delete(`http://localhost:3333/api/delete/${movie}`);
  }

  const updateReview = (movie) => {
    Axios.put('http://localhost:3333/api/update', {
      movieName: movie,
      movieReview: newReview,
    });
    setNewReview("")
  }

  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      <div className="form">
        <label>Movie Name:</label>
        <center><input type="text" name="movieName" onChange={(e) => {
          setMovieName(e.target.value)
        }}/></center>
        <label>Movie Review:</label>
        <center><input type="text" name="review" onChange={(e) => {
          setReview(e.target.value)
        }}/></center>
        <center><button onClick={submitReview}>Submit</button></center>
<center>
  
{movieReviewList.map((val) => {
        return (
        <div className="card">
          <h3>{val.movieName}</h3>
          <p>{val.movieReview}</p>

          <button onClick={() => {deleteReview(val.movieName)}}>Delete</button>
          <input type="text" onChange={(e) => {
            setNewReview(e.target.value)
          }} />
          <button onClick={() => {updateReview(val.movieName)}}>Update</button>
        </div>
        )
      })}

</center>
      </div>
    </div>
    
  );
}

export default App;
