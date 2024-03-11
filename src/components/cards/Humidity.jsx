import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Humidity() {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2">Humidity</Typography>
      
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
	<defs>
		<linearGradient id="a" x1="23.61" y1="21.85" x2="37.27" y2="45.52" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#3392d6"/>
			<stop offset="0.45" stop-color="#3392d6"/>
			<stop offset="1" stop-color="#2477b2"/>
		</linearGradient>
	</defs>
	<path d="M32,17c-6.09,9-10,14.62-10,20.09a10,10,0,0,0,20,0C42,31.62,38.09,26,32,17Z" stroke="#2885c7" stroke-miterlimit="10" stroke-width="0.5" fill="url(#a)"/>
	<path d="M26.24,30.19a3,3,0,0,1,2.12-.69,3,3,0,0,1,2.12.69,2.51,2.51,0,0,1,.74,1.92v1.24a2.48,2.48,0,0,1-.74,1.9,3.05,3.05,0,0,1-2.12.68,3,3,0,0,1-2.12-.68,2.48,2.48,0,0,1-.74-1.9V32.11A2.51,2.51,0,0,1,26.24,30.19Zm11-.23a.42.42,0,0,1-.08.4L29,41.69a1.37,1.37,0,0,1-.44.44,1.87,1.87,0,0,1-.72.09h-.67c-.2,0-.33-.06-.38-.18s0-.25.09-.42l8.2-11.35a1,1,0,0,1,.41-.41,2,2,0,0,1,.67-.08h.76Q37.19,29.78,37.26,30Zm-8.9,1.17c-.79,0-1.19.36-1.19,1.07v1c0,.71.4,1.07,1.19,1.07s1.19-.36,1.19-1.07v-1C29.55,31.49,29.15,31.13,28.36,31.13Zm5.16,5.63a3,3,0,0,1,2.12-.69,3,3,0,0,1,2.12.69,2.51,2.51,0,0,1,.74,1.92v1.24a2.48,2.48,0,0,1-.74,1.9,3,3,0,0,1-2.12.68,3.05,3.05,0,0,1-2.12-.68,2.48,2.48,0,0,1-.74-1.9V38.68A2.51,2.51,0,0,1,33.52,36.76Zm2.12.94c-.79,0-1.19.35-1.19,1.07v1c0,.73.4,1.09,1.19,1.09s1.19-.36,1.19-1.09v-1C36.83,38.05,36.43,37.7,35.64,37.7Z" fill="#fff"/>
</svg>

        <Typography variant="h3" color="text.secondary">


          48<span className="">%</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Humidity;
