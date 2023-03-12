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
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import titleImage from "./static/images/title_image.jpg";
import sonOfMan from "./static/images/son_of_man_round.png"

import { useWeb3 } from '@openzeppelin/network/react';

const infuraProjectId = '8f540714acb24862a8c9a5c3d8568f23';

function App() {
  const web3Context = useWeb3(`wss://mainnet.infura.io/ws/v3/${infuraProjectId}`);
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
          <GitHubIcon onClick={() => window.open('https://github.com/regnull/ubikom')} sx={{ marginLeft: "10px", cursor: "pointer" }}/>
          <EmailIcon sx={{ marginLeft: "10px" }}/>
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
        <Box maxWidth="800px" marginLeft="20px" marginRight="20px">
        <Typography variant="h4" marginBottom="20px">The Identity You Own</Typography>
        <Typography variant="body1" textAlign="left" >
          Your account on Google, Meta, and other companies can be closed down at any time 
          and for any reason. You don't own your identity with those companies (and even with
          other privacy-focused companies). Unless you control your identity, it's not yours, and
          you can only control it by controlling your encryption keys. With Ubikom, your identity
          is your own. You create it on Ethereum blockchain, and you keep in self-custody at all
          times.
        </Typography>
        </Box>
      </Box>
      <Box align="center" marginTop="50px">
        <Box maxWidth="800px" marginLeft="20px" marginRight="20px">
        <Typography variant="h4" marginBottom="20px">Communicate Privately</Typography>
        <Typography variant="body1" textAlign="left" >
          Using your identity, you can register a public key which may be used to send you private
          messages. This key can be changed by any time - as long as you are in possession of your master
          key.
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
      <Box height="50px" maxWidth="300px" alignContent="center" align="center" sx={{ backgroundColor: "red"}}>
        <Divider/>
      </Box>
      <Typography variant="body1" marginLeft="100px">(c) Teralyt Software LLC, 2023</Typography>
    </>
  );
}

export default App;
