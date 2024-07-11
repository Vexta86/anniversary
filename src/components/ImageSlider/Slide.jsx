import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import SlideContent from "./SlideContent";

const Slide = ({object}) => {

    return (
        <Stack>
            <SlideContent img={object?.img1} text={object?.text1} title={object?.title1}/>

            <SlideContent img={object?.img2} text={object?.text2} title={object?.title2}/>


        </Stack>
    );
};

export default Slide;