import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";

import SunriseSVGIcon from "../../assets/weather-icons/SunriseSVGIcon";
import SunsetSVGIcon from "../../assets/weather-icons/SunsetSVGIcon";

function SunsetAndSunrise() {
  const formatTimeStamp = (value) => {
    let unix_timestamp = value;

    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds
    let date = new Date(unix_timestamp * 1000);

    // Hours part from the timestamp
    let hours = date.getHours();

    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();

    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    // var formattedTime =
    //   hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

    // Will display time in 10:30 format
    let formattedTime = hours + ":" + minutes.substr(-2);
    console.log(formattedTime);
    return formattedTime;
  };
  return (
    <Card>
      <CardContent sx={{paddingBottom:"16px !important"}}>
        <Typography variant="body2">Sunset And Sunrise</Typography>

        {/* <Stack
          direction={{ xs: "row", sm: "row" }}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Box>
            <SunriseSVGIcon/>
            <Typography variant="body2" color="text.secondary">
              Sunrise
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" color="text.secondary">
              6:00
            </Typography>
          </Box>
        </Stack>

        <Divider />
        <Stack
          direction={{ xs: "row", sm: "row" }}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Box>
            <SunsetSVGIcon />
            <Typography variant="body2" color="text.secondary">
              Sunset
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" color="text.secondary">
              20:30
            </Typography>
          </Box>
        </Stack> */}
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            marginTop: "1rem",
            bgcolor: "background.paper",
            borderRadius: "1rem",
          }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "#ddd" }}>
                <SunriseSVGIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={formatTimeStamp(1684926645)}
              secondary="Sunrise"
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "#ddd" }}>
                <SunsetSVGIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={formatTimeStamp(1684977332)}
              secondary="Sunset"
            />
          </ListItem>
        </List>

        {/* <Stack
          direction={{ xs: "row", sm: "row" }}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Box sx={{ textAlign: "center" }}>
            <div ><SunriseSVGIcon/></div>
          
            <Typography variant="body2" color="text.secondary">
              Sunrise
            </Typography>
            <Typography variant="h6" color="text.secondary">
              6:00
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <div><SunsetSVGIcon/></div>
          
            <Typography variant="body2" color="text.secondary">
              Sunset
            </Typography>
            <Typography variant="h6" color="text.secondary">
              20:30
            </Typography>
          </Box>
        </Stack> */}
      </CardContent>
    </Card>
  );
}

export default SunsetAndSunrise;
