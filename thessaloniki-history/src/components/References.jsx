import React from 'react'
import {
    Box,
    Typography
} from '@mui/material/';
import "../index.css"

export default function References() {

    const year = new Date().getFullYear()

    return (
        <>
            <Box sx={{ height: "80px" }} />
            <Box width={"100%"} margin={"auto"}>
                <Typography variant='h3' textAlign={"center"}>
                    References Page
                </Typography>
            </Box>
            <Box marginTop={4} textAlign={"center"} maxWidth={"50%"} margin={"auto"} padding={"15px"} >
                <ol style={{ fontSize: "large" }}>
                    <li>
                        <Typography component={"p"} fontSize={"large"} >
                            Mazower, Mark. Salonica, City of Ghosts: Christians, Muslims and Jews. Harper Perennial, 2016.
                        </Typography>
                    </li>
                    <li>
                        <Typography component={"p"} fontSize={"large"}>
                            Yerolymbos, Alexandra. “From Ashes to Rebirth: The Great Fire of Thessaloniki.”
                            Greece-Is, 16 Jan. 2016, www.greece-is.com/from-ashes-to-rebirth-the-great-fire-of-thessaloniki/.
                        </Typography>
                    </li>
                </ol>
            </Box>
            < footer className='other' >
                Designed and Developed by Anthony Micco &copy; {year}
            </footer >
        </>

    )
}