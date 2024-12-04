import React from 'react'
import {
    Box,
    Container,
    Typography
} from '@mui/material/';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ruins from "./assets/ruins.png";
import aerial from "./assets/aerialView.png";
import demetrios from "./assets/agiosDemetrios.png";
import aristotle from "./assets/aristotleSq.png";
import quay from "./assets/quayFire.png";
import egnatia from "./assets/egnatia.png"
import "./index.css"

export default function Gallery() {

    const slides = [
        { img: ruins, caption: "Jewish citizens collect their belongings amidst the rubble [5]" },
        { img: aerial, caption: "An aerial view of the fire engulging the city center [6]" },
        { img: quay, caption: "Citizens viewing the fire from the city's quay [7]" },
        { img: aristotle, caption: "An image of the proposed Aristole Square from the Hebrard Plan [8]" },
        { img: demetrios, caption: "The damage to Agios Demetrios after the fire [9]" },
        { img: egnatia, caption: "Citizens walking along Via Egnatia after the fire [10]" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    const year = new Date().getFullYear()

    return (
        <>
            <Box sx={{ height: "80px" }} ></Box>
            <Container sx={{ width: "85%", margin: "auto", display: "flex", flexDirection: "column", marginBottom: "50px" }}>
                <Typography variant={"h3"} textAlign={"center"} padding={"10px"} color='gold' marginBottom={6}>
                    Gallery Page
                </Typography>
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", height: "400px" }}>
                            <img
                                src={slide.img}
                                alt={`Slide ${index + 1}`}
                                style={{ maxWidth: "100%", height: "400px", display: 'block', marginLeft: "auto", marginRight: "auto" }}
                            />
                            <p style={{ marginTop: "10px", fontSize: "large", color: "gold", fontWeight: "bold", textAlign: 'center' }}>
                                {slide.caption}
                            </p>
                        </div>
                    ))}
                </Slider>
            </Container>

            < footer className='index' >
                Designed and Developed by Anthony Micco &copy; {year}
            </footer >
        </>

    )
}
