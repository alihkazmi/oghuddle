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


} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import SearchBar from '../../Components/SearchBar';
import { adminContext } from '../../Context/AdminContext';
import { useParams } from "react-router-dom";
import AddTrickModal from "./AddTrickModal";
import { Navigate } from "react-router-dom";
import useGetTricks from "../../Hooks/useGetTricks";
import moment from "moment";


const Tricks = () => {
  const { getTricks } = useGetTricks();
  const [searchValue, setSearchValue] = React.useState("");
  const [searchInput, setSearchInput] = React.useState("");
  const { challenges } = React.useContext(adminContext);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const url = new URL(window.location.href);
  const challengeId = Number(url.searchParams.get("ChallengeId"));

  const item = challenges.find((item: any) => item.id === challengeId);

  const { tricks } = React.useContext(adminContext);
  console.log('tricks coming...----------------', tricks)
  const [challengesTypeIndex, setChallengesTypeIndex] =
    React.useState<number>(0);
  const navigate = useNavigate();
  const { userType } = useParams();

  const handleChallengesType = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setChallengesTypeIndex(index);
  };

  React.useEffect(() => {
    navigate(`/${userType}/landingpage/tricks`)

  }, []);
  React.useEffect(() => {
    getTricks(challengeId);

  }, []);
  return (
    <Container sx={{ m: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", width: "fit-content" }}>
        <Typography variant="h5" sx={{ mr: 1.5 }}>
          Tricks
        </Typography>
        {/* <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ borderColor: "secondary.main" }}
        /> */}
        {/* <Typography
          variant="body2"
          sx={{ m: 1.5, color: "secondary.main", cursor: "pointer" }}
        >
          View All Admins
        </Typography> */}
      </Box>

      <hr></hr>
      <br></br>
      <Box>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput}></SearchBar>
      </Box>
      <br></br>

      <Container sx={{ display: 'flex', flexDirection: 'row' }}>
        <Grid container>
          {tricks
            .filter((data: any) => {
              return searchInput === ""
                ? data
                : data.description
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
            })
            ?.map((data: any, key: any | undefined) => {
              return (
                <Grid item md={3}>
                  <Box sx={{ padding: "10px" }}>
                    <Card
                      key={data.id}
                      sx={{
                        maxWidth: 300,
                        height: "340px",
                        position: "relative",
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt="challengeImg"
                        height="340px"
                        image={`http://192.168.99.104:3001${data?.images[0]}`}
                      ></CardMedia>
                      <Box sx={{ top: "20%", position: "absolute" }}>
                        <Typography
                          sx={{
                            display: "flex ",
                            color: "white",
                            mt: "2rem",
                            px: 5.5,
                            fontSize: "20px",
                          }}
                        >
                          {data.description}
                        </Typography>
                        <Typography
                          sx={{
                            color: "white",
                            mt: "1rem",
                            px: 5.5,
                            fontSize: "12px",
                          }}
                        >
                          {<span>By: {data?.customer_info?.name}</span>}
                          <br></br>
                          {
                            <span>
                              Created at:{" "}
                              {moment(data?.customers_info?.created_at).format(
                                "ll"
                              )}
                            </span>
                          }
                        </Typography>
                      </Box>
                    </Card>
                  </Box>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </Container >
  )
}

export default Tricks


