import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import NavigationIcon from "@mui/icons-material/Navigation";
import AirIcon from "@mui/icons-material/Air";

import WindStatusAreaChart from "../graphs/WindStatusAreaChart";
import WindStatusBarChart from "../graphs/WindStatusBarChart";
function WindStatus() {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2">Wind Status</Typography>
        <Box className="wind-status-area-chart">
          <WindStatusAreaChart />
          <WindStatusBarChart />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          {" "}
          <Typography color="text.secondary">Speed</Typography>
          <Typography variant="h4" color="text.secondary" gutterBottom>
            3.6<span className="">km/h</span>
          </Typography>
        </Box>

        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction={{ xs: "row", sm: "row" }}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography color="text.secondary">
              <NavigationIcon sx={{ fontSize: "2.5rem" }} />
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Wind direction
            </Typography>
            <Typography variant="h4" color="text.secondary">
              93
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Typography color="text.secondary">
              <AirIcon sx={{ fontSize: "2.5rem" }} />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Gust
            </Typography>
            <Typography variant="h4" color="text.secondary">
              93
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default WindStatus;
