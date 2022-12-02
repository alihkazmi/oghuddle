import React from 'react'
import {
  Box,
  Button,
  Container,
  Typography,
  Avatar,
  Card,
  CardMedia,

} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "150px",
  slidesToShow: 1,
  speed: 400,
};

const Profile = () => {





  return (
    <>
      <Container>
        <h2>Profile</h2>
        <hr></hr>

        <Box sx={{ backgroundColor: 'whitesmoke', border: '1px solid', width: '48rem', px: '10rem', height: '12rem', ml: '43px' }}>
          <Avatar
            alt="Remy Sharp"
            src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
            sx={{ width: 130, height: 130, ml: '-8rem', mt: '1rem', position: 'absolute', border: '1px solid yellow' }}
          />

          <Typography sx={{ ml: '-7rem', mt: '9rem', fontWeight: 'bold', position: 'absolute' }}>Jessica Smith
          </Typography>
          <br></br>

          <Typography sx={{ px: '20px', pl: '2rem', pt: '2rem', fontWeight: 'bold' }}>About Pepsi Swag Challenge
          </Typography>
          <Typography sx={{ pl: '2rem' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste libero quod qui! Necessitatibus sint perspiciatis voluptas. Tenetur nobis dolor voluptatibus obcaecati molestias eos, aliquam, amet adipisci libero perspiciatis, quos voluptas.</Typography>
          <FavoriteIcon sx={{
            mt: '1rem',
            ml: '-5rem',
            color: 'red'
          }}></FavoriteIcon>
          <Typography sx={{
            ml: '-3rem', mt: '-25px', fontSize: '15px'
          }}> 256</Typography>

        </Box>




        <Box>
          <Container
            sx={{
              overflow: "hidden",
              width: "100%",
              height: "500px",
              ml: "auto",
              mr: "auto",
              mt: "1rem",
              mb: "1rem",
              "& .slick-arrow": {
                backgroundColor: "#303030",
                color: "#f9c712",
                height: "40px",
                width: "40px",
                pt: "3px",
                borderRadius: "25px",
                zIndex: 20,
                opacity: "0.75",
                "&:hover": { backgroundColor: "#f9c712", color: "#303030" },
              },
              "& .slick-prev": { marginLeft: "3px" },
              "& .slick-next": { marginRight: "4px" },
            }}
          >
            <Slider {...settings}>
              {[1, 2, 3, 4, 5, 6].map((value: any, key: any) => (
                (value.counts !== 0) && (
                  < Box sx={{ px: "2rem" }}>
                    <Card sx={{ borderRadius: 0, mx: '10px' }}>
                      <CardMedia
                        component="img"
                        alt="challengeImg"
                        height="490px"
                        image={"https://cdn.shopify.com/s/files/1/0101/2364/0896/products/21734-1_grande.jpg?v=1649424896"}
                      ></CardMedia>
                    </Card>
                    <Box
                      sx={{
                        position: "absolute",
                        marginTop: "-10rem",
                        marginLeft: "2rem",
                      }}
                    >
                      <Typography sx={{ color: "white" }}>
                        {value.titles}<br></br>{value.descriptions}<br></br>ID: -------{value.id}<br></br>number of likes: --------{value.count}
                      </Typography>
                      <Button
                        sx={{
                          backgroundColor: "#ff4242",
                          color: "white",
                          mt: "10px",
                          px: "10px",
                          "&:hover": { backgroundColor: "red" },
                        }}
                      >

                        <FavoriteBorderOutlinedIcon
                          sx={{ fontSize: "14px", mr: "3px" }}
                        />
                        Liked
                      </Button>

                    </Box>
                  </Box>
                )))}
            </Slider>
          </Container>


        </Box>

      </Container>
    </>
  )
}

export default Profile