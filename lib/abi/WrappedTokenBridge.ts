import { narrow } from 'abitype'

export const WrappedTokenBridgeAbi = narrow([
  {
    inputs: [
      {
        internalType: "address",
        name: "_endpoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "_nonce",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_payload",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_reason",
        type: "bytes",
      },
    ],
    name: "MessageFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "localToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "remoteChainId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "address",
        name: "remoteToken",
        type: "address",
      },
    ],
    name: "RegisterToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "_nonce",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_payloadHash",
        type: "bytes32",
      },
    ],
    name: "RetryMessageSuccess",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "_type",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_minDstGas",
        type: "uint256",
      },
    ],
    name: "SetMinDstGas",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "precrime",
        type: "address",
      },
    ],
    name: "SetPrecrime",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_path",
        type: "bytes",
      },
    ],
    name: "SetTrustedRemote",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_remoteAddress",
        type: "bytes",
      },
    ],
    name: "SetTrustedRemoteAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "useCustomAdapterParams",
        type: "bool",
      },
    ],
    name: "SetUseCustomAdapterParams",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "withdrawalFeeBps",
        type: "uint16",
      },
    ],
    name: "SetWithdrawalFeeBps",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "localToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "remoteToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "remoteChainId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "UnwrapToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "localToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "remoteToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "remoteChainId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WrapToken",
    type: "event",
  },
  {
    inputs: [],
    name: "PT_MINT",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PT_UNLOCK",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TOTAL_BPS",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "localToken",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "remoteChainId",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bool",
        name: "unwrapWeth",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "address payable",
            name: "refundAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "zroPaymentAddress",
            type: "address",
          },
        ],
        internalType: "struct LzLib.CallParams",
        name: "callParams",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "adapterParams",
        type: "bytes",
      },
    ],
    name: "bridge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "remoteChainId",
        type: "uint16",
      },
      {
        internalType: "bool",
        name: "useZro",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "adapterParams",
        type: "bytes",
      },
    ],
    name: "estimateBridgeFee",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "zroFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    name: "failedMessages",
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
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes",
      },
    ],
    name: "forceResumeReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_version",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_configType",
        type: "uint256",
      },
    ],
    name: "getConfig",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16",
      },
    ],
    name: "getTrustedRemoteAddress",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes",
      },
    ],
    name: "isTrustedRemote",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    name: "localToRemote",
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
    name: "lzEndpoint",
    outputs: [
      {
        internalType: "contract ILayerZeroEndpoint",
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
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes",
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes",
      },
    ],
    name: "lzReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    name: "minDstGasLookup",
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
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes",
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes",
      },
    ],
    name: "nonblockingLzReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "precrime",
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
        internalType: "address",
        name: "localToken",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "remoteChainId",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "remoteToken",
        type: "address",
      },
    ],
    name: "registerToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    name: "remoteToLocal",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes",
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes",
      },
    ],
    name: "retryMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_version",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "_configType",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_config",
        type: "bytes",
      },
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_packetType",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "_minGas",
        type: "uint256",
      },
    ],
    name: "setMinDstGas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_precrime",
        type: "address",
      },
    ],
    name: "setPrecrime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_version",
        type: "uint16",
      },
    ],
    name: "setReceiveVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_version",
        type: "uint16",
      },
    ],
    name: "setSendVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "_path",
        type: "bytes",
      },
    ],
    name: "setTrustedRemote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "_remoteAddress",
        type: "bytes",
      },
    ],
    name: "setTrustedRemoteAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_useCustomAdapterParams",
        type: "bool",
      },
    ],
    name: "setUseCustomAdapterParams",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_withdrawalFeeBps",
        type: "uint16",
      },
    ],
    name: "setWithdrawalFeeBps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "totalValueLocked",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    name: "trustedRemoteLookup",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "useCustomAdapterParams",
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
    name: "withdrawalFeeBps",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
]);
