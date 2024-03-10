import React from 'react'

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function FeelsLike() {
  return (
    <Card >
    <CardContent>
      <Typography variant='body2'>Feels Like</Typography>

      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'center', sm: 'flex-end' }}
        
        flexWrap="wrap"
      >
        <Typography variant="h3" color="text.secondary" gutterBottom>
        <img src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-2/24/cloud-wind-64.png" alt="" /><br/>
        29<span className="">°</span>
        </Typography>
        <Box>
        <Typography className="weathermain-text" color="text.secondary">
        "speed": 3.6,
       
        </Typography>
        <Typography className="feels-like" variant="body2" color="text.secondary"> "deg": 90</Typography>
        </Box>

      </Stack>

    </CardContent>
  </Card>
  )
}

export default FeelsLike