import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyle";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "#00c2c2",
                fontFamily:"Times New Roman",
				textAlign: "center",
				marginTop: "-50px" }}>
		TRAVEL TREK
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink > Our mission is not just to be a travel agency which helps you
                book a holiday; we are here to provide you a secure journey. <h5 style={{color:"#00c2c2"}}>#travelsafe</h5> </FooterLink>
			
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Tour</FooterLink>
			<FooterLink href="#">Adventure</FooterLink>
			<FooterLink href="/hotels">Hotels</FooterLink>
			<FooterLink href="/flights">Flights</FooterLink>
		</Column>
		<Column>
			<Heading>Contact</Heading>
			<FooterLink href="#">Sector-17, Rohini, New Delhi </FooterLink>
			<FooterLink href="#">traveltrek23@gmail.com</FooterLink>
			<FooterLink href="/hotels">+91 8888888888</FooterLink>
			<FooterLink href="/flights">+36025-98765</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.instagram.com/k.periwal021/">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://twitter.com/Abhishe97414481?t=yTYw3nhoLYC2jr7zkaVPqA&s=09">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;