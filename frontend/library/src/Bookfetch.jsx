import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// const API = "http://localhost:3000/books"
// const API = "https://jsonplaceholder.typicode.com/users"

const Bookfetch = () => {

    const [book, setBook] = useState([])

    const getBook = async () => {
        try {
            const response = await fetch('http://localhost:3200/books')
            const data = await response.json()
            setBook(data)
            // console.log(data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getBook()
    }, [])

    return (
        <div>
           
            <div className="container col-md ">
                <div className="row"> 
                    {
                        book.map((cval, id) => {

                            return (
                                
                                <Card style={{ width: '18rem' }} key={id} className="container p-0 my-3">
                                    <Card.Img variant="top" src={cval.image} style={{ height:'22rem' }}/>
                                    <Card.Body>
                                        <Card.Title>{cval.name}</Card.Title>
                                        <Card.Text>
                                            <p>{cval.author}</p>
                                            <p> {cval.description} </p>
                                            <p> <i class="fa fa-inr"></i> <strong>{cval.price}</strong></p>
                                        </Card.Text>
                                        <div className='container'>
                                            <div className="row">
                                           <Button variant="warning" className="mb-2"> <Link to="/update" className="text-decoration-none text-light">  Update Book  </Link></Button>   
                                        
                                        <Button variant="success">Delete Book</Button>
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

export default Bookfetch
