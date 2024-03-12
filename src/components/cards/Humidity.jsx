import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


import HumiditySVGIcon from "../../assets/weather-icons/HumiditySVGIcon";

function Humidity() {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2">Humidity</Typography>
        {/* <img src="" alt="humidity" loading="lazy" class="opNLj"/> */}
       <HumiditySVGIcon/>
        <Typography variant="h3" color="text.secondary">
          48<span className="">%</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Humidity;
