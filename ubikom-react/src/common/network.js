export const useTestnet = false;
export const infuraUrl =
  "https://mainnet.infura.io/v3/8f540714acb24862a8c9a5c3d8568f23";
export const infuraTestUrl =
  "https://sepolia.infura.io/v3/8f540714acb24862a8c9a5c3d8568f23";
export const nameRegistryContractAddress =
  "0xc44341402eff03307515043c920471ea67a2d9c3";
export const nameRegistryTestContractAddress =
  "0xcc8650c9cd8d99b62375c22f270a803e7abf0de9";
export const etherscanBaseTestUrl = "https://sepolia.etherscan.io";
export const etherscanBaseUrl = "https://etherscan.io";

export function getInfuraUrl() {
  if (useTestnet) {
    return infuraTestUrl;
  }
  return infuraUrl;
}

export function getContractAddress() {
  if (useTestnet) {
    return nameRegistryTestContractAddress;
  }
  return nameRegistryContractAddress;
}

export function getNetworkName() {
  if (useTestnet) {
    return "Sepolia testnet";
  }
  return "ETH mainnet";
}

export function usingTestnet() {
  return useTestnet;
}

export function getEtherscanTransactionUrl(tx) {
  if (useTestnet) {
    return `${etherscanBaseTestUrl}/tx/${tx}`;
  }
  return `${etherscanBaseUrl}/tx/${tx}`;
}

export function getEtherscanAddressUrl(addr) {
  if (useTestnet) {
    return `${etherscanBaseTestUrl}/address/${addr}`;
  }
  return `${etherscanBaseUrl}/address/${addr}`;
}

export function getEtherscanBlockUrl(block) {
  if (useTestnet) {
    return `${etherscanBaseTestUrl}/block/${block}`;
  }
  return `${etherscanBaseUrl}/block/${block}`;
}
