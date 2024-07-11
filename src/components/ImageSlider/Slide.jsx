import React, {useState} from 'react';
import {Box, Button, Icon, Slider, Stack, Typography} from "@mui/material";
import SlideContent from "./SlideContent";

const Slide = ({object}) => {

    const [number, setNumber] = useState(true);


    return (
        <Stack sx={{


            alignItems: 'center'
        }}>

            <SlideContent img={number ? object?.img1 : object?.img2} text={number ? object?.text1 : object?.text2} title={number ? object?.title1 : object?.title2}/>

            <Button

                variant={'contained'}
                onClick={() =>{
                    setNumber(!number);
                }}

                startIcon={<Icon>click</Icon>}

            >
               Click Aquí
            </Button>
            <Stack sx={{

                width:'50%',

            }}>


            </Stack>



        </Stack>
    );
};

export default Slide;