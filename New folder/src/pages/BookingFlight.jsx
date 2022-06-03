
import React,{ useState } from "react";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Navbars from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import Payment from "../components/Payment";


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [numberofadults, setnumberofadults]=useState("");
  const[adhar,setAdhar]=useState('');
  const[gender, setGender]=useState("");
 
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await fetch("http://localhost:4545/flightdetails", {
        method: "POST",
        //mode:"no-cors",
        headers:{"Access-Control-Allow-Origin":"*",
      "Content-Type":"application/json"},
        body: JSON.stringify({
          name: name,
          
          email: email,
          phone:phone,
          gender:gender,
          numberofadults: numberofadults,
          adhar:adhar,
          
        }),
      })
      .then(res=>res.json())
      .then((response)=>{
        console.log(response)
        if (response.status === 400) {
          setMessage("Some error occured");
           
        } else {
          setMessage("User created successfully");
        }
      });
     
      
      
    } catch (err) {
      console.log(err);
    }
  };
  
  const paperStyle={padding :40,height:'95vh',width:500, margin:"20px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'8px 0'}
  return (
   
    <div style={{ 
        backgroundImage: `url("https://images.unsplash.com/photo-1589124223359-1ef39c61ee88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` 
      }}>
       <div>
        <Navbars/>
        </div>
      <div>
    <Grid>
        <Paper elevation={10} style={paperStyle} >
            <Grid align='center'>
                 <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2 style={{fontFamily:"Cosmic"}}>Booking Details </h2>
            </Grid>
  
            {/* <TextField style={{paddingBottom:"0.5rem"}} type="text" value={id} label='ID' placeholder='ID' fullWidth required  onChange={(e) => setID(e.target.value)}/> */}
            <TextField style={{paddingBottom:"0.5rem"}} type="text" value={name} label='name' placeholder='Enter name' fullWidth required  onChange={(e) => setName(e.target.value)}/>
            <TextField style={{paddingBottom:"0.5rem"}} type="text" value={email} label='email' placeholder='Enter email'  fullWidth required  onChange={(e) => setEmail(e.target.value)}/>
            <TextField style={{paddingBottom:"0.5rem"}} type="text" value={phone} label='phone' placeholder='Enter phone' fullWidth required  onChange={(e) => setPhone(e.target.value)}/>
            <TextField style={{paddingBottom:"0.5rem"}} type="text" value={gender} label='gender' placeholder='Enter gender' fullWidth required  onChange={(e) => setGender(e.target.value)}/>
            <TextField style={{paddingBottom:"0.5rem"}} type="text" value={numberofadults} label='Number Of Adults' placeholder='No. of Adults' fullWidth required onChange={(e) => setnumberofadults(e.target.value)}/>
            <TextField style={{paddingBottom:"0.5rem"}} type="text" value={adhar} label='Adhar' placeholder='Enter Adharno' fullWidth required onChange={(e) => setAdhar(e.target.value)}/>

            
            <Button  onClick={handleSubmit} type='submit'  color='primary' variant="contained" style={btnstyle} fullWidth>submit</Button>
            <Payment/>
           
            
        </Paper>
    </Grid>
    </div> 
    <Footer/>
    </div>
  );
}

export default App;