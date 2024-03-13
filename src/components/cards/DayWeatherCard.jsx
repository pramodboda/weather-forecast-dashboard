import React from "react";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

import CardContent  from "@mui/material/CardContent";
import Box from "@mui/material/Box";

function DayWeatherCard(props) {
    const {day, icon, temp} = props;
  return (
    <Card>
        <CardContent>
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
        <div>{day}</div>
      <Box className="svg-icon">{icon}</Box>
      <div>{temp}</div>

    </Stack>
    </CardContent>
    </Card>
  );
}

export default DayWeatherCard;
