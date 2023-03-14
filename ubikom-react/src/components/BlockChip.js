import Chip from "@mui/material/Chip";
import { useState, useEffect } from "react";

export default function BlockChip({ marginLeft, interval, web3 }) {
  const [blockNumber, setBlockNumber] = useState(0);

  const updateBlockNumber = async () => {
    const bn = await web3.eth.getBlockNumber();
    setBlockNumber(bn);
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      updateBlockNumber();
    }, interval);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <Chip
      label={`Block ${blockNumber}`}
      variant="outlined"
      sx={{ marginLeft }}
    />
  );
}
