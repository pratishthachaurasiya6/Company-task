import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddBookForm = () => {
   const Navigate = useNavigate();

    const[add, setAdd]= useState(
       {
        name: "",
        author:"",
        description: "",
        price:"",
        image:"",
       }
    )

    const handleChange=(e)=>{
     setAdd({
        ...add,
        [e.target.name]:e.target.value
     })
    }

    const addData = async()=>{
       await axios.post('http://localhost:3200/books', {
            name: String(add.BookName),
            author: String(add.Author),
            description: String(add.Description),
            price: Number(add.price),
            image: String(add.image),
            
        }).then((r)=>r.data)
    } 


    const handleSubmit = (e) => {
        e.preventDefault();
        addData().then(()=>Navigate("/"))
    }




    return (
        <>
            <div className="container col-md-6 mt-3">
                <div className='text-center my-2'> <h3>Add Book</h3></div>
                <Form className="row g-2" onSubmit={handleSubmit}>
                    <div className="col-md-12">
                        <label className="my-2">Book Name</label>
                        <input type="text" className="form-control"
                            id="inputText"
                            placeholder="" 
                            value={add.BookName}
                            name="BookName"
                            onChange={handleChange}/>
                    </div>


                    <div className="col-md-12">
                        <label className="my-2">Author</label>
                        <input type="text" className="form-control"
                            id="inputAddress"
                            placeholder="" 
                            value={add.Author}
                            name="Author"
                            onChange={handleChange}/>
                    </div>


                    <div className="col-md-12">
                        <label className="my-2">Description</label>
                        <input type="text" className="form-control"
                            id="inputCountry" aria-rowcount={3}
                            placeholder=""
                            value={add.Description}
                            name="Description"
                            onChange={handleChange} />

                    </div>

                    <div className="col-md-12">
                        <label className="my-2"><i class="fa fa-inr"></i> Price</label>
                        <input type="number" className="form-control"
                            id="inputPrice"
                            placeholder="" 
                            value={add.price}
                            name="price"
                            onChange={handleChange}/>
                    </div>
                    <div className="col-md-12">
                        <label className="my-2">Image (url)</label>
                        <input type="text" className="form-control"
                            id="inputCity"
                            placeholder=""
                            value={add.image}
                            name="image"
                            onChange={handleChange} />
                    </div>


                    <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-dark w-50 my-3">ADD BOOK </button>
                    </div>

                </Form>

            </div>
        </>
    )
}

export default AddBookForm
