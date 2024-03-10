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
          <Typography variant="h3" color="text.secondary" gutterBottom>
            
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
