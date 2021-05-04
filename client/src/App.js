import React, { useState, useEffect } from 'react';
import Axios from "axios"

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'



import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [movieName, setMovieName] = useState('');
  const [review, setReview] = useState('');
  const [movieReviewList, setMovieReviewList] = useState('');
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
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
    setNewReview('')
  }

  return (<>

    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo512.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
          CRUD APPLICATION
        </Navbar.Brand>
    </Navbar>
    <Container fluid>
      <Container>
        <Row className="justify-content-md-center"><h1>CRUD APPLICATION</h1></Row>
        <br />

        <Row className="justify-content-md-center">

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Movie Name:</Form.Label>
              <Form.Control type="text" name="movieName" onChange={(e) => {
                setMovieName(e.target.value)
              }} />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Movie Review:</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => {
                setReview(e.target.value)
              }} />

            </Form.Group>
            <Button variant="primary" type="submit" onClick={submitReview}>
              Submit
  </Button>
          </Form>
        </Row>
        <br />

        <Row className="justify-content-md-center">
          {
          movieReviewList.length > 0 ? (        
          movieReviewList.map((val) => {
            return (
              <Col md="auto">
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{val.movieName}</Card.Title>
                    <Card.Text>
                      {val.movieReview}
                    </Card.Text>
                    <Card.Link>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" onChange={(e) => {
                          setNewReview(e.target.value)
                        }} /><br/>
                        <Button variant="primary" type="submit" onClick={() => { updateReview(val.movieName) }}>Update</Button>
                      </Form.Group>
                      <Card.Link>
                      <Button variant="primary" type="submit" onClick={() => { deleteReview(val.movieName) }}>Delete</Button>
                    </Card.Link>
                    </Card.Link>
                  </Card.Body>
                </Card>
                <br />

              </Col>
            )
          })
        
          ): ('')
        }
        </Row>
      </Container>
    </Container>
  </>
  );
}

export default App;
