import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer';
import Navbars from '../components/Navbar';
import { Carousel, Card, Container, Button } from "react-bootstrap";
import Destination from "../images/Destination.png";
import ADVENTURE from "../images/ADVENTURE.png";
import Gallery from "react-photo-gallery";
import { Modal, ModalGateway } from "react-images";
import { photos } from "../images/photos";
export default function Details() {
    const { id }=useParams();
    const[data, setData]=useState(null);
    const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

    useEffect(() => {
        const loadLocationData = async () => {
            const response = await fetch(`http://localhost:4545/location/${id}`);
            const result = await response.json();
            
            
                console.log(result);
                
            setData(result);
          };
      
          loadLocationData();
        }, []);
    


  return (
    <div>
    <Navbars/>
    <Carousel style={{ height: "450px" }} fade>
        <Carousel.Item style={{ height: "450px" }}>
          <img className="d-block w-100 h-100" src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide" />
          <Carousel.Caption>
            <h2 Class="font" >Dream a little dream.</h2>
            <p>Grab Exciting Deals </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "450px" }}>
          <img className="d-block w-100 h-100" src="https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Second slide" />

          <Carousel.Caption>
           <h2>Peace, Love, and Harmony! </h2>
            <p>Grab Exciting Deals </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "450px" }}>
          <img className="d-block w-100 h-100" src="https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Third slide" />

          <Carousel.Caption>
          <h2>Campaign's Like Heaven</h2>
            <p>Experiential journeys will make you a storyteller</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    <div style={{paddingTop:"2rem", textAlign: "center"}}>
    <h4 style={{fontFamily:"monospace", color: "GrayText" }}>YOUR KIND OF HOLIDAY</h4>
    <img src={Destination}></img>
    
      
     <Container style={{textAlign: "center"}}>
    { data &&(
        <div>
        <h1> {data.cityname}</h1>
        <h3>{data.statename}</h3>
        <br/>
        <h6> {data.description}</h6>
        <br/>
        <br/>
        <h4>Itinerary for {data.cityname}</h4>
        
        <h6> {data.itinerary}</h6>
        <br/>
       
       
        </div>
    )}
    </Container>
    <Container style={{paddingTop: "1rem",textAlign: "center", paddingBottom:"2rem"}}>
    <Button style={{width:"20rem", height:"3rem", backgroundColor:"black", color:"#00c2c2"}} href='/bookingtrip'>
    <h3>Book now</h3></Button>
    </Container>
    <Container>
    <hr
        style={{
          height: '3px',
        }}/>
      <img style={{width:"70rem"}} src={ADVENTURE}></img>
    </Container>
    </div>
    
    
    <div >
        <Footer/>
    </div>
    </div>
  )
}
