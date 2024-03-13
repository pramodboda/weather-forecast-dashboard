import React from "react";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent  from "@mui/material/CardContent";

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
      <div>{icon}</div>
      <div>{temp}</div>

    </Stack>
    </CardContent>
    </Card>
  );
}

export default DayWeatherCard;
