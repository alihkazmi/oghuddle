import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Divider,
  Container,
  ListItemButton,
  ListItemText,
  List,
  ListItem,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails

} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import SearchBar from '../../Components/SearchBar';
import { adminContext } from '../../Context/AdminContext';
import useGetChallenges from "../../Hooks/useGetChallenges";
import { useParams } from "react-router-dom";
import AddTrickModal from "./AddTrickModal";
import { Navigate } from "react-router-dom";
import AddChallengeModal from "./AddChallengeModal";
import usePostLikes from "../../Hooks/usePostLikes";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from "@mui/joy";
import { isConstructorDeclaration } from "typescript";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export const Challenges = () => {
  const { postLikes } = usePostLikes();
  const { getChallengesData } = useGetChallenges();
  const [searchValue, setSearchValue] = React.useState("");
  const [searchInput, setSearchInput] = React.useState("");
  const [challengeId, setChallengeId] = React.useState("");
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const { challenges } = React.useContext(adminContext);
  const [show, setShow] = React.useState(8);

  const [challengesTypeIndex, setChallengesTypeIndex] =
    React.useState<number>(0);
  const navigate = useNavigate();
  const { userType } = useParams();

  const handleShowMore = () => {
    setShow(challenges.length);
  }
  const handleShowLess = () => {
    setShow(8);
  }


  const handleLikes = (challengeId: any) => {
    postLikes(challengeId);
  }
  // navigate(`/${userType}/landingpage/challenges`)
  // eslint-disable-next-line react-hooks/exhaustive-deps

  // React.useEffect(() => {
  //   getChallengesData();
  // }, []);
  React.useEffect(() => {


    navigate(`/${userType}/landingpage/challenges`)

  }, []);
  const handleChallengesType = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setChallengesTypeIndex(index);
  };

  console.log("aaaaaaaaaaaaaaaa");
  return (
    <Container sx={{ m: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", width: "fit-content" }}>
        <Typography variant="h5" sx={{ mr: 1.5 }}>
          Challenges
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
          View All Admins
        </Typography>
      </Box>

      <hr></hr>
      <br></br>
      <Box>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput}></SearchBar>

      </Box>
      <Box>
        <AddChallengeModal open={modalOpen} setOpen={setModalOpen} challengeId={challengeId}></AddChallengeModal>
        <Button variant="contained" sx={{ mt: '-72px', ml: '23rem', marginTop: "20px", marginLeft: '40px', px: '40px', backgroundColor: '#f9c712', "&:hover": { backgroundColor: '#bf980c' }, color: 'black' }} onClick={(event: React.MouseEvent<HTMLElement>) => {
          setModalOpen(true);
        }} >+ Add a challenge</Button>
      </Box>
      <br></br>

      <Container sx={{ display: 'flex', flexDirection: 'row' }}>
        <Grid container>

          {challenges.slice(0, show).filter((row: any) => {
            return searchInput === ""
              ? row
              : row.title
                ?.includes(searchInput.toLowerCase());
          })
            .map((value: any, key: any | undefined) => (
              <Grid item md={3}>

                <Box sx={{ padding: '10px' }} >
                  <Card key={value.id} sx={{ maxWidth: 300, position: "relative" }}>
                    <CardMedia
                      component="img"
                      alt="coke zero pic"
                      height="300"
                      image={`http://192.168.99.104:3001${value?.images[0]}`}
                    />

                    <CardContent sx={{ position: "absolute", top: "20%" }}>
                      <Box>
                        <Button variant="contained" sx={{ marginTop: "-110px", marginLeft: '130px', px: '20px', backgroundColor: '#f9c712', "&:hover": { backgroundColor: '#bf980c' }, color: 'black' }} onClick={() => {
                          navigate(`/:userType/landingpage/challenges/details/?challengeId=${value.id}`)
                        }}>Details</Button>
                      </Box>
                      <Typography gutterBottom variant="h6" color="#fff">
                        {value.title}
                      </Typography>
                      <Typography gutterBottom fontSize="x-small" color="#fff">
                        {value.description}
                      </Typography>
                      <Typography gutterBottom variant="h6" color="#fff">
                        Participants
                      </Typography>
                      <AvatarGroup total={24} sx={{
                        paddingRight: '90px',

                        "& .MuiAvatar-root": {
                          fontSize: '14px',
                          width: '30px',
                          height: '30px',
                        }
                      }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                      </AvatarGroup>

                      <Typography variant="body2" color="#fff"></Typography>

                      <Box>
                        <AddTrickModal open={modalOpen} setOpen={setModalOpen} challengeId={challengeId}></AddTrickModal>
                        <Button variant="contained" sx={{ marginTop: "20px", marginLeft: '40px', px: '40px', backgroundColor: '#f9c712', "&:hover": { backgroundColor: '#bf980c' }, color: 'black' }} onClick={(event: React.MouseEvent<HTMLElement>) => {
                          setModalOpen(true);
                          setChallengeId(value.id);
                        }} >Join</Button>
                      </Box>


                    </CardContent>
                    {/* <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions> */}
                  </Card>
                  {userType === 'customer' && <>
                    <IconButton>
                      <FavoriteIcon sx={{ color: 'red' }} onClick={() => { handleLikes(value.id) }}></FavoriteIcon>
                      <Typography>{value.counts}</Typography>
                    </IconButton>
                  </>}


                </Box>

              </Grid>

            ))}
          {show === 8 ? (
            <Button onClick={handleShowMore}>View More {""} <KeyboardArrowDownIcon></KeyboardArrowDownIcon></Button>) : (
            <Button onClick={handleShowLess}>View Less {""} <KeyboardArrowUpIcon></KeyboardArrowUpIcon></Button>)
          }
        </Grid>


      </Container>

    </Container>


  );
};