import React,{ useState, useCallback } from "react";
import { Carousel, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";

import taj from "../images/TajMahal.jpg";
import Mountains from "../images/Mountain.jpg";
import Hills   from "../images/Hills.jpg";
import Shimla from "../images/Shimla.jpg";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import { Row, Col } from "react-bootstrap";
import Gallery from "react-photo-gallery";
import { Modal, ModalGateway } from "react-images";
import { photos } from "../images/photos";

import { Container } from "@mui/material";
import Footer from "../components/Footer";

const Home = () => {
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


  return (
    <div>
    <div>
    
      <Navbar />
      <Carousel style={{ height: "650px" }} fade>
        <Carousel.Item style={{ height: "650px" }}>
          <img className="d-block w-100 h-100" src={Mountains} alt="First slide" />
          <Carousel.Caption>
            <h2 Class="font" >Dream a little dream.</h2>
            <p>Grab Exciting Deals </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "650px" }}>
          <img className="d-block w-100 h-100" src={Hills} alt="Second slide" />

          <Carousel.Caption>
           <h2>Peace, Love, and Harmony! </h2>
            <p>Grab Exciting Deals </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "650px" }}>
          <img className="d-block w-100 h-100" src={taj} alt="Third slide" />

          <Carousel.Caption>
          <h2>Campaign's Like Heaven</h2>
            <p>Experiential journeys will make you a storyteller</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container
        style={{
          paddingTop: "3rem",
          paddingBottom: " 3rem",
          fontFamily: "monospace",
          textAlign: "center",
        }}
      >
        <h4 style={{ color: "GrayText" }}>GREAT PLACES TO VISIT</h4>
        <img src={image2} />
        <h5>
          Compellingly embrace empowered e-business after user friendly
          intellectual capital. Interactively actualize front-end processes with
          effective convergence.
        </h5>
      </Container>

      <Row xs={1} md={5} style={{ margin: "auto" }} className="g-4">
        <Col>
          <Card style={{boxShadow:"20"}}>
          <Card.Img
            style={{height:"200px"}}
              variant="top"
              src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60/100px160"
            />
            <Card.Body style={{ backgroundColor: "  #ff8566" }}>
              <Card.Title>Delhi</Card.Title>
              <Card.Text>
              <p> Top 5 place to visit </p>
              <ol>
               <li>The Red Fort</li>
               <li>Qutub Minar</li>
                <li>The Lotus Temple</li>
                <li>India Gate</li>
                <li>Jama Masjid</li>
               </ol>
             
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ objectFit: "cover", height:"200px"  }}
            

              variant="top"
              src="https://images.unsplash.com/photo-1595658658481-d53d3f999875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bXVtYmFpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60/100px160"
            />
            <Card.Body style= {{backgroundColor: " #4d94ff"}}>
              <Card.Title>Mumbai</Card.Title>
              <Card.Text  >
              <p> Top 5 place to visit </p>
              <ol>
               <li> Gateway of India</li>
               <li> Marine Drive</li>
                <li> Taj Mahal Palace</li>
                <li>Kanheri Caves</li>
                <li>Shree Siddhivinayak Temple</li>
               </ol>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ objectFit: "cover",height:"200px" }}
              variant="top"
              src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body style={{ backgroundColor: "#ff5757" }}>
              <Card.Title>Jaipur</Card.Title>
              <Card.Text>
              <p> Top 5 place to visit </p>
              <ol>
               <li> Jantar Mantar</li>
               <li> Hawa Mahal</li>
                <li> Nahargarh Fort</li>
                <li>Jaigarh</li>
                <li>Panna Meena Ka Kund</li>
               </ol>
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ objectFit: "cover",height:"200px" }}
              variant="top"
              src="https://images.unsplash.com/photo-1625317201684-b5ab0b282552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNoaW1sYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body style={{ backgroundColor: " #ffd699" }}>
              <Card.Title>Shimla</Card.Title>
              <Card.Text>
              <p> Top 5 place to visit </p>
              <ol>
               <li> Jakhu Temple</li>
               <li> The Mall</li>
                <li> Kalka- Shimal Railway</li>
                <li>The Ridge</li>
                <li>Kali Bari Temple</li>
               </ol>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ objectFit: "cover",height:"200px" }}
              variant="top"
              src="https://images.unsplash.com/photo-1592726129893-0b0ff79c8a2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXVubmFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body style={{ backgroundColor:"#d5ff80"}}>
              <Card.Title>Munnar</Card.Title>
              <Card.Text>
              <p> Top 5 place to visit </p>
              <ol>
               <li>Mountain Hiking  </li>
               <li> Tea Trail Walking</li>
                <li> Munnar Site-seeing</li>
                <li>Tea Garden visit</li>
                <li>GHill Station</li>
               </ol>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ objectFit: "cover",height:"200px" }}
              variant="top"
              src="https://images.unsplash.com/photo-1617653202545-931490e8d7e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5kYW1hbiUyMGFuZCUyMG5pY29iYXIlMjBpc2xhbmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body  style={{ backgroundColor:"#d9d9d9"}}>
              <Card.Title>Andaman & Nicobar</Card.Title>
              <Card.Text>
              <p> Top 5 place to visit </p>
              <ol>
               <li>Port Blair</li>
               <li> Baratang Island</li>
                <li>Diglipur</li>
                <li>Rangat</li>
                <li></li>
               </ol>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ objectFit: "cover",height:"200px" }}
              variant="top"
              src="https://images.unsplash.com/photo-1575994532957-773da2f83eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dWRhaXB1cnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body style={{ backgroundColor: "#ffbd59" }}>
              <Card.Title>Udaipur</Card.Title>
              <Card.Text>
              <p> Top 5 place to visit </p>
              <ol>
               <li>City Palce</li>
               <li>Lake Pichola</li>
                <li>Lake Palace</li>
                <li>Vintage Car Museum</li>
                <li>Bagore ki Haveli</li>
               </ol>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ objectFit: "cover",height:"200px" }}
              variant="top"
              src="https://images.unsplash.com/photo-1612099452850-ed8efe7d58ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25vdyUyMG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              <Card.Title>Kashmir</Card.Title>
              <Card.Text>
              <p> Top 5 place to visit </p>
              <ol>
               <li>Dal Lake</li>
               <li> Sonamarg</li>
                <li>Shankaracharya Hill</li>
                <li>Gulmarg Gondola.</li>
                <li>Apharwat Peak</li>
               </ol>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ objectFit: "cover",height:"200px" }}
              variant="top"
              src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body  style={{backgroundColor:"#668cff"}}>
              <Card.Title>Goa</Card.Title>
              <Card.Text>
              <p> Top 5 place to visit </p>
              <ol>
               <li>Panaji</li>
               <li>Vasco Da Gama </li>
                <li>Calangute</li>
                <li>Mapusa</li>
                <li>Margao</li>
               </ol>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ objectFit: "cover",height:"200px" }}
              variant="top"
              src="https://images.unsplash.com/photo-1566560073340-0ee82cb29074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGVofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body style={{ backgroundColor: "#5ce1e6" }}>
              <Card.Title>Leh</Card.Title>
              <Card.Text>
              <p> Top 5 place to visit </p>
              <ol>
               <li>Wonder Of Ladakh</li>
               <li> Dhanti Stupa</li>
                <li>Magentic Hill</li>
                <li>Tanglang La</li>
                <li>Hemis National park</li>
               </ol>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Box
        sx={{
          height: 25,
          backgroundColor: "inherit",
        }}
      />
      <Box
        sx={{
          width: 1300,
          height: 170,
          margin: "auto",
          borderRadius: 30,
          padding: 5,
          boxShadow: 20,
          paddingTop: 5,
          backgroundColor: "#D3D3D3",
        }}
      >
        <h1
          style={{
            fontFamily: "Times New Roman",
            paddingLeft: "14%",
            paddingTop: "1rem",
          }}
        >
          Travel is the only thing you buy that makes you richer
        </h1>
      </Box>
      <Box
        sx={{
          height: 25,
          backgroundColor: "inherit",
        }}
      />

     
      
      </div>
      <div>
      <Container
        style={{
          paddingTop: "1rem",
          
          fontFamily: "Cosmic",
          textAlign: "center",
        }}
      >
       
        <h1>Photo Gallery</h1>
      </Container>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      </div>
      <Container
        style={{
          paddingTop: "3rem",
          paddingBottom: " 3rem",
          fontFamily: "monospace",
          textAlign: "center",
        }}
      >
        <h4 style={{ color: "GrayText" }}>YOUR KIND OF HOLIDAY</h4>
        <img src={image4} />
        <h6 style={{ color: "GrayText" }}>
        Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology after plug-and-play networks.
        </h6>
        
      </Container>
      <div>
      <Footer/>
    </div> 
      
    </div>
    
  );
};
export default Home;