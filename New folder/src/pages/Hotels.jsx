import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Button, Card, CardImg, Container } from "react-bootstrap";
import Box from "@mui/material/Box";
import Footer from "../components/Footer";
import SearchHotels from "../components/SearchHotels";
import "./Hotels.css";
import CircularProgress from "@mui/material/CircularProgress";
import { hotelphotos } from "../images/hotelphotos";
import Payment from "../components/Payment";
// import Hotel from "../images/Hotel.mp4";
import image5 from "../images/image5.png";
import image4 from "../images/image4.png";

export default function Hotels() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://hotels4.p.rapidapi.com/locations/v2/search?query=Calcutta&locale=en_US&currency=USD`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "hotels4.p.rapidapi.com",
          "x-rapidapi-key":
            "9c25c9e93emshf418f7fdd47c11dp16e597jsn17ae3a9959c9",
        },
        body: JSON.stringify(),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        const data = res.suggestions[1];
        console.log(data);
        setMovies(res.suggestions[1].entities);
        setLoading(false);
      });
  }, []);

  const search = (searchValue) => {
    setLoading(true);

    //getApiURL(searchValue)
    fetch(
      `https://hotels4.p.rapidapi.com/locations/v2/search?query=${searchValue}&locale=en_US&currency=USD`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "hotels4.p.rapidapi.com",
          "x-rapidapi-key":
            "9c25c9e93emshf418f7fdd47c11dp16e597jsn17ae3a9959c9",
        },
        body: JSON.stringify(),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        console.log(res.suggestions[1]);
        console.log(res.suggestions[1].entities.name);
        setLoading(false);
        setMovies(res.suggestions[1].entities);
      });
  };

  return (
    <div>
      <Navbar />
      
      <container className="Videoss">
        {/* <video autoPlay loop muted>
          <source src={Hotel} type="video/mp4" />
        </video> */}
      </container>
      <Container
        style={{
          paddingTop: "3rem",
          paddingBottom: " 3rem",
          fontFamily: "monospace",
          textAlign: "center",
        }}
      >
        <img src={image5} />
      </Container>
      <SearchHotels search={search} />
      <Container >
      <div className="Hotels">
        <div className="movies">
          {loading ? (
            <div style={{ paddingLeft: "50%", paddingTop: "10rem" }}>
              <Box sx={{ display: "flex" }}>
                <CircularProgress color="primary" />
              </Box>
            </div>
          ) : (
            movies.map((movie, index) => (
              
              <Card
                style={{
                  width: "20rem",
                  height: "28rem",
                  margin: "auto",
                  
                }}
              >
                <CardImg height={"200rem"} src={hotelphotos[index].src}></CardImg>
                <Card.Body
                  style={{ backgroundColor: "#F9F9F9", color: "gray" }}
                >
                  <Card.Title as="h3" style={{ color: "black" }}>
                    {movie.name}
                  </Card.Title>
                  <Card.Text>{movie.caption}</Card.Text>
                  <Button href="/bookingdetails">Book Your Hotel</Button>
                </Card.Body>
              </Card>
             
            ))
          )}
        </div>
      </div>
      </Container>
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
          Distinctively re-engineer revolutionary meta-services and premium
          architectures. Intrinsically incubate intuitive opportunities and
          real-time potentialities. Appropriately communicate one-to-one
          technology after plug-and-play networks.
        </h6>
      </Container>

      <Footer />
    </div>
  );
}
