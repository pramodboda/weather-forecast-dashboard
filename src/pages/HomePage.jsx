import React from "react";

import Grid from "@mui/material/Grid";
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
      <Grid container spacing={2}>
        <Grid xs={12} sm={3}>
          <CurrentTemp />
        </Grid>
        <Grid xs={12} sm={9}>
          <Grid container >
            <Grid xs={12} sm={4}>
              <WindStatus />
            </Grid>
            <Grid xs={12} sm={4}>
              <UVIndex />
            </Grid>
            <Grid xs={12} sm={4}>
              <SunsetAndSunrise />
            </Grid>
            <Grid xs={12} sm={4}>
              <Humidity />
            </Grid>
            <Grid xs={12} sm={4}>
              <Visibility />
            </Grid>
            <Grid xs={12} sm={4}>
              <FeelsLike />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default HomePage;
