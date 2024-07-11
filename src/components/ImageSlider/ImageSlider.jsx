import React, {useState} from 'react';
import {Box, Button, Icon, Stack, Typography} from "@mui/material";
import Slide from "./Slide";
import {content} from "./content";

const ImageSlider = () => {
    const [year, setYear] = useState(2020);
    const selectedContent = content.find(element=> element.year === year)
    return (
        <Stack sx={{
            margin: '12% 0 4% 0',
            width: '100vw',
            alignItems:'center',
        }}>



            <Slide object={selectedContent} />
            <Box sx={{
                display:'flex',
                justifyContent:'space-between',

                width: '60vw'
            }}>
                <Button disabled={year<=2020} onClick={()=>setYear(year-1)}><Icon>arrow_back</Icon></Button>
                <Typography variant={'h2'}>{year}</Typography>
                <Button disabled={year>=2024} onClick={()=>setYear(year+1)}><Icon>arrow_forward</Icon></Button>

            </Box>

        </Stack>
    );
};

export default ImageSlider;