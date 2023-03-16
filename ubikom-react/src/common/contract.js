import { getContractAddress } from "./network";

export const registryContractAbi = [
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "string", name: "name", type: "string" },
      {
        indexed: false,
        internalType: "string",
        name: "configName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "configValue",
        type: "string",
      },
    ],
    name: "ConfigUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "string", name: "name", type: "string" },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "NameOwnershipUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "string", name: "name", type: "string" },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "NameRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "string", name: "name", type: "string" },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "PriceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "string", name: "name", type: "string" },
    ],
    name: "PublicKeyUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "string", name: "name", type: "string" },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "Sale",
    type: "event",
  },
  {
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "bytes", name: "publicKey", type: "bytes" },
    ],
    name: "buyName",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "configName", type: "string" },
    ],
    name: "lookupConfig",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "name", type: "string" }],
    name: "lookupName",
    outputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "bytes", name: "publicKey", type: "bytes" },
      { internalType: "uint256", name: "price", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes", name: "publicKey", type: "bytes" },
      { internalType: "string", name: "name", type: "string" },
    ],
    name: "registerName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "configName", type: "string" },
      { internalType: "string", name: "configValue", type: "string" },
    ],
    name: "updateConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "address", name: "newOwner", type: "address" },
    ],
    name: "updateOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "uint256", name: "price", type: "uint256" },
    ],
    name: "updatePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes", name: "publicKey", type: "bytes" },
      { internalType: "string", name: "name", type: "string" },
    ],
    name: "updatePublicKey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export function getRegistryContract(web3) {
    new web3.eth.Contract(registryContractAbi, getContractAddress());
}
