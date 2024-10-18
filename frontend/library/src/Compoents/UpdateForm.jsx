import axios from "axios";
import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const UpdateForm = () => {
  const [update, setUpdate] = useState({});
  const id = useParams().id;
  const Navigate = useNavigate();

  useEffect(() => {
    const findBy = async () => {
      await axios
        .get(`http://localhost:3200/books/${id}`)
        .then((res) => res.data)
        .then((data) => setUpdate(data));
    };
    findBy();
  }, [id]);
  console.log(id);

  const updateBook = async () => {
    await axios
      .put(`http://localhost:3200/books/${id}`, {
        name: String(update.name),
        author: String(update.author),
        description: String(update.description),
        price: Number(update.price),
        image: String(update.image),
      })
      .then((res) => res.data);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook().then(() => Navigate("/"));

  };

  const handleChange = (e) => {
    setUpdate({
      ...update,
      [e.target.name]: e.target.value,
    });
  };

  console.log(update);

  return (
    <>
      <div className="container col-md-6 mt-3">
        <div className="text-center my-2">
          {" "}
          <h3>Update Book</h3>
        </div>
        <Form className="row g-2" onSubmit={handleSubmit}>
          <div className="col-md-12">
            <label className="my-2">Book Name</label>
            <input
              type="text"
              className="form-control"
              id="inputText"
              placeholder=""
              name="name"
              value={update.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-12">
            <label className="my-2">Author</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder=""
              name="author"
              value={update.author}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-12">
            <label className="my-2">Description</label>
            <input
              type="text"
              className="form-control"
              id="inputCountry"
              aria-rowcount={3}
              placeholder=""
              name="description"
              value={update.description}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-12">
            <label className="my-2">
              <i class="fa fa-inr"></i>
            </label>
            <input
              type="number"
              className="form-control"
              id="inputPrice"
              placeholder=""
              name="price"
              value={update.price}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-12">
            <label className="my-2">Image (url)</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              placeholder=""
              name="image"
              value={update.image}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-12 text-center">
            <button type="submit" className="btn btn-dark w-50 my-3">
              UPDATE BOOK{" "}
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default UpdateForm;
