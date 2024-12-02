import React from 'react'
import {
    Box,
    Container,
    Typography
} from '@mui/material/';
import whiteTower from '../assets/white-tower.png';

export default function Home() {
    const year = new Date().getFullYear()
    return (
        <>
            <Box sx={{ height: "80px" }} />
            <Container sx={{ width: "85%", margin: "auto", display: "flex", flexDirection: "column" }}>
                <Box width={"100%"} margin={"auto"}>
                    <Typography variant={"h3"} textAlign={"center"}>
                        The Great Thessaloniki Fire of 1917
                    </Typography>
                    <img src={whiteTower} alt="Thessaloniki Fire Header" style={{ display: 'block', marginLeft: "auto", marginRight: "auto" }} />
                </Box>
                <Box marginTop={3} sx={{ width: "100%" }}>
                    <Typography variant='h5' textAlign={"center"}>
                        The Origins of the Fire
                    </Typography>
                </Box>
                <Box marginTop={3} sx={{ width: "100%" }}>
                    <Typography variant='h5' textAlign={"center"}>
                        The Fire's Impact
                    </Typography>
                </Box>
                <Box marginTop={3} sx={{ width: "100%" }}>
                    <Typography variant='h5' textAlign={"center"}>
                        Rebuilding After the Fire
                    </Typography>
                </Box>
            </Container>
            < footer className='index' >
                Designed and Developed by Anthony Micco &copy; {year}
            </footer >
        </>

    )
}
