import React from 'react'

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import WindStatusAreaChart from "../graphs/WindStatusAreaChart"
import WindStatusBarChart from '../graphs/WindStatusBarChart';
function WindStatus() {
  return (
    <Card >
    <CardContent>
      <Typography variant='body2'>Wind Status</Typography>
      <div className="wind-status-area-chart">
        <WindStatusAreaChart/>
        <WindStatusBarChart/>
        </div>
     
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'center', sm: 'flex-end' }}
        
        flexWrap="wrap"
      >
        <Typography variant="h3" color="text.secondary" gutterBottom><br/>
       
        3.6<span className="tempPower"></span>
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

export default WindStatus