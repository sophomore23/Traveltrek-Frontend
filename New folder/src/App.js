import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";

import Hotels from './pages/Hotels';
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import Planyourtrip from './pages/Planyourtrip';
import BookingDetails from './pages/BookingDetails';
import BookingFlight from './pages/BookingFlight';
import BookingTrip from './pages/BookingTrip';
import Details from './pages/Details';
import Flight from './pages/Flight'
function App() {
  return (
    
   <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/hotels" element={<Hotels />} />
           <Route path="/planyourtrip" element={<Planyourtrip />} />
           <Route path="/bookingtrip" element={<BookingTrip />} />
           <Route path="/bookingdetails" element={<BookingDetails />} />
           <Route path="/flights" element={<Flight />} />
           <Route path="/bookingflight" element={<BookingFlight />} />
           <Route path="/contactus" element={<Contactus />} />
           <Route path="/location/:id" element={<Details/>}/>
           <Route path="/aboutus" element={<Contactus/>}/>
          </Routes>
    </BrowserRouter> 
    
   
    
   
  );
}

export default App;
