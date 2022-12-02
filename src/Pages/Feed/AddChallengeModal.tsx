import React from "react";
import usePostTrick from "../../Hooks/usePostTrick";
import { adminContext } from "../../Context/AdminContext";
import Textarea from "@mui/joy/Textarea";
import { Box, Button, Typography, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "45%",
  backgroundColor: "#f9c712",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  p: 4,
  borderRadius: 9,
};

const styleMainBox = {
  mt: 2,
  width: "60%",
};

const styleButton = {
  textTransform: "none",
  color: "#f9c712",
  backgroundColor: "#303030",
  m: 1,
  "&.MuiButtonBase-root:hover": {
    bgcolor: "black",
  },
};

const styleTypography = {
  display: "flex",
  justifyContent: "center",
  mt: -2,
  fontWeight: "bold",
  color: "#303030",
};
const AddChallengeModal = (props: any) => {
  const handleClose = () => props.setOpen(false);
  const { challenges } = React.useContext(adminContext);
  const [trickDescription, setTrickDescription] = React.useState<string>();
  const [trickImage, setTrickImage] = React.useState<any>(null);
  const [PreviewImage, setPreviewImage] = React.useState<string>("");
  var item: any = challenges.find((item: any) => item.id === props.challengeId);
  const handleChange = (e: any) => {
    setTrickImage(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files));
  };
  const handleClick = (item: any) => {
    //postTrick(trickDescription, trickImage, item.id);
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" sx={styleTypography}>
            {item?.title}
          </Typography>
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            {item?.description}
          </Typography>
          <Box sx={styleMainBox}>
            <Textarea
              sx={{ m: 2 }}
              placeholder="Add Description"
              onChange={(e) => {
                setTrickDescription(e.target.value);
              }}
            />
            <Box sx={{ ml: 7 }}>
              {" "}
              <input
                accept="image/*"
                multiple
                type="file"
                onChange={handleChange}
              />
              <img src={'../assets/myImage.jpg'} width="300px" height="auto" alt=""></img>
            </Box>
          </Box>

          <Box sx={{ display: "flex", mt: 1 }}>
            <Button variant="contained" onClick={handleClose} sx={styleButton}>
              Cancel
            </Button>
            <Button variant="contained" sx={styleButton} onClick={handleClick}>
              Add a Challenge!
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddChallengeModal;