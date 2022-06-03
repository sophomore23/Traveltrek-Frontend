import React, { useState } from "react";
import { Grid,Paper, TextField, Button } from '@mui/material'

const Search = (props) => {
  const [departureDate, setdepartureDate] = useState("");
  const[classType, setclassType]= useState("");
  const [itineraryType, setitineraryType] = useState("");
  const [locationArrival, setlocationArrival] = useState("");
  const [locationDeparture, setlocationDeparture] = useState("");
  const [sortOrder, setsortOrder] = useState("");




  const handledepartureDateInputChanges = (e) => {
    setdepartureDate(e.target.value);
  }
  const handleclassTypeInputChanges = (e) => {
    setclassType(e.target.value);
  }
  const handleitineraryTypeInputChanges = (e) => {
    setitineraryType(e.target.value);
  }
  const handlelocationArrivalInputChanges = (e) => {
    setlocationArrival(e.target.value);
  }
  const handlelocationDepartureInputChanges = (e) => {
    setlocationDeparture(e.target.value);
  }
  const handlesortOrderInputChanges = (e) => {
    setsortOrder(e.target.value);
  }



  const resetLocalInputField = () => {
    setdepartureDate("")
    setclassType("")
    setitineraryType("")
    setlocationArrival("")
    setlocationDeparture("")
    setsortOrder("")
  }

  
  
  

  const callLocalFunction = (e) => {
    e.preventDefault();
    props.search (departureDate,classType,itineraryType, locationArrival, locationDeparture,sortOrder);
    
    resetLocalInputField();
  }
  const paperStyle={padding :40,height:'80vh',width:500, margin:"20px auto"}
  
  const btnstyle={margin:'8px 0'}

  return (
   

    <Grid>
        <Paper elevation={10} style={paperStyle} >
            <Grid align='center'>
                 
                <h2 style={{fontFamily:"Cosmic"}}>Search Flights </h2>
            </Grid>
  
            
    
            <TextField style={{paddingBottom:"0.5rem"}} type="text" value={departureDate} label='DepartureDate' placeholder='Departure Date' fullWidth required  onChange={handledepartureDateInputChanges}/>
            <TextField style={{paddingBottom:"0.5rem"}} type="text" value={classType} label='ClassType' placeholder='Class Type'  fullWidth required  onChange={handleclassTypeInputChanges}/>
            <TextField style={{paddingBottom:"0.5rem"}} type="text" value={itineraryType} label='ItineraryType' placeholder='Itinerary Type' fullWidth required  onChange={handleitineraryTypeInputChanges}/>
            <TextField style={{paddingBottom:"0.5rem"}} type="text" value={locationArrival} label='LocationArrival' placeholder='Location of Arrival' fullWidth required  onChange={handlelocationArrivalInputChanges}/>
            <TextField style={{paddingBottom:"0.5rem"}} type="text" value={locationDeparture} label='LocationDeparture' placeholder='Location of Departure' fullWidth required onChange={handlelocationDepartureInputChanges}/>
            <TextField style={{paddingBottom:"0.5rem"}} type="text" value={sortOrder} label='Sort Order' placeholder='SortOrder' fullWidth required onChange={handlesortOrderInputChanges}/>

            
            <Button  onClick={callLocalFunction} type='submit'  color='primary' variant="contained" style={btnstyle} fullWidth>submit</Button>
            
           
            
        </Paper>
    </Grid>
    
    );
}

export default Search;