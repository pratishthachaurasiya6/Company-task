// import axios from 'axios';
// import React from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import FetchBook from '../FetchBook';

// const DeleteBook = () => {
//     const Navigate = useNavigate();
//     const id = useParams().id;

//     const deleteBook = async () => {
//         await axios.delete(`http://localhost:3200/books/${id}`)
//             .then((res) => res.data)
//             .then(() => Navigate('/Home'))
//             .catch((err) => {
//                 console.log(err);
//             });
//     }

//     return (
//         <FetchBook deleteBook={deleteBook} newData="Hello" />
//     );
// }

// export default DeleteBook;
