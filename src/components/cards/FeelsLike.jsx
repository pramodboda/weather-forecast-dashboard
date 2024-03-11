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

      <Typography variant="h3" color="text.secondary">
        <img src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-2/24/cloud-wind-64.png" alt="" />
        29<span className="">°</span>
        </Typography>

    </CardContent>
  </Card>
  )
}

export default FeelsLike