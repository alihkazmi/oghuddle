import React from 'react'
import SliderFeed from './Slider'
import MiniDrawer from './MiniDrawer'
import {
  Box,

} from "@mui/material";

const HomePage = () => {





  return (
    <>


      <Box component='main' sx={{ display: 'flex', flexgrow: 1 }}>
        <Box component="main" sx={{}}>

          <SliderFeed></SliderFeed>
        </Box>
      </Box>

    </>
  )
}

export default HomePage;

