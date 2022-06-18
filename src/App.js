import React, { Fragment ,useEffect} from 'react'
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
import Founder from './components/Founder';
// import {Switch} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Card2 from './components/Card2';
import Balance from './components/Balance';
import Book from './components/Book';
import Logo from './components/Logo';

export const App = () =>{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <Router>
            <Heading />
            <Navbar/>
            <Routes>
                <Route path="/" element={<Fragment><Slide/><Founder/><Service/><Card/><Card2/><Guides/></Fragment>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/addBook" element={<Fragment><Logo/><AddBooking/><TourList/></Fragment>}/>
                <Route path="/tour" element={<Fragment><Logo/><TourList/><Guides/></Fragment>}/>
                <Route path='/balance' element={<Fragment><Logo/><Balance/></Fragment>}/>
                <Route path='/book' element={<Book/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
  
};
export default App;


