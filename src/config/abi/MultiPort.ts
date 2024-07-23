export const address = '0xab3172FB251B2047813Ea1940F2cFaA287B1a665' as `0x${string}`;

export const abi = [
  {
    inputs: [
      { internalType: 'address', name: 'dao', type: 'address' },
      { internalType: 'uint256', name: 'threshold_', type: 'uint256' },
      { internalType: 'string', name: 'name', type: 'string' }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'msgId', type: 'bytes32' },
      { indexed: false, internalType: 'bool', name: 'result', type: 'bool' },
      { indexed: false, internalType: 'bytes', name: 'returnData', type: 'bytes' }
    ],
    name: 'MessageRecv',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'msgId', type: 'bytes32' },
      { indexed: false, internalType: 'address', name: 'fromDapp', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'toChainId', type: 'uint256' },
      { indexed: false, internalType: 'address', name: 'toDapp', type: 'address' },
      { indexed: false, internalType: 'bytes', name: 'message', type: 'bytes' },
      { indexed: false, internalType: 'bytes', name: 'params', type: 'bytes' }
    ],
    name: 'MessageSent',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
    ],
    name: 'OwnershipTransferStarted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint256', name: 'chainId', type: 'uint256' },
      { indexed: false, internalType: 'address', name: 'peer', type: 'address' }
    ],
    name: 'PeerSet',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'portMsgId', type: 'bytes32' },
      { indexed: false, internalType: 'address', name: 'port', type: 'address' }
    ],
    name: 'PortMessageConfirmation',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'bytes32', name: 'portMsgId', type: 'bytes32' }],
    name: 'PortMessageExecution',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'bytes32', name: 'portMsgId', type: 'bytes32' }],
    name: 'PortMessageExpired',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'portMsgId', type: 'bytes32' },
      {
        components: [
          { internalType: 'uint256', name: 'fromChainId', type: 'uint256' },
          { internalType: 'uint256', name: 'toChainId', type: 'uint256' },
          { internalType: 'address', name: 'fromDapp', type: 'address' },
          { internalType: 'address', name: 'toDapp', type: 'address' },
          { internalType: 'uint256', name: 'nonce', type: 'uint256' },
          { internalType: 'uint256', name: 'expiration', type: 'uint256' },
          { internalType: 'bytes', name: 'message', type: 'bytes' }
        ],
        indexed: false,
        internalType: 'struct MultiPort.PortMsg',
        name: 'portMsg',
        type: 'tuple'
      }
    ],
    name: 'PortMessageSent',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint256', name: 'threshold', type: 'uint256' }],
    name: 'SetThreshold',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'string', name: 'uri', type: 'string' }],
    name: 'URI',
    type: 'event'
  },
  {
    inputs: [],
    name: 'LOCAL_CHAINID',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'MAX_MESSAGE_EXPIRATION',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'port', type: 'address' }],
    name: 'addTrustedPort',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    name: 'countOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: '', type: 'bytes32' },
      { internalType: 'address', name: '', type: 'address' }
    ],
    name: 'deliverifyOf',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    name: 'doneOf',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'bytes', name: '', type: 'bytes' },
      { internalType: 'bytes', name: '', type: 'bytes' }
    ],
    name: 'fee',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'uint256', name: 'fromChainId', type: 'uint256' },
          { internalType: 'uint256', name: 'toChainId', type: 'uint256' },
          { internalType: 'address', name: 'fromDapp', type: 'address' },
          { internalType: 'address', name: 'toDapp', type: 'address' },
          { internalType: 'uint256', name: 'nonce', type: 'uint256' },
          { internalType: 'uint256', name: 'expiration', type: 'uint256' },
          { internalType: 'bytes', name: 'message', type: 'bytes' }
        ],
        internalType: 'struct MultiPort.PortMsg',
        name: 'portMsg',
        type: 'tuple'
      }
    ],
    name: 'hash',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'port', type: 'address' }],
    name: 'isTrustedPort',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'uint256', name: 'fromChainId', type: 'uint256' },
          { internalType: 'uint256', name: 'toChainId', type: 'uint256' },
          { internalType: 'address', name: 'fromDapp', type: 'address' },
          { internalType: 'address', name: 'toDapp', type: 'address' },
          { internalType: 'uint256', name: 'nonce', type: 'uint256' },
          { internalType: 'uint256', name: 'expiration', type: 'uint256' },
          { internalType: 'bytes', name: 'message', type: 'bytes' }
        ],
        internalType: 'struct MultiPort.PortMsg',
        name: 'portMsg',
        type: 'tuple'
      }
    ],
    name: 'multiRecv',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'chainId', type: 'uint256' }],
    name: 'peerOf',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'pendingOwner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'port', type: 'address' }],
    name: 'rmTrustedPort',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'toChainId', type: 'uint256' },
      { internalType: 'address', name: 'toDapp', type: 'address' },
      { internalType: 'bytes', name: 'message', type: 'bytes' },
      { internalType: 'bytes', name: 'params', type: 'bytes' }
    ],
    name: 'send',
    outputs: [{ internalType: 'bytes32', name: 'msgId', type: 'bytes32' }],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'chainId', type: 'uint256' },
      { internalType: 'address', name: 'peer', type: 'address' }
    ],
    name: 'setPeer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'threshold_', type: 'uint256' }],
    name: 'setThreshold',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'string', name: 'uri', type: 'string' }],
    name: 'setURI',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'threshold',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'trustedPortCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'trustedPorts',
    outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'uri',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  }
] as const;
