import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import UVIndexPieChart from "../graphs/UVIndexPieChart";

function SunsetAndSunrise() {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2">Sunset And Sunrise</Typography>

        <UVIndexPieChart />

        <Stack
          direction={{ xs: "row", sm: "row" }}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Box sx={{ textAlign: "center" }}>
 

            <Typography variant="body2" color="text.secondary">
              Sunrise
            </Typography>
            <Typography variant="h6" color="text.secondary">
              6:00
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
              Sunset
            </Typography>
            <Typography variant="h6" color="text.secondary">
              20:30
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default SunsetAndSunrise;
