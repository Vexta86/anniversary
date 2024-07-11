import React from 'react';
import {Stack, Typography} from "@mui/material";
import {mainBox} from "./Styles";


const TimeBox = ({amount, name}) => {


    return (
        <Stack sx={mainBox}>
            <Typography variant={'h2'}> {amount}</Typography>
            <Typography> {name}</Typography>
        </Stack>
    );
};

export default TimeBox;