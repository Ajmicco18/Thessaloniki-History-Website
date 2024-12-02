import React from 'react'
import {
    Box,
    Container,
    Typography
} from '@mui/material/';
import headerPhoto from '../assets/header-photo.png';
import affectedArea from '../assets/fire-area.png';
import soldiers from "../assets/soldiers.png";
import ernest from "../assets/ernestHebrard.png";

export default function Home() {
    const year = new Date().getFullYear()
    return (
        <>
            <Box sx={{ height: "80px" }} />
            <Container sx={{ width: "85%", margin: "auto", display: "flex", flexDirection: "column" }}>
                <Box width={"100%"} margin={"auto"}>
                    <Typography variant={"h3"} textAlign={"center"} padding={"10px"} color='gold'>
                        The Great Thessaloniki Fire of 1917
                    </Typography>
                    <img src={headerPhoto} alt="Thessaloniki Fire Header" style={{ maxWidth: "500px", display: 'block', marginLeft: "auto", marginRight: "auto" }} />
                </Box>
                <Box marginTop={3} sx={{ width: "100%" }}>
                    <Typography variant='h4' textAlign={"center"} color='gold' sx={{ textDecoration: "underline" }}>
                        The Origins of the Fire
                    </Typography>
                    <Box display={'flex'} flexDirection={{ xs: "column", md: "row" }} marginTop={3}>
                        <div style={{ width: "30%", display: "flex", flexDirection: "column", gap: "5px", margin: "auto", justifyContent: "center", alignItems: 'center' }} >
                            <img src={affectedArea} alt="Area Affected" id='affected' style={{ maxWidth: "300px" }} />
                            <label htmlFor="affected" style={{ fontWeight: "bold", color: 'gold', textAlign: "center" }}> Area in Thessaloniki damaged by the fire [2]</label>
                        </div>
                        <div style={{ width: "65%", margin: "auto", textAlign: "justify", fontSize: "large" }}>
                            <p>
                                The Great Fire of 1917 broke out on a hot and sunny afternoon on August 18, 1917 in the
                                city's Turkish quarters (Mazower). Due to a lack of water, the initial fire was never
                                put out so the the wind blew the fire towards neighboring houses and the fire continued
                                to spread (Yerolymbos). Eventually the fire and smoke spread to the
                                downtown area and encased it in a blanket of smoke and flames. The exact cause of the fire
                                is still unknown today, although some believe it was on purpose while others believe it was an accident.
                            </p>
                        </div>
                    </Box>

                </Box>
                <Box marginTop={3} sx={{ width: "100%" }}>
                    <Typography variant='h4' textAlign={"center"} color='gold' sx={{ textDecoration: "underline" }}>
                        The Fire's Impact
                    </Typography>
                    <Box display={'flex'} flexDirection={{ xs: "column", md: "row" }} marginTop={3}>
                        <div style={{ width: "65%", margin: "auto", textAlign: "justify", fontSize: "large" }} >
                            <p>
                                The fire caused devestating damage to the city with over three-fourths of the old town of Thessaloniki
                                being destroyed in the fire and many people being left homeless (Mozower). Most of the city's banks, businesses, hotels,
                                shops, theaters and cinemas were destroyed in the fire (Yerolymbos). Most of the churches in the city survived the blaze,
                                but Agios Demetrios was heavily damaged as well as many mosques. Thankfully, there were no reported fatalities from the
                                fire.
                            </p>
                            <p>
                                Perhaps no community was hit harder by the fire than the Jewish community. The Jewish community made up the majority of
                                the inhabitants in downtown Thessaloniki and the fire left about 52,000 Jews homeless, as well as 11,000 Muslims and 10,000
                                Christians (Yerolymbos). As a result, many Jews emigrated to France, Italy, Spain, the United States, and Old Greece, and
                                thousands of Greeks moved to Greek cities such as Athens, Volos and Larissa (Mozower). Additionally, the Jewish community
                                lost the majority of their libraries, schools, club buildings, offices and most of their synagogues
                                located in central Thessaloniki (Mozower).
                            </p>
                        </div>
                        <div style={{ width: "30%", display: "flex", flexDirection: "column", gap: "5px", margin: "auto", justifyContent: "center", alignItems: 'center' }} >
                            <img src={soldiers} alt="Fire's Damage" id='damage' style={{ maxWidth: "350px" }} />
                            <label htmlFor="damage" style={{ fontWeight: "bold", color: 'gold', textAlign: "center" }}> Soldiers assess the fire's damage [3]</label>
                        </div>
                    </Box>
                </Box>
                <Box marginTop={3} sx={{ width: "100%" }}>
                    <Typography variant='h4' textAlign={"center"} color='gold' sx={{ textDecoration: "underline" }}>
                        Rebuilding After the Fire
                    </Typography>
                    <Box display={'flex'} flexDirection={{ xs: "column", md: "row" }} marginTop={3}>
                        <div style={{ width: "30%", display: "flex", flexDirection: "column", gap: "5px", margin: "auto", justifyContent: "center", alignItems: 'center' }} >
                            <img src={ernest} alt="Ernest Hebrard" id='ernest' style={{ maxWidth: "400px" }} />
                            <label htmlFor="affected" style={{ fontWeight: "bold", color: 'gold', textAlign: 'center' }}> Ernest Hebrard, the mastermind of the Hebrard Plan [4]</label>
                        </div>
                        <div style={{ width: "65%", margin: "auto", textAlign: "justify", fontSize: "large" }} >
                            <p>
                                After the fire was finally put out, the city had to begin the tall task of rebuilding. With much of the city in rubble,
                                city officials decided it was best to rebuild the city from the ground up. Therefore, the Greek authorities organizaed a
                                meeting only a few days after the fire to discuss how to rebuild the city (Mozower). The city decided to appoint a French
                                architect and archeologist Ernest Hebrard to help design the new plan for the city (Yerolymbos). He eventually came up with a blueprint
                                called the Hebrard Plan that would help Thessaloniki rebuild after this devestating fire.
                            </p>

                            <p>
                                The Hebrard Plan was created in order to make Thessaloniki a more modern Greek city. It included creating wider, straight straights,
                                brought together public services, created a civic center, set aside open spaces for squares and parks, highlight the city's monumental past,
                                and gave the city blocks and regularly shaped plots of land (Yerolymbos). It also laid out plans for the construction of a new university in
                                the city and created a green zone where the city could not expand past. However, many of the cities synagogues, mosques, post-Byzantine churches
                                and chapels, orphanages and nursing homes were not rebuilt in the city center and very few were built in the city's newer districts (Yerolymbos).
                                In their place, the city's main square, Aristotle Square was constructed by an Italian architect names Vitaliano Poselli. While this plan intended
                                to revive Thessaloniki as a modern city, the city neglected the already struggling Jewish community.
                            </p>

                            <p>
                                The Hebrard Plan ended up driving the Jewish community out of the city's center and as a matter of fact, a member of the resconstruction committee,
                                Thomas Mawson said, "that the fundamental purpose of the plan was to deprive the Jews of complete control of the city" (Mozower). This forced many
                                Jews to emigrate outside of Thessaloniki or rebuild their lives on the outskirts of Thessaloniki's center. Overall, the Hebrard Plan was a major success
                                for the city and it enabled Thessaloniki to arise from the ashes to become a prospering city in northern Greece.
                            </p>
                        </div>
                    </Box>
                </Box>
            </Container>
            < footer className='index' >
                Designed and Developed by Anthony Micco &copy; {year}
            </footer >
        </>

    )
}
