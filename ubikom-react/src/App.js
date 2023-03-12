import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider"
import Container from "@mui/material/Container";
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import titleImage from "./static/images/title_image.jpg";
import sonOfMan from "./static/images/son_of_man_round.png"

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
        <Avatar alt="Son of Man" src={sonOfMan} />
          <Box width="20px"/>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <EmailIcon />
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <Box align="center" minHeight='180px' sx={{backgroundImage: `url(${titleImage})`,
        color: 'white', display: "flex",
        flexDirection: "column",
        justifyContent: "center"}} >
        <Typography variant="h2">Free and Secure Communications</Typography>
        <Typography variant="subtitle1">Powered by Decentralized Private Identity</Typography>
      </Box>
      <Box align="center" marginTop="50px">
        <Box maxWidth="800px">
        <Typography variant="h4" marginBottom="20px">Lorem Ipsum</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        </Box>
      </Box>
      <Box align="center" marginTop="50px">
        <Typography variant="h4">Reserve Your Name</Typography>
      <Stack spacing={2} direction="row" width="30%" marginTop="30px">
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <Button variant="contained" marginLeft="20px">
          Proceed
        </Button>
      </Stack>
      </Box>
      <Box height="50px" maxWidth="300px" alignContent="center" align="center">
        <Divider/>
      </Box>
      <Typography variant="body1" marginLeft="100px">(c) Teralyt Software LLC, 2023</Typography>
    </>
  );
}

export default App;
