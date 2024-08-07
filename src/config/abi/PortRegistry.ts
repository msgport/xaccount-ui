export const address = '0x99503F8A95dD259547900131E3d98F394B6BA88A' as `0x${string}`;
export const abi = [
  {
    inputs: [
      { internalType: 'address', name: 'logic', type: 'address' },
      { internalType: 'bytes', name: 'data', type: 'bytes' }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: 'previousAdmin', type: 'address' },
      { indexed: false, internalType: 'address', name: 'newAdmin', type: 'address' }
    ],
    name: 'AdminChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'address', name: 'beacon', type: 'address' }],
    name: 'BeaconUpgraded',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'address', name: 'implementation', type: 'address' }],
    name: 'Upgraded',
    type: 'event'
  },
  { stateMutability: 'payable', type: 'fallback' },
  { stateMutability: 'payable', type: 'receive' }
] as const;
