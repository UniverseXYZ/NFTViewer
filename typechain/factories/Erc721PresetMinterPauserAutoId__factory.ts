/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Erc721PresetMinterPauserAutoId } from "../Erc721PresetMinterPauserAutoId";

export class Erc721PresetMinterPauserAutoId__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    baseURI: string,
    overrides?: Overrides
  ): Promise<Erc721PresetMinterPauserAutoId> {
    return super.deploy(
      name,
      symbol,
      baseURI,
      overrides || {}
    ) as Promise<Erc721PresetMinterPauserAutoId>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    baseURI: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, baseURI, overrides || {});
  }
  attach(address: string): Erc721PresetMinterPauserAutoId {
    return super.attach(address) as Erc721PresetMinterPauserAutoId;
  }
  connect(signer: Signer): Erc721PresetMinterPauserAutoId__factory {
    return super.connect(signer) as Erc721PresetMinterPauserAutoId__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Erc721PresetMinterPauserAutoId {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as Erc721PresetMinterPauserAutoId;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "baseURI",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002e1b38038062002e1b833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b5060405260200180516040519392919084640100000000821115620001bc57600080fd5b908301906020820185811115620001d257600080fd5b8251640100000000811182820188101715620001ed57600080fd5b82525081516020918201929091019080838360005b838110156200021c57818101518382015260200162000202565b50505050905090810190601f1680156200024a5780820380516001836020036101000a031916815260200191505b5060405250849150839050620002676301ffc9a760e01b6200035d565b81516200027c9060079060208501906200050e565b508051620002929060089060208401906200050e565b50620002a56380ac58cd60e01b6200035d565b620002b7635b5e139f60e01b6200035d565b620002c963780e9d6360e01b6200035d565b5050600b805460ff19169055620002eb6000620002e5620003e5565b620003e9565b6200031a7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6620002e5620003e5565b620003497f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a620002e5620003e5565b6200035481620003f9565b505050620005ba565b6001600160e01b03198082161415620003bd576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152600160208190526040909120805460ff19169091179055565b3390565b620003f582826200040e565b5050565b8051620003f590600a9060208401906200050e565b60008281526020818152604090912062000433918390620012ef62000487821b17901c565b15620003f55762000443620003e5565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006200049e836001600160a01b038416620004a7565b90505b92915050565b6000620004b58383620004f6565b620004ed57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620004a1565b506000620004a1565b60009081526001919091016020526040902054151590565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928262000546576000855562000591565b82601f106200056157805160ff191683800117855562000591565b8280016001018555821562000591579182015b828111156200059157825182559160200191906001019062000574565b506200059f929150620005a3565b5090565b5b808211156200059f5760008155600101620005a4565b61285180620005ca6000396000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c80636a6278421161010f578063a22cb465116100a2578063d539139311610071578063d5391393146106a3578063d547741f146106ab578063e63ab1e9146106d7578063e985e9c5146106df576101f0565b8063a22cb46514610575578063b88d4fde146105a3578063c87b56dd14610669578063ca15c87314610686576101f0565b80639010d07c116100de5780639010d07c1461051657806391d148541461053957806395d89b4114610565578063a217fddf1461056d576101f0565b80636a627842146104ba5780636c0360eb146104e057806370a08231146104e85780638456cb591461050e576101f0565b80632f745c591161018757806342966c681161015657806342966c681461045b5780634f6ccce7146104785780635c975abb146104955780636352211e1461049d576101f0565b80632f745c59146103c557806336568abe146103f15780633f4ba83a1461041d57806342842e0e14610425576101f0565b806318160ddd116101c357806318160ddd1461032c57806323b872dd14610346578063248a9ca31461037c5780632f2ff15d14610399576101f0565b806301ffc9a7146101f557806306fdde0314610248578063081812fc146102c5578063095ea7b3146102fe575b600080fd5b6102346004803603602081101561020b57600080fd5b50357fffffffff000000000000000000000000000000000000000000000000000000001661070d565b604080519115158252519081900360200190f35b610250610748565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561028a578181015183820152602001610272565b50505050905090810190601f1680156102b75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102e2600480360360208110156102db57600080fd5b50356107de565b604080516001600160a01b039092168252519081900360200190f35b61032a6004803603604081101561031457600080fd5b506001600160a01b038135169060200135610840565b005b61033461091b565b60408051918252519081900360200190f35b61032a6004803603606081101561035c57600080fd5b506001600160a01b0381358116916020810135909116906040013561092c565b6103346004803603602081101561039257600080fd5b5035610983565b61032a600480360360408110156103af57600080fd5b50803590602001356001600160a01b0316610998565b610334600480360360408110156103db57600080fd5b506001600160a01b038135169060200135610a04565b61032a6004803603604081101561040757600080fd5b50803590602001356001600160a01b0316610a2f565b61032a610a90565b61032a6004803603606081101561043b57600080fd5b506001600160a01b03813581169160208101359091169060400135610b01565b61032a6004803603602081101561047157600080fd5b5035610b1c565b6103346004803603602081101561048e57600080fd5b5035610b6e565b610234610b84565b6102e2600480360360208110156104b357600080fd5b5035610b8d565b61032a600480360360208110156104d057600080fd5b50356001600160a01b0316610bb5565b610250610c39565b610334600480360360208110156104fe57600080fd5b50356001600160a01b0316610c9a565b61032a610d02565b6102e26004803603604081101561052c57600080fd5b5080359060200135610d71565b6102346004803603604081101561054f57600080fd5b50803590602001356001600160a01b0316610d89565b610250610da1565b610334610e02565b61032a6004803603604081101561058b57600080fd5b506001600160a01b0381351690602001351515610e07565b61032a600480360360808110156105b957600080fd5b6001600160a01b038235811692602081013590911691604082013591908101906080810160608201356401000000008111156105f457600080fd5b82018360208201111561060657600080fd5b8035906020019184600183028401116401000000008311171561062857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610f2a945050505050565b6102506004803603602081101561067f57600080fd5b5035610f88565b6103346004803603602081101561069c57600080fd5b5035611209565b610334611220565b61032a600480360360408110156106c157600080fd5b50803590602001356001600160a01b0316611244565b61033461129d565b610234600480360360408110156106f557600080fd5b506001600160a01b03813581169160200135166112c1565b7fffffffff00000000000000000000000000000000000000000000000000000000811660009081526001602052604090205460ff165b919050565b60078054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107d45780601f106107a9576101008083540402835291602001916107d4565b820191906000526020600020905b8154815290600101906020018083116107b757829003601f168201915b5050505050905090565b60006107e982611304565b6108245760405162461bcd60e51b815260040180806020018281038252602c81526020018061266a602c913960400191505060405180910390fd5b506000908152600560205260409020546001600160a01b031690565b600061084b82610b8d565b9050806001600160a01b0316836001600160a01b0316141561089e5760405162461bcd60e51b81526004018080602001828103825260218152602001806126ee6021913960400191505060405180910390fd5b806001600160a01b03166108b0611311565b6001600160a01b031614806108d157506108d1816108cc611311565b6112c1565b61090c5760405162461bcd60e51b81526004018080602001828103825260388152602001806125bd6038913960400191505060405180910390fd5b6109168383611315565b505050565b6000610927600361139b565b905090565b61093d610937611311565b826113a6565b6109785760405162461bcd60e51b815260040180806020018281038252603181526020018061270f6031913960400191505060405180910390fd5b61091683838361144a565b60009081526020819052604090206002015490565b6000828152602081905260409020600201546109bb906109b6611311565b610d89565b6109f65760405162461bcd60e51b815260040180806020018281038252602f81526020018061249e602f913960400191505060405180910390fd5b610a008282611596565b5050565b6001600160a01b0382166000908152600260205260408120610a2690836115ff565b90505b92915050565b610a37611311565b6001600160a01b0316816001600160a01b031614610a865760405162461bcd60e51b815260040180806020018281038252602f8152602001806127ed602f913960400191505060405180910390fd5b610a00828261160b565b610abc7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a6109b6611311565b610af75760405162461bcd60e51b81526004018080602001828103825260408152602001806127ad6040913960400191505060405180910390fd5b610aff611674565b565b61091683838360405180602001604052806000815250610f2a565b610b27610937611311565b610b625760405162461bcd60e51b815260040180806020018281038252603081526020018061277d6030913960400191505060405180910390fd5b610b6b8161173b565b50565b600080610b7c600384611808565b509392505050565b600b5460ff1690565b6000610a298260405180606001604052806029815260200161261f6029913960039190611824565b610be17f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66109b6611311565b610c1c5760405162461bcd60e51b815260040180806020018281038252603d815260200180612740603d913960400191505060405180910390fd5b610c2f81610c2a600c61183b565b61183f565b610b6b600c61196d565b600a8054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107d45780601f106107a9576101008083540402835291602001916107d4565b60006001600160a01b038216610ce15760405162461bcd60e51b815260040180806020018281038252602a8152602001806125f5602a913960400191505060405180910390fd5b6001600160a01b0382166000908152600260205260409020610a299061139b565b610d2e7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a6109b6611311565b610d695760405162461bcd60e51b815260040180806020018281038252603e8152602001806124ff603e913960400191505060405180910390fd5b610aff611976565b6000828152602081905260408120610a2690836115ff565b6000828152602081905260408120610a269083611a24565b60088054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107d45780601f106107a9576101008083540402835291602001916107d4565b600081565b610e0f611311565b6001600160a01b0316826001600160a01b03161415610e75576040805162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b8060066000610e82611311565b6001600160a01b0390811682526020808301939093526040918201600090812091871680825291909352912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001692151592909217909155610ee4611311565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b610f3b610f35611311565b836113a6565b610f765760405162461bcd60e51b815260040180806020018281038252603181526020018061270f6031913960400191505060405180910390fd5b610f8284848484611a39565b50505050565b6060610f9382611304565b610fce5760405162461bcd60e51b815260040180806020018281038252602f8152602001806126bf602f913960400191505060405180910390fd5b60008281526009602090815260408083208054825160026001831615610100026000190190921691909104601f8101859004850282018501909352828152929091908301828280156110615780601f1061103657610100808354040283529160200191611061565b820191906000526020600020905b81548152906001019060200180831161104457829003601f168201915b505050505090506000611072610c39565b905080516000141561108657509050610743565b8151156111475780826040516020018083805190602001908083835b602083106110c15780518252601f1990920191602091820191016110a2565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b602083106111095780518252601f1990920191602091820191016110ea565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050610743565b8061115185611a8b565b6040516020018083805190602001908083835b602083106111835780518252601f199092019160209182019101611164565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b602083106111cb5780518252601f1990920191602091820191016111ac565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050919050565b6000818152602081905260408120610a299061139b565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b600082815260208190526040902060020154611262906109b6611311565b610a865760405162461bcd60e51b815260040180806020018281038252603081526020018061258d6030913960400191505060405180910390fd5b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b6000610a26836001600160a01b038416611b9a565b6000610a29600383611be4565b3390565b600081815260056020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038416908117909155819061136282610b8d565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610a298261183b565b60006113b182611304565b6113ec5760405162461bcd60e51b815260040180806020018281038252602c815260200180612561602c913960400191505060405180910390fd5b60006113f783610b8d565b9050806001600160a01b0316846001600160a01b031614806114325750836001600160a01b0316611427846107de565b6001600160a01b0316145b80611442575061144281856112c1565b949350505050565b826001600160a01b031661145d82610b8d565b6001600160a01b0316146114a25760405162461bcd60e51b81526004018080602001828103825260298152602001806126966029913960400191505060405180910390fd5b6001600160a01b0382166114e75760405162461bcd60e51b815260040180806020018281038252602481526020018061253d6024913960400191505060405180910390fd5b6114f2838383611bf0565b6114fd600082611315565b6001600160a01b038316600090815260026020526040902061151f9082611bfb565b506001600160a01b03821660009081526002602052604090206115429082611c07565b5061154f60038284611c13565b5080826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60008281526020819052604090206115ae90826112ef565b15610a00576115bb611311565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610a268383611c29565b60008281526020819052604090206116239082611c8d565b15610a0057611630611311565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b61167c610b84565b6116cd576040805162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015290519081900360640190fd5b600b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa61171e611311565b604080516001600160a01b039092168252519081900360200190a1565b600061174682610b8d565b905061175481600084611bf0565b61175f600083611315565b600082815260096020526040902054600260001961010060018416150201909116041561179d57600082815260096020526040812061179d916123f8565b6001600160a01b03811660009081526002602052604090206117bf9083611bfb565b506117cb600383611ca2565b5060405182906000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60008080806118178686611cae565b9097909650945050505050565b6000611831848484611d29565b90505b9392505050565b5490565b6001600160a01b03821661189a576040805162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b6118a381611304565b156118f5576040805162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015290519081900360640190fd5b61190160008383611bf0565b6001600160a01b03821660009081526002602052604090206119239082611c07565b5061193060038284611c13565b5060405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b80546001019055565b61197e610b84565b156119d0576040805162461bcd60e51b815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015290519081900360640190fd5b600b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861171e611311565b6000610a26836001600160a01b038416611df3565b611a4484848461144a565b611a5084848484611e0b565b610f825760405162461bcd60e51b81526004018080602001828103825260328152602001806124cd6032913960400191505060405180910390fd5b606081611acc575060408051808201909152600181527f30000000000000000000000000000000000000000000000000000000000000006020820152610743565b8160005b8115611ae457600101600a82049150611ad0565b60008167ffffffffffffffff81118015611afd57600080fd5b506040519080825280601f01601f191660200182016040528015611b28576020820181803683370190505b50859350905060001982015b8315611b9157600a840660300160f81b82828060019003935081518110611b5757fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84049350611b34565b50949350505050565b6000611ba68383611df3565b611bdc57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610a29565b506000610a29565b6000610a268383611df3565b610916838383611fe7565b6000610a268383612036565b6000610a268383611b9a565b600061183184846001600160a01b0385166120fc565b81546000908210611c6b5760405162461bcd60e51b81526004018080602001828103825260228152602001806124516022913960400191505060405180910390fd5b826000018281548110611c7a57fe5b9060005260206000200154905092915050565b6000610a26836001600160a01b038416612036565b6000610a268383612193565b815460009081908310611cf25760405162461bcd60e51b81526004018080602001828103825260228152602001806126486022913960400191505060405180910390fd5b6000846000018481548110611d0357fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008281526001840160205260408120548281611dc45760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611d89578181015183820152602001611d71565b50505050905090810190601f168015611db65780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50846000016001820381548110611dd757fe5b9060005260206000209060020201600101549150509392505050565b60009081526001919091016020526040902054151590565b6000611e1f846001600160a01b0316612267565b611e2b57506001611442565b6000611f7c7f150b7a0200000000000000000000000000000000000000000000000000000000611e59611311565b88878760405160240180856001600160a01b03168152602001846001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611ec0578181015183820152602001611ea8565b50505050905090810190601f168015611eed5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518060600160405280603281526020016124cd603291396001600160a01b038816919061226d565b90506000818060200190516020811015611f9557600080fd5b50517fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a02000000000000000000000000000000000000000000000000000000001492505050949350505050565b611ff2838383610916565b611ffa610b84565b156109165760405162461bcd60e51b815260040180806020018281038252602b815260200180612473602b913960400191505060405180910390fd5b600081815260018301602052604081205480156120f2578354600019808301919081019060009087908390811061206957fe5b906000526020600020015490508087600001848154811061208657fe5b6000918252602080832090910192909255828152600189810190925260409020908401905586548790806120b657fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610a29565b6000915050610a29565b600082815260018401602052604081205480612161575050604080518082018252838152602080820184815286546001818101895560008981528481209551600290930290950191825591519082015586548684528188019092529290912055611834565b8285600001600183038154811061217457fe5b9060005260206000209060020201600101819055506000915050611834565b600081815260018301602052604081205480156120f257835460001980830191908101906000908790839081106121c657fe5b90600052602060002090600202019050808760000184815481106121e657fe5b60009182526020808320845460029093020191825560019384015491840191909155835482528983019052604090209084019055865487908061222557fe5b6000828152602080822060026000199094019384020182815560019081018390559290935588815289820190925260408220919091559450610a299350505050565b3b151590565b606061183184846000858561228185612267565b6122d2576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b602083106123105780518252601f1990920191602091820191016122f1565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612372576040519150601f19603f3d011682016040523d82523d6000602084013e612377565b606091505b5091509150612387828286612392565b979650505050505050565b606083156123a1575081611834565b8251156123b15782518084602001fd5b60405162461bcd60e51b8152602060048201818152845160248401528451859391928392604401919085019080838360008315611d89578181015183820152602001611d71565b50805460018160011615610100020316600290046000825580601f1061241e5750610b6b565b601f016020900490600052602060002090810190610b6b91905b8082111561244c5760008155600101612438565b509056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732315061757361626c653a20746f6b656e207472616e73666572207768696c6520706175736564416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e744552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732315072657365744d696e7465725061757365724175746f49643a206d75737420686176652070617573657220726f6c6520746f2070617573654552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b654552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644552433732315072657365744d696e7465725061757365724175746f49643a206d7573742068617665206d696e74657220726f6c6520746f206d696e744552433732314275726e61626c653a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644552433732315072657365744d696e7465725061757365724175746f49643a206d75737420686176652070617573657220726f6c6520746f20756e7061757365416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66a2646970667358221220baba7f08ea6ae18d515a0600ce5837bb34f1700ab475b00ec4f7af3d8855ff5664736f6c63430007060033";
