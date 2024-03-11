import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";



function CurrentTemp() {
  return (
    <Card >
      <CardContent>
        <Typography variant="body2">Current weather</Typography>

        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'center', sm: 'flex-end' }}
          
          flexWrap="wrap"
        >
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
	<defs>
		<linearGradient id="a" x1="13.58" y1="15.57" x2="24.15" y2="33.87" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#86c3db"/>
			<stop offset="0.45" stop-color="#86c3db"/>
			<stop offset="1" stop-color="#5eafcf"/>
			<animateTransform attributeName="gradientTransform" type="rotate" values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293" dur="10s" repeatCount="indefinite"/>
		</linearGradient>
		<linearGradient id="b" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#f3f7fe"/>
			<stop offset="0.45" stop-color="#f3f7fe"/>
			<stop offset="1" stop-color="#deeafb"/>
		</linearGradient>
		<linearGradient id="c" x1="22.53" y1="42.95" x2="25.47" y2="48.05" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#4286ee"/>
			<stop offset="0.45" stop-color="#4286ee"/>
			<stop offset="1" stop-color="#0950bc"/>
		</linearGradient>
		<linearGradient id="d" x1="29.53" y1="42.95" x2="32.47" y2="48.05" xlink:href="#c"/>
		<linearGradient id="e" x1="36.53" y1="42.95" x2="39.47" y2="48.05" xlink:href="#c"/>
	</defs>
	<path d="M29.33,26.68A10.61,10.61,0,0,1,18.65,16.14,10.5,10.5,0,0,1,19,13.5,10.54,10.54,0,1,0,30.5,26.61,11.48,11.48,0,0,1,29.33,26.68Z" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" fill="url(#a)">
		<animateTransform attributeName="transform" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293" dur="10s" repeatCount="indefinite"/>
	</path>
	<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" stroke-miterlimit="10" stroke-width="0.5" fill="url(#b)"/>
	<line x1="24.39" y1="43.03" x2="23.61" y2="47.97" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="url(#c)">
		<animateTransform attributeName="transform" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
		<animate attributeName="opacity" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
	</line>
	<line x1="31.39" y1="43.03" x2="30.61" y2="47.97" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="url(#d)">
		<animateTransform attributeName="transform" begin="-0.4s" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
		<animate attributeName="opacity" begin="-0.4s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
	</line>
	<line x1="38.39" y1="43.03" x2="37.61" y2="47.97" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="url(#e)">
		<animateTransform attributeName="transform" begin="-0.2s" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
		<animate attributeName="opacity" begin="-0.2s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
	</line>
</svg>

          <Typography variant="h2" color="text.secondary" gutterBottom>
            
            27<span className="tempPower">°C</span>
          </Typography>
          <Box>
          <Typography className="weathermain-text" color="text.secondary">
          Partly cloudy
          </Typography>
          <Typography className="feels-like" variant="body2" color="text.secondary">Feels like 29°</Typography>
          </Box>

        </Stack>

      </CardContent>
    </Card>
  );
}

export default CurrentTemp;
