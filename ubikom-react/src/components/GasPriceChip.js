import Chip from "@mui/material/Chip";
import { useState, useEffect } from "react";

export default function BlockChip({ marginLeft, interval, web3 }) {
  const [gasPrice, setGasPrice] = useState(0);

  const updateGasPrice = async () => {
    const gp = await web3.eth.getGasPrice();
    setGasPrice(gp);
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      updateGasPrice();
    }, interval);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  updateGasPrice()

  const gpGwei = (gasPrice / 1000000000).toFixed(2);

  return (
    <Chip label={`Gas ${gpGwei} GWei`} variant="outlined" sx={{ marginLeft }} />
  );
}
