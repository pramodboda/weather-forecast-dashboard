import React from "react";

import Grid from "@mui/material/Grid";
import Box  from "@mui/material/Box";
import CurrentTemp from "../components/cards/CurrentTemp";
import WindStatus from "../components/cards/WindStatus";
import UVIndex from "../components/cards/UVIndex";
import SunsetAndSunrise from "../components/cards/SunsetAndSunrise";
import Humidity from "../components/cards/Humidity";
import Visibility from "../components/cards/Visibility";
import FeelsLike from "../components/cards/FeelsLike";
import Typography from "@mui/material/Typography";

//Components
import DarkLightModeBtn from "../components/buttons/DarkLightModeBtn";
import DayWeatherCard from "../components/cards/DayWeatherCard";


//Icons
import PartlyCloudyDaySVGIcon from "../assets/weather-icons/PartlyCloudyDaySVGIcon.jsx"

function HomePage() {
  return (
    <>
     <Typography variant="h4">Weather Forecast Dashboard</Typography>
    <DarkLightModeBtn/>
   
      <Grid container item spacing={2} >
        <Grid item xs={12} sm={3} >
          <CurrentTemp />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container item spacing={2}>
            <Grid item container spacing={1}>
            <Grid item xs={2} sm={2}>
             <DayWeatherCard day="Sun" icon={<PartlyCloudyDaySVGIcon/>} temp="10" />
            </Grid>
            <Grid item xs={2} sm={2}>
             <DayWeatherCard day="Mon" icon="coming soon" temp="10" />
            </Grid>
            <Grid item xs={2} sm={2}>
             
              <DayWeatherCard day="Tue" icon="coming soon" temp="10" />
            </Grid>
            <Grid item xs={2} sm={2}>
             
              <DayWeatherCard day="Wed" icon="coming soon" temp="10" />
            </Grid>
            <Grid item xs={2} sm={2}>
             
              <DayWeatherCard day="Thu" icon="coming soon" temp="10" />
            </Grid>
            <Grid item xs={2} sm={2}>
             
              <DayWeatherCard day="Fri" icon="coming soon" temp="10" />
            </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
             <Box> <WindStatus /></Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <UVIndex />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SunsetAndSunrise />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Humidity />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Visibility />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FeelsLike />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default HomePage;
