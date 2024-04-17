import React from "react";

import Paper from "@mui/material/Paper";
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
import PartlyCloudyDaySVGIcon from "../assets/weather-icons/PartlyCloudyDaySVGIcon.jsx";
import PartlyCloudyDaySmoke from "../assets/weather-icons/PartlyCloudyDaySmoke.jsx";
import ThunderstormsDay from "../assets/weather-icons/ThunderstormsDay.jsx";
import ThunderstormsDayRain from "../assets/weather-icons/ThunderstormsDayRain.jsx";

import Smoke from "../assets/weather-icons-new/Smoke.jsx";
import Snow from "../assets/weather-icons-new/Snow.jsx";

function HomePage() {
  return (
    <>
    
    <Paper>
      <div className="container">
      <Typography variant="h4">Weather Forecast Dashboard</Typography>
    <DarkLightModeBtn/>
   
      <Grid container item spacing={2} >
        <Grid item xs={12} sm={3} >
          <Snow/>
          <CurrentTemp />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container item spacing={2}>
            <Grid item container spacing={1}>
            <Grid item xs={2} sm={2}>
             <DayWeatherCard day="Sun" icon={<PartlyCloudyDaySVGIcon/>} temp="10" />
            </Grid>
            <Grid item xs={2} sm={2}>
             <DayWeatherCard day="Mon" icon={<PartlyCloudyDaySmoke/>} temp="10" />
            </Grid>
            <Grid item xs={2} sm={2}>
             
              <DayWeatherCard day="Tue" icon={<ThunderstormsDay/>} temp="10" />
            </Grid>
            <Grid item xs={2} sm={2}>
             
              <DayWeatherCard day="Wed" icon={<ThunderstormsDayRain/>} temp="10" />
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
      </div>
   
      </Paper>
    </>

    

  );
}

export default HomePage;
