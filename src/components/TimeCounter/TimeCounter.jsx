import React, {useEffect, useState} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import {dateDiff} from "../../config/tools";
import TimeBox from "./TimeBox";
import {dots, mainContainer, rowContainer} from "./Styles";

const TimeCounter = () => {
    const initialDate = new Date('2020-07-12');
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);



    const diff = dateDiff(initialDate, currentDate)


    return (
        <Stack sx={mainContainer}>
            <Typography>Definitivamente han sido los mejores</Typography>

            <Box sx={rowContainer}>
                <TimeBox amount={diff.years} name={'Años'}/>
                <TimeBox amount={diff.months} name={'Meses'}/>
                <TimeBox amount={diff.days} name={'Días'}/>

            </Box>
            <Box sx={rowContainer}>
                <TimeBox amount={diff.hours} name={'H'}/>
                <Typography variant={'h1'} sx={dots}>:</Typography>

                <TimeBox amount={diff.minutes} name={'M'}/>
                <Typography variant={'h1'} sx={dots}>:</Typography>
                <TimeBox amount={diff.seconds} name={'S'}/>

            </Box>
            <Typography>a tu lado</Typography>

        </Stack>
    );
};

export default TimeCounter;