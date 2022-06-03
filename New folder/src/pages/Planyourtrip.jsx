import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbars from "../components/Navbar";
import { Link } from 'react-router-dom';
import { Button, Card , Container} from "react-bootstrap";
import image4 from "../images/image4.png"
import Footer from "../components/Footer";
import PYT from "../images/PYT.png"
import LocationDetails from "./LocationDetails";
export default function Planyourtrip() {
 
 
   const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5
    }
  };
   
  
  return (
    <div className="App">
     <Navbars/>
     <container className="Videoss">
       <img className="d-block w-100 h-100" src={PYT}/>
      </container>
      <h1 style={{fontFamily:"Times New Roman", paddingTop:"4rem"}}>Hill Stations</h1>
      <div style={{padding:"1rem", position: "relative" }}>
        <Carousel responsive={responsive}>
          <div><Card style={{height:"24rem" ,boxShadow:"20"}}>
            <Card.Img
              style={{height:"12rem" }}
              variant="top"
              src="https://images.unsplash.com/photo-1606220975728-f94e0d9ed642?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlsbCUyMHN0YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
            />
            <Card.Body style={{ backgroundColor: "#DCDCDC" }}>
              <Card.Title>Manali</Card.Title>
              <Card.Text>
              Himachal Pradesh
              </Card.Text>
              <Card.Text>
               4N-5D Trip @
               7500/-
              </Card.Text>
             
              
              <Link to={`/location/Manali`} className="mr-2">
          <button className="btn btn-info mt-2 mb-2 card-btn-1" >More Info!</button>
        </Link>
            </Card.Body>
          </Card></div>
          <div><Card style={{height:"24rem" ,boxShadow:"20"}}>
            <Card.Img
              style={{height:"12rem" }}
              variant="top"
              src="https://images.unsplash.com/photo-1477601263568-180e2c6d046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c25vd2ZhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
            />
            <Card.Body style={{ backgroundColor: "#DCDCDC" }}>
              <Card.Title>Srinagar</Card.Title>
              <Card.Text>
              Jammu & Kashmir
              </Card.Text>
              <Card.Text>
               6N-7D Trip @
               15500/-
              </Card.Text>
              <Link to={`/location/Srinagar`} className="mr-2">
          <button className="btn btn-info mt-2 mb-2 card-btn-1" >More Info!</button>
        </Link>
              
            </Card.Body>
          </Card></div>
          <div><Card style={{height:"24rem" ,boxShadow:"20"}}>
            <Card.Img
              style={{height:"12rem" }}
              variant="top"
              src="https://images.unsplash.com/photo-1549136430-c2e0aadfc69f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25vd2ZhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
            />
            <Card.Body style={{ backgroundColor: "#DCDCDC" }}>
              <Card.Title>Gulmarg</Card.Title>
              <Card.Text>
              Jammu & Kashmir
              </Card.Text>
              <Card.Text>
               5N-6D Trip @
               12500/-
              </Card.Text>
              <Link to={`/location/Gulmarg`} className="mr-2">
          <button className="btn btn-info mt-2 mb-2 card-btn-1" >More Info!</button>
        </Link>
            </Card.Body>
          </Card></div>
          <div><Card style={{height:"24rem" ,boxShadow:"20"}}>
            <Card.Img
              style={{height:"12rem" }}
              variant="top"
              src="https://images.unsplash.com/photo-1562413181-9013f9846bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FuZ3Rva3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
            />
            <Card.Body style={{ backgroundColor: "#DCDCDC" }}>
              <Card.Title>Gangtok</Card.Title>
              <Card.Text>
              Sikkim
              </Card.Text>
              <Card.Text>
               5N-6D Trip @
               12500/-
              </Card.Text>
              <Link to={`/location/Gangtok`} className="mr-2">
          <button className="btn btn-info mt-2 mb-2 card-btn-1" >More Info!</button>
        </Link>
            </Card.Body>
          </Card></div><div><Card style={{height:"24rem" ,boxShadow:"20"}}>
            <Card.Img
              style={{height:"12rem" }}
              variant="top"
              src="https://images.unsplash.com/photo-1598885276379-809e0d401fa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2FuZ3Rva3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
            />
            <Card.Body style={{ backgroundColor: "#DCDCDC" }}>
              <Card.Title>Dehradun</Card.Title>
              <Card.Text>
              Uttarakhand
              </Card.Text>
              <Card.Text>
               6N-7D Trip @
               10500/-
              </Card.Text>
              <Link to={`/location/Dehradun`} className="mr-2">
          <button className="btn btn-info mt-2 mb-2 card-btn-1" >More Info!</button>
        </Link>
            </Card.Body>
          </Card></div><div><Card style={{height:"24rem" ,boxShadow:"20"}}>
            <Card.Img
              style={{height:"12rem" }}
              variant="top"
              src="https://images.unsplash.com/photo-1635346537940-9d51faeb6e32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FuZ3Rva3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
            />
            <Card.Body style={{ backgroundColor: "#DCDCDC" }}>
              <Card.Title>Shimla</Card.Title>
              <Card.Text>
              Himachal Pradesh
              </Card.Text>
              <Card.Text>
               6N-7D Trip @
               10500/-
              </Card.Text>
              <Link to={`/location/Shimla`} className="mr-2">
          <button className="btn btn-info mt-2 mb-2 card-btn-1" >More Info!</button>
        </Link>
            </Card.Body>
          </Card></div><div><Card style={{height:"24rem" ,boxShadow:"20"}}>
            <Card.Img
              style={{height:"12rem" }}
              variant="top"
              src="https://images.unsplash.com/photo-1562528064-b014e32c46df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbmd0b2t8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
            />
            <Card.Body style={{ backgroundColor: "#DCDCDC" }}>
              <Card.Title>Kasol</Card.Title>
              <Card.Text>
              Himachal Pradesh
              </Card.Text>
              <Card.Text>
               7N-8D Trip @
               16500/-
              </Card.Text>
              <Link to={`/location/Kasol`} className="mr-2">
          <button className="btn btn-info mt-2 mb-2 card-btn-1" >More Info!</button>
        </Link>
            </Card.Body>
          </Card></div><div><Card style={{height:"24rem" ,boxShadow:"20"}}>
            <Card.Img
              style={{height:"12rem" }}
              variant="top"
              src="https://images.unsplash.com/photo-1551155311-88cda3ebe650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdhbmd0b2t8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
            />
            <Card.Body style={{ backgroundColor: "#DCDCDC" }}>
              <Card.Title>Leh Ladakh</Card.Title>
              <Card.Text>
              Jammu & Kashmir
              </Card.Text>
              <Card.Text>
               7N-8D Trip @
               20500/-
              </Card.Text>
              <Link to={`/location/LehLadakh`} className="mr-2">
          <button className="btn btn-info mt-2 mb-2 card-btn-1" >More Info!</button>
        </Link>
            </Card.Body>
          </Card></div>
        </Carousel>
      </div>
      <h1 style={{fontFamily:"Times New Roman", paddingTop:"2rem"}}>Heritage Sites</h1>
      <div style={{ position: "relative", paddingTop:"1rem", paddingBottom:"2rem" }}>
        <Carousel responsive={responsive}>
        <div><Card style={{height:"24rem" ,boxShadow:"20"}}>
            <Card.Img
              style={{height:"12rem" }}
              variant="top"
              src="https://images.unsplash.com/photo-1587295656906-b06dca8f2340?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFqYXN0aGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
            />
            <Card.Body style={{ backgroundColor: "#DCDCDC" }}>
              <Card.Title>Jaipur</Card.Title>
              <Card.Text>
              Rajasthan
              </Card.Text>
              <Card.Text>
               4N-5D Trip @
               10500/-
              </Card.Text>
              <Link to={`/location/Jaipur`} className="mr-2">
          <button className="btn btn-info mt-2 mb-2 card-btn-1" >More Info!</button>
        </Link>
            </Card.Body>
          </Card></div>
          <div><Card style={{height:"24rem" ,boxShadow:"20"}}>
            <Card.Img
              style={{height:"12rem" }}
              variant="top"
              src="https://media.istockphoto.com/photos/mehrangharh-fort-and-jaswant-thada-mausoleum-in-jodhpur-rajasthan-picture-id805563154?b=1&k=20&m=805563154&s=170667a&w=0&h=o_qAAzJKWXDTzXmpy0hdDIF0pfM2ERsMFu_X_umO4lI="
            />
            <Card.Body style={{ backgroundColor: "#DCDCDC" }}>
              <Card.Title>Kumbalgarh</Card.Title>
              <Card.Text>
              Rajasthan
              </Card.Text>
              <Card.Text>
               2N-3D Trip @
               6500/-
              </Card.Text>
              <Link to={`/location/Kumbalgarh`} className="mr-2">
          <button className="btn btn-info mt-2 mb-2 card-btn-1" >More Info!</button>
        </Link>
            </Card.Body>
          </Card></div><div><Card style={{height:"24rem" ,boxShadow:"20"}}>
            <Card.Img
              style={{height:"12rem" }}
              variant="top"
              src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60/100px160"
            />
            <Card.Body style={{ backgroundColor: "#DCDCDC" }}>
              <Card.Title>Delhi</Card.Title>
              <Card.Text>
              Delhi
              </Card.Text>
              <Card.Text>
               2N-3D Trip @
               5500/-
              </Card.Text>
              <Link to={`/location/Delhi`} className="mr-2">
          <button className="btn btn-info mt-2 mb-2 card-btn-1" >More Info!</button>
        </Link>
            </Card.Body>
          </Card></div><div><Card style={{height:"24rem" ,boxShadow:"20"}}>
            <Card.Img
              style={{height:"12rem" }}
              variant="top"
              src="https://media.istockphoto.com/photos/city-palace-and-pichola-lake-in-udaipur-india-picture-id629006734?b=1&k=20&m=629006734&s=170667a&w=0&h=3by9f13BhPYtNp5rUo_rBAtUdN-vOvc7kynulfXSmSQ="
            />
            <Card.Body style={{ backgroundColor: "#DCDCDC" }}>
              <Card.Title>Udaipur</Card.Title>
              <Card.Text>
              Rajasthan
              </Card.Text>
              <Card.Text>
               2N-3D Trip @
               7500/-
              </Card.Text>
              <Link to={`/location/Udaipur`} className="mr-2">
          <button className="btn btn-info mt-2 mb-2 card-btn-1" >More Info!</button>
        </Link>
            </Card.Body>
          </Card></div><div><Card style={{height:"24rem" ,boxShadow:"20"}}>
            <Card.Img
              style={{height:"12rem" }}
              variant="top"
              src="https://images.unsplash.com/photo-1572980071199-3d874a56b987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dWRhaXB1cnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
            />
            <Card.Body style={{ backgroundColor: "#DCDCDC" }}>
              <Card.Title>Jodhpur</Card.Title>
              <Card.Text>
              Rajasthan
              </Card.Text>
              <Card.Text>
               3N-4D Trip @
               8500/-
              </Card.Text>
              <Link to={`/location/Jodhpur`} className="mr-2">
          <button className="btn btn-info mt-2 mb-2 card-btn-1" >More Info!</button>
        </Link>
            </Card.Body>
          </Card></div><div><Card style={{height:"24rem" ,boxShadow:"20"}}>
            <Card.Img
              style={{height:"12rem" }}
              variant="top"
              src="https://images.unsplash.com/photo-1575994532957-773da2f83eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dWRhaXB1cnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
            />
            <Card.Body style={{ backgroundColor: "#DCDCDC" }}>
              <Card.Title>Hampi</Card.Title>
              <Card.Text>
              Karnataka
              </Card.Text>
              <Card.Text>
               3N-4D Trip @
               9500/-
              </Card.Text>
              <Link to={`/location/Hampi`} className="mr-2">
          <button className="btn btn-info mt-2 mb-2 card-btn-1" >More Info!</button>
        </Link>
            </Card.Body>
          </Card></div><div><Card style={{height:"24rem" ,boxShadow:"20"}}>
            <Card.Img
              style={{height:"12rem" }}
              variant="top"
              src="https://media.istockphoto.com/photos/jal-mahal-jaipur-rajasthan-india-picture-id453234117?b=1&k=20&m=453234117&s=170667a&w=0&h=r0d8Eaco14PlMnZiaOxYBn2vw9quJHjqq9P4SHiaxVM="
            />
            <Card.Body style={{ backgroundColor: "#DCDCDC" }}>
              <Card.Title>Hill Forts </Card.Title>
              <Card.Text>
              Rajasthan
              </Card.Text>
              <Card.Text>
               6N-7D Trip @
               25000/-
              </Card.Text>
              <Link to={`/location/Hillforts`} className="mr-2">
          <button className="btn btn-info mt-2 mb-2 card-btn-1" >More Info!</button>
        </Link>
            </Card.Body>
          </Card></div><div><Card style={{height:"24rem" ,boxShadow:"20"}}>
            <Card.Img
              style={{height:"12rem" }}
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/4/47/Konarka_Temple.jpg"
            />
            <Card.Body style={{ backgroundColor: "#DCDCDC" }}>
              <Card.Title>Konark </Card.Title>
              <Card.Text>
                Odisha
              </Card.Text>
              <Card.Text>
               3N-4D Trip @
               5000/-
              </Card.Text>
              <Link to={`/location/Konark`} className="mr-2">
          <button className="btn btn-info mt-2 mb-2 card-btn-1" >More Info!</button>
        </Link>
            </Card.Body>
          </Card></div>
        </Carousel>
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
     
      <Footer/>
    </div>
  );
}
