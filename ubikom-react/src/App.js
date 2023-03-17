import "./App.css";
import Web3 from "web3";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import sonOfMan from "./static/images/son_of_man_round.png";
import spacePic from './static/images/space.jpg';
import { infuraURL } from "./globals";
import BlockChip from "./components/BlockChip";
import GasPriceChip from "./components/GasPriceChip";
import { getRegistryContract } from "./common/contract";
import NameInput from "./components/NameInput";

function App() {
  const web3 = new Web3(infuraURL);
  const registryContract = getRegistryContract(web3);
  console.log(web3)
  console.log(registryContract)

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Avatar alt="Son of Man" src={sonOfMan} />
          <Box width="20px" />
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
          <BlockChip marginLeft="10px" web3={web3} interval={30000} />
          <GasPriceChip marginLeft="10px" web3={web3} interval={30000} />
          <GitHubIcon
            onClick={() => window.open("https://github.com/regnull/ubikom")}
            sx={{ marginLeft: "10px", cursor: "pointer" }}
          />
          <EmailIcon sx={{ marginLeft: "10px" }} />
        </Toolbar>
      </AppBar>
      <Box
        align="center"
        minHeight="180px"
        sx={{
          backgroundImage: `url(${spacePic})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "#a7ffeb",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2">Free and Secure Communications</Typography>
        <Typography variant="subtitle1">
          Powered by Decentralized Private Identity
        </Typography>
      </Box>
      <Box align="center" marginTop="50px">
        <Box maxWidth="800px">
          <Typography variant="h4" marginBottom="20px">
            The Identity You Own
          </Typography>
          <Typography variant="body1" textAlign="left">
            Your account on Google, Meta, and other companies can be closed down
            at any time and for any reason. You don't own your identity with
            those companies (and even with other privacy-focused companies).
            Unless you control your identity, it's not yours, and you can only
            control it by controlling your encryption keys. With Ubikom, your
            identity is your own. You create it on Ethereum blockchain, and you
            keep in self-custody at all times.
          </Typography>
        </Box>
      </Box>
      <Box align="center" marginTop="50px">
        <Box maxWidth="800px" >
          <Typography variant="h4" marginBottom="20px">
            Communicate Privately
          </Typography>
          <Typography variant="body1" textAlign="left">
            Using your identity, you can register a public key which may be used
            to send you private messages. This key can be changed by any time -
            as long as you are in possession of your master key.
          </Typography>
        </Box>
      </Box>
      <Box align="center" marginTop="50px">
        <Typography variant="h4">Reserve Your Name</Typography>
        <NameInput registryContract={registryContract} spacing={2} width="30%" marginTop="30px" />
        {/* <Stack spacing={2} direction="row" width="30%" marginTop="30px">
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <Button variant="contained" >
            Proceed
          </Button>
        </Stack> */}
      </Box>
      <Box height="50px" />
      <Divider variant="middle"/>
      <Box height="50px" />
      <Typography variant="body1" marginLeft="20px">
        (c) Teralyt Software LLC, 2023
      </Typography>
    </>
  );
}

export default App;
