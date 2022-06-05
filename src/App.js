import React, { Fragment } from 'react'
import Navbar from "./components/Navbar"
import Heading from './components/Heading';
import Footer from './components/Footer';
import Slide from './components/Slide';
import Card from './components/Card';
import Service from './components/Service';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Guides from './components/Guides';
import Contact from './components/Contact';
import AddBooking from './components/AddBooking';
import TourList from './components/TourList';
// import {Switch} from "react-router-dom";

export const App = () =>{
  
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Heading />}/>
            </Routes>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Fragment><Slide/><Service/><Card/><Guides/></Fragment>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/addBook" element={<AddBooking/>}/>
                <Route path="/tour" element={<TourList/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
  
};
export default App;


