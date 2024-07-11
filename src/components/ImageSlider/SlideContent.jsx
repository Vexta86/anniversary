import React from 'react';
import {Box, Stack, Typography} from "@mui/material";

const SlideContent = ({title, text, img}) => {
    console.log(img)
    return (
        <Stack sx={{
            alignItems: 'center',
            margin: '4%',
            padding: '2%',
            minHeight: '70vh',
            width:'60%'
        }}>
            <Typography variant={'h3'}>
                {title}
            </Typography>
            <Box>
                <Typography>
                    {text}
                </Typography>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1rem',
                marginTop: '1rem'
            }}>
                {img?.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`imagen-${index+1}`}
                        style={{
                            maxWidth: '200px', // Adjust max-width as needed
                            height: 'auto',
                            borderRadius: '8px', // Optional: to give images rounded corners
                        }}
                    />
                ))}
            </Box>
        </Stack>
    );
};

export default SlideContent;