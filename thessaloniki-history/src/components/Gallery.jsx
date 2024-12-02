import React from 'react'
import {
    Box,
    Typography
} from '@mui/material/';
import "../index.css"

export default function Gallery() {
    const year = new Date().getFullYear()

    return (
        <>
            <Box sx={{ height: "80px" }} ></Box>
            <div>
                <h1>Gallery Page</h1>
            </div>
            < footer className='other' >
                Designed and Developed by Anthony Micco &copy; {year}
            </footer >
        </>

    )
}
