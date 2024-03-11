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

function HomePage() {
  return (
    <>
      <Grid container item spacing={2} >
        <Grid item xs={12} sm={3} >
          <CurrentTemp />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container item spacing={1}>
            <Grid item container item spacing={1}>
            <Grid item xs={2} sm={2}>
             <Box>Mon</Box>
            </Grid>
            <Grid item xs={2} sm={2}>
             <Box>Tue</Box>
            </Grid>
            <Grid item xs={2} sm={2}>
             <Box>Wed</Box>
            </Grid>
            <Grid item xs={2} sm={2}>
             <Box>Thu</Box>
            </Grid>
            <Grid item xs={2} sm={2}>
             <Box>Fri</Box>
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
