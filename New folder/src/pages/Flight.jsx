import React, { useState, useEffect } from "react";


import Search from "../components/SearchFlight";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import Navbars from "../components/Navbar";
import Footer from "../components/Footer";

const Flight = () => {
  const [loading, setLoading] = useState(false);
  const [flights, setFlight] = useState([]);

  

  const search = (departureDate,classType,itineraryType, locationArrival, locationDeparture,sortOrder) => {
    
     
        fetch(`https://priceline-com-provider.p.rapidapi.com/v1/flights/search?date_departure=${departureDate}&class_type=${classType}&itinerary_type=${itineraryType}&location_arrival=${locationArrival}&location_departure=${locationDeparture}&sort_order=${sortOrder}`,{
          method:'GET',
          headers:{'x-rapidapi-host':'priceline-com-provider.p.rapidapi.com', 'x-rapidapi-key':'9c25c9e93emshf418f7fdd47c11dp16e597jsn17ae3a9959c9'},
          body: JSON.stringify()
        })
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
         
           setLoading(false);
          setFlight(res.airline);
          
        })
    
    
  };

  return (
    <div className="App" style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1589124223359-1ef39c61ee88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` 
    }}>
      
      <Navbars/>
      <Search search={search } />
    
      <div className="movies">
        {loading ? (
          <div style={{ paddingLeft: "50%", paddingTop: "10rem" }}>
            <Box sx={{ display: "flex" }}>
              <CircularProgress color="primary" />
            </Box>
          </div>
        ) : (
         
        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h1>Flight Name</h1></TableCell>
            <TableCell align="center"><h1>Flight code</h1></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {flights.map((flight) => (
            <TableRow
              key={flight.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"><h4>{flight.name}</h4>
                
              </TableCell>
              <TableCell align="center"><h4>{flight.code}</h4></TableCell>
              <Button href="/bookingflight" align="right" style={{backgroundColor:"#1bbd7e", color:"white"}}>Book this Flight</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        )}
        </div>  
      <div>
          <Footer/>
      </div>
      </div>
  );
};

export default Flight;