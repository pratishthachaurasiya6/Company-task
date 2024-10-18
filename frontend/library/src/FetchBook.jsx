import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'


const FetchBook = () => {

  const [book, setBook] = useState([])

  const getBook = async () => {
    try {

      const res = await axios.get('http://localhost:3200/books')
      setBook(res.data)

    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getBook()
  }, [])

  console.log(book)

  // delete book
  const Navigate = useNavigate();

  const deleteBook = async (remove) => {
    const confirmDelete = window.confirm('Are you sure to delete this book?');
    await axios.delete(`http://localhost:3200/books/${remove}`)
      .then((res) => res.data)
      .then(() => Navigate('/Home'))

      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>

      <div className="container col-md ">
        <div className="row">
          {
            book.map((cval, i) => {

              return (

                <Card style={{ width: '18rem' }} key={i} className="container p-0 my-3">
                  <Card.Img variant="top" src={cval.image} style={{ height: '22rem' }} />
                  <Card.Body>
                    <Card.Title>{cval.name}</Card.Title>
                    <Card.Text>
                      <p>{cval.author}</p>
                      <p> {cval.description} </p>
                      <p> <i class="fa fa-inr"></i> <strong>{cval.price}</strong></p>
                    </Card.Text>
                    <div className='container'>
                      <div className="row">
                        <Button variant="warning" className="mb-2"> <Link to={`/update/${cval._id}`} className="text-decoration-none text-light">  Update Book  </Link></Button>

                   
                        <Button variant="success" onClick={() => deleteBook(cval._id)}>Delete Book</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

              )
            })
          }
        </div>
      </div>
    </div>



  )
}

export default FetchBook