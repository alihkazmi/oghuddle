import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {
  Box,
  Typography,
  Divider,
  Card,
  CardMedia,
  Button,
  Avatar,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText

} from "@mui/material";
import MiniDrawer from './MiniDrawer';
import BasicTable from '../../Components/DetailsTable';
import { useNavigate } from 'react-router-dom';



// const theme = createTheme({
//   components: {
//     MuiChip: {
//       styleOverrides: {
//         colorPrimary: {
//           backgroundColor: 'red',
//         },
//         colorSecondary: {
//           backgroundColor: 'brown',
//         },
//       },
//     },
//   },
// });



const DetailsPage = () => {
  const [challengesTypeIndex, setChallengesTypeIndex] =
    React.useState<number>(0);


  const handleChallengesType = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setChallengesTypeIndex(index);
  };



  return (
    <>
      <Box sx={{ paddingLeft: '3rem' }}>
        <Box sx={{ paddingLeft: '5rem' }}>
          <Box sx={{ display: "flex", alignItems: "center", width: "fit-content" }}>
            <Typography variant="h5" sx={{ mr: 1.5 }}>
              Challenges by Brand
            </Typography>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ borderColor: "secondary.main" }}
            />
            <Typography
              variant="body2"
              sx={{ m: 1.5, color: "secondary.main", cursor: "pointer" }}
            >
              View All Brands
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "whitesmoke",
              border: 1,
              p: 1,
              borderRadius: "5px",
              width: "65rem"
            }}
          >
            <List
              sx={{
                display: "flex",
                flexDirection: { md: "row", xs: "column" },
                width: "700px",
                "& .Mui-selected": {
                  backgroundColor: "#f9c712 !important",

                },
              }}

              disablePadding
            >
              {[
                { name: "Past Challenges", id: 0 },
                { name: "Current Challenges", id: 1 },
                { name: "Upcoming Challenges", id: 2 },
              ].map((value, index) => (
                <>
                  <ListItem sx={{ m: 0, width: "28%" }}>
                    <ListItemButton
                      alignItems="center"
                      key={value.id}
                      sx={{
                        maxHeight: 35,
                        border: challengesTypeIndex === index ? 0 : 1,
                        borderColor: "secondary.dark",
                        "&:hover": { backgroundColor: "#f9c712" },

                      }}
                      selected={challengesTypeIndex === index}
                      onClick={(event) => {
                        handleChallengesType(event, index);
                      }}
                    >
                      <ListItemText
                        sx={{
                          justifyContent: "center",
                          display: "flex",
                          fontSize: "80%",
                          p: 0,
                        }}
                        disableTypography
                        primary={value.name}
                      />
                    </ListItemButton>
                  </ListItem>
                  {index < 2 && (
                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      sx={{ borderColor: "secondary.main" }}
                    />
                  )}
                </>
              ))}
            </List>
          </Box>
        </Box>
        <br></br>
        <Box sx={{ paddingLeft: '5rem' }}>

          <Typography variant="h5" sx={{ mr: 1.5, }}>
            Pepsi Swag Challenge      </Typography>


          <Stack spacing={1} alignItems="center" />

          <Stack direction="row" spacing={1}>
            <Chip label="May 01 to May 15" style={{ backgroundColor: 'black', color: 'white' }} />
            <Chip label="Joined" color="success" />

          </Stack>
          <br></br>
          <br></br>

          <Card sx={{
            maxWidth: 345, position: "absolute", mt: '-31px'
          }}>

            <CardMedia
              component="img"
              height="340"
              image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt="green iguana"

            />

            <Typography gutterBottom variant="h5" component="div">
              Pepsi Challenge
            </Typography>
            <Typography variant="body2" color="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magnam minus quam voluptatum, veritatis mollitia iste. Optio ipsum delectus velit fugiat libero. Autem enim voluptates dicta deserunt vel cumque nesciunt!
            </Typography>


          </Card>
        </Box>

        <Box sx={{
          ml: '486px',
          backgroundColor: 'whitesmoke',
          width: '40rem',
          height: '4rem',
          border: '1px solid black',
          display: 'flex',
          flexDirection: 'row',
          paddingRight: '10px',
          marginTop: '-96px'
        }}>

          <Typography sx={{
            m: '19px',
            fontWeight: '600',
            fontSize: '15px',
            backgroundColor: 'whitesmoke',

          }}>
            Winning Reward:
          </Typography>
          <Typography sx={{
            m: '20px',
            fontWeight: '400',
            fontSize: '15px',
            ml: '-1px',
            mt: '19px'
          }}>
            Daraz voucher worth 1000 Rs.
          </Typography>
        </Box>

        <Box sx={{ position: 'absolute', mt: 2, ml: '30rem' }}>

          <Divider sx={{ width: '40rem', mt: '10px' }}></Divider>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography sx={{ mt: '13px', fontSize: '1.5rem' }}>
              256 <br></br><Typography sx={{ fontSize: "16px" }}>Participants</Typography>
            </Typography>


            {/* <Typography sx={{ mt: '-8px', ml: '-1px' }}>
            Participants
          </Typography> */}
            <Divider
              orientation="vertical"
              variant="middle"

              sx={{ height: '2rem', mx: '8rem', position: "absolute", mt: '28px ', }} />
            <Typography sx={{ mt: '13px', fontSize: '1.5rem', ml: 12 }}>
              0<br></br><Typography sx={{ fontSize: "16px" }}>Finishers</Typography>
            </Typography>
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{ height: '2rem', ml: '5rem', mt: '28px', }} />


            <Container sx={{ marginTop: '22px', marginLeft: '30px', display: 'flex', flexDirection: 'row' }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </Container>
            <Divider sx={{ width: '40rem', mt: '90px', position: "absolute" }}></Divider>


          </Box>
          <Box sx={{ mt: '50px', mr: '30px' }}>
            <BasicTable></BasicTable>
          </Box>
        </Box>

      </Box>


    </>

  )
}

export default DetailsPage





