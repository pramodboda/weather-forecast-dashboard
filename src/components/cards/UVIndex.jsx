import React from 'react';

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import UVIndexPieChart from '../graphs/UVIndexPieChart';

function UVIndex() {
  return (
    <Card>
      <CardContent>
      <Typography variant="body2">UV Index</Typography>
        <UVIndexPieChart/>
        </CardContent>
        </Card>
  )
}

export default UVIndex