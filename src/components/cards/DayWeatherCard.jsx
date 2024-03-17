import React from "react";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function DayWeatherCard(props) {
  const { day, icon, temp } = props;
  return (
    <Card>
      <CardContent>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2">{day}</Typography>
          <Box className="svg-icon">{icon}</Box>
          <Typography variant="body">{temp}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default DayWeatherCard;
