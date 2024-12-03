import React from 'react'
import {
    Box,
    Typography
} from '@mui/material/';
import "./index.css"

export default function References() {

    const year = new Date().getFullYear()

    return (
        <>
            <Box sx={{ height: "80px" }} />
            <Box width={"100%"} margin={"auto"}>
                <Typography variant='h3' textAlign={"center"} color='gold'>
                    References Page
                </Typography>
            </Box>
            <Box marginTop={4} display={"flex"} flexDirection={"column"}>
                <Box marginTop={4} maxWidth={"50%"} margin={"auto"} padding={"15px"} >
                    <Typography variant='h4' textAlign={"center"} color='gold'>Texts Cited</Typography>
                    <ul className='list' style={{ listStyleType: "none", fontSize: "large" }}>
                        <li>
                            Mazower, Mark. Salonica, City of Ghosts: Christians, Muslims and Jews. Harper Perennial, 2016.
                        </li>
                        <li>
                            Yerolymbos, Alexandra. “From Ashes to Rebirth: The Great Fire of Thessaloniki.”
                            Greece-Is, 16 Jan. 2016, www.greece-is.com/from-ashes-to-rebirth-the-great-fire-of-thessaloniki/.
                        </li>
                    </ul>
                </Box>
                <Box marginTop={4} maxWidth={"50%"} margin={"auto"} padding={"15px"}>
                    <Typography variant='h4' textAlign={"center"} color='gold'>Images</Typography>
                    <ul className='list' style={{ listStyleType: "none", fontSize: "large" }}>
                        <li>[1] French magazine “Le Miroir,” September 16, 1917.</li>
                        <li>[2] Mazower, Mark. Salonica, City of Ghosts: Christians, Muslims and Jews. Harper Perennial, 2016. </li>
                        <li>[3] Thessaloniki – Moments of History, National Historical Museum, Athens 2016</li>
                        <li>[4] Haris Giakoumis Collection, from “Ernest Hebrard, 1875 – 1933, Potamos Publications, Athens, 2001</li>
                        <li>[5] Miller, Michael. “A Century Ago, Jewish Salonica Burned.” The Times of Israel, 5 Aug. 2017,
                            www.timesofisrael.com/a-century-ago-jewish-salonica-burned/.</li>
                        <li>[6] “Macedonian Heritage.” Macedonian Heritage, www.macedonian-heritage.gr.</li>
                        <li>[7] “Ο Ερνέστ Εμπράρ και η ανοικοδόμηση της Θεσσαλονίκης.” Catisart, www.catisart.gr/ernest-hebrard-thessaloniki/.</li>
                        <li>[8] “Macedonian Heritage.” Macedonian Heritage, www.macedonian-heritage.gr.</li>
                        <li>[9] “Byzantine Monuments of Thessaloniki – Old Pictures.” Thessaloniki Blog, thessalonikiblog.com/byzantine-monuments-of-thessaloniki-old-pictures/.</li>
                        <li>[10] “Thessaloniki Fire of 1917.” SearchCulture.gr, www.searchculture.gr/aggregator/portal/thematicCollections/thessalonikifire1917?language=en.</li>
                    </ul>
                </Box>
            </Box>

            < footer className='index' >
                Designed and Developed by Anthony Micco &copy; {year}
            </footer >
        </>

    )
}