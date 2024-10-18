import "./App.css";
// import Bookfetch from "./Bookfetch";
import UpdateForm from './Compoents/UpdateForm';
import AddBookForm from './Compoents/AddBookForm';
import NavbarComp from './Compoents/NavbarComp';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import FetchBook from "./FetchBook";
 
function App() {
  return (
    <>
    <Router>
      <NavbarComp/>
      <Routes>
        {/* <Route path='/' element={<Bookfetch />} ></Route> */}
        <Route path='/Home' element={<FetchBook/>} ></Route>
        <Route path='/' element={<FetchBook/>} ></Route>
        {/* <Route path='/update' element={ <UpdateForm/>} ></Route> */}
        <Route path='/update/:id' element={ <UpdateForm/>} ></Route>
        <Route path='/add' element={ <AddBookForm/>} ></Route>
      
      </Routes>
    </Router>

      
     
    </>
    // <FetchBook/>
  );
}

export default App;