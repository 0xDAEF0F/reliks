import Moralis from 'moralis'
import Axios from 'axios'
export const ethers = Moralis.web3Library
import qs from 'querystring'

export const abi = JSON.parse(`[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_appAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_whaleLimit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_initialLairEntry",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newWhale",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "oldWhale",
				"type": "address"
			}
		],
		"name": "LogNewWhale",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "APP_ADDRESS",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "CREATOR_ADDRESS",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enterLair",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initialLairEntry",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isWhale",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lairFull",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "refundWhaleAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "whaleArr",
		"outputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "grant",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "whaleLimit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]`)
const bytecode = {
  functionDebugData: {
    '@_66': {
      entryPoint: null,
      id: 66,
      parameterSlots: 3,
      returnSlots: 0,
    },
    abi_decode_t_address_fromMemory: {
      entryPoint: 188,
      id: null,
      parameterSlots: 2,
      returnSlots: 1,
    },
    abi_decode_t_uint256_fromMemory: {
      entryPoint: 211,
      id: null,
      parameterSlots: 2,
      returnSlots: 1,
    },
    abi_decode_tuple_t_addresst_uint256t_uint256_fromMemory: {
      entryPoint: 234,
      id: null,
      parameterSlots: 2,
      returnSlots: 3,
    },
    allocate_unbounded: {
      entryPoint: null,
      id: null,
      parameterSlots: 0,
      returnSlots: 1,
    },
    cleanup_t_address: {
      entryPoint: 326,
      id: null,
      parameterSlots: 1,
      returnSlots: 1,
    },
    cleanup_t_uint160: {
      entryPoint: 346,
      id: null,
      parameterSlots: 1,
      returnSlots: 1,
    },
    cleanup_t_uint256: {
      entryPoint: 378,
      id: null,
      parameterSlots: 1,
      returnSlots: 1,
    },
    revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db: {
      entryPoint: null,
      id: null,
      parameterSlots: 0,
      returnSlots: 0,
    },
    revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b: {
      entryPoint: 388,
      id: null,
      parameterSlots: 0,
      returnSlots: 0,
    },
    validator_revert_t_address: {
      entryPoint: 393,
      id: null,
      parameterSlots: 1,
      returnSlots: 0,
    },
    validator_revert_t_uint256: {
      entryPoint: 419,
      id: null,
      parameterSlots: 1,
      returnSlots: 0,
    },
  },
  generatedSources: [
    {
      ast: {
        nodeType: 'YulBlock',
        src: '0:1871:1',
        statements: [
          {
            body: {
              nodeType: 'YulBlock',
              src: '70:80:1',
              statements: [
                {
                  nodeType: 'YulAssignment',
                  src: '80:22:1',
                  value: {
                    arguments: [
                      {
                        name: 'offset',
                        nodeType: 'YulIdentifier',
                        src: '95:6:1',
                      },
                    ],
                    functionName: {
                      name: 'mload',
                      nodeType: 'YulIdentifier',
                      src: '89:5:1',
                    },
                    nodeType: 'YulFunctionCall',
                    src: '89:13:1',
                  },
                  variableNames: [
                    {
                      name: 'value',
                      nodeType: 'YulIdentifier',
                      src: '80:5:1',
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: 'value',
                        nodeType: 'YulIdentifier',
                        src: '138:5:1',
                      },
                    ],
                    functionName: {
                      name: 'validator_revert_t_address',
                      nodeType: 'YulIdentifier',
                      src: '111:26:1',
                    },
                    nodeType: 'YulFunctionCall',
                    src: '111:33:1',
                  },
                  nodeType: 'YulExpressionStatement',
                  src: '111:33:1',
                },
              ],
            },
            name: 'abi_decode_t_address_fromMemory',
            nodeType: 'YulFunctionDefinition',
            parameters: [
              {
                name: 'offset',
                nodeType: 'YulTypedName',
                src: '48:6:1',
                type: '',
              },
              {
                name: 'end',
                nodeType: 'YulTypedName',
                src: '56:3:1',
                type: '',
              },
            ],
            returnVariables: [
              {
                name: 'value',
                nodeType: 'YulTypedName',
                src: '64:5:1',
                type: '',
              },
            ],
            src: '7:143:1',
          },
          {
            body: {
              nodeType: 'YulBlock',
              src: '219:80:1',
              statements: [
                {
                  nodeType: 'YulAssignment',
                  src: '229:22:1',
                  value: {
                    arguments: [
                      {
                        name: 'offset',
                        nodeType: 'YulIdentifier',
                        src: '244:6:1',
                      },
                    ],
                    functionName: {
                      name: 'mload',
                      nodeType: 'YulIdentifier',
                      src: '238:5:1',
                    },
                    nodeType: 'YulFunctionCall',
                    src: '238:13:1',
                  },
                  variableNames: [
                    {
                      name: 'value',
                      nodeType: 'YulIdentifier',
                      src: '229:5:1',
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: 'value',
                        nodeType: 'YulIdentifier',
                        src: '287:5:1',
                      },
                    ],
                    functionName: {
                      name: 'validator_revert_t_uint256',
                      nodeType: 'YulIdentifier',
                      src: '260:26:1',
                    },
                    nodeType: 'YulFunctionCall',
                    src: '260:33:1',
                  },
                  nodeType: 'YulExpressionStatement',
                  src: '260:33:1',
                },
              ],
            },
            name: 'abi_decode_t_uint256_fromMemory',
            nodeType: 'YulFunctionDefinition',
            parameters: [
              {
                name: 'offset',
                nodeType: 'YulTypedName',
                src: '197:6:1',
                type: '',
              },
              {
                name: 'end',
                nodeType: 'YulTypedName',
                src: '205:3:1',
                type: '',
              },
            ],
            returnVariables: [
              {
                name: 'value',
                nodeType: 'YulTypedName',
                src: '213:5:1',
                type: '',
              },
            ],
            src: '156:143:1',
          },
          {
            body: {
              nodeType: 'YulBlock',
              src: '416:552:1',
              statements: [
                {
                  body: {
                    nodeType: 'YulBlock',
                    src: '462:83:1',
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: 'revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b',
                            nodeType: 'YulIdentifier',
                            src: '464:77:1',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '464:79:1',
                        },
                        nodeType: 'YulExpressionStatement',
                        src: '464:79:1',
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: 'dataEnd',
                            nodeType: 'YulIdentifier',
                            src: '437:7:1',
                          },
                          {
                            name: 'headStart',
                            nodeType: 'YulIdentifier',
                            src: '446:9:1',
                          },
                        ],
                        functionName: {
                          name: 'sub',
                          nodeType: 'YulIdentifier',
                          src: '433:3:1',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '433:23:1',
                      },
                      {
                        kind: 'number',
                        nodeType: 'YulLiteral',
                        src: '458:2:1',
                        type: '',
                        value: '96',
                      },
                    ],
                    functionName: {
                      name: 'slt',
                      nodeType: 'YulIdentifier',
                      src: '429:3:1',
                    },
                    nodeType: 'YulFunctionCall',
                    src: '429:32:1',
                  },
                  nodeType: 'YulIf',
                  src: '426:119:1',
                },
                {
                  nodeType: 'YulBlock',
                  src: '555:128:1',
                  statements: [
                    {
                      nodeType: 'YulVariableDeclaration',
                      src: '570:15:1',
                      value: {
                        kind: 'number',
                        nodeType: 'YulLiteral',
                        src: '584:1:1',
                        type: '',
                        value: '0',
                      },
                      variables: [
                        {
                          name: 'offset',
                          nodeType: 'YulTypedName',
                          src: '574:6:1',
                          type: '',
                        },
                      ],
                    },
                    {
                      nodeType: 'YulAssignment',
                      src: '599:74:1',
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: 'headStart',
                                nodeType: 'YulIdentifier',
                                src: '645:9:1',
                              },
                              {
                                name: 'offset',
                                nodeType: 'YulIdentifier',
                                src: '656:6:1',
                              },
                            ],
                            functionName: {
                              name: 'add',
                              nodeType: 'YulIdentifier',
                              src: '641:3:1',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '641:22:1',
                          },
                          {
                            name: 'dataEnd',
                            nodeType: 'YulIdentifier',
                            src: '665:7:1',
                          },
                        ],
                        functionName: {
                          name: 'abi_decode_t_address_fromMemory',
                          nodeType: 'YulIdentifier',
                          src: '609:31:1',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '609:64:1',
                      },
                      variableNames: [
                        {
                          name: 'value0',
                          nodeType: 'YulIdentifier',
                          src: '599:6:1',
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: 'YulBlock',
                  src: '693:129:1',
                  statements: [
                    {
                      nodeType: 'YulVariableDeclaration',
                      src: '708:16:1',
                      value: {
                        kind: 'number',
                        nodeType: 'YulLiteral',
                        src: '722:2:1',
                        type: '',
                        value: '32',
                      },
                      variables: [
                        {
                          name: 'offset',
                          nodeType: 'YulTypedName',
                          src: '712:6:1',
                          type: '',
                        },
                      ],
                    },
                    {
                      nodeType: 'YulAssignment',
                      src: '738:74:1',
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: 'headStart',
                                nodeType: 'YulIdentifier',
                                src: '784:9:1',
                              },
                              {
                                name: 'offset',
                                nodeType: 'YulIdentifier',
                                src: '795:6:1',
                              },
                            ],
                            functionName: {
                              name: 'add',
                              nodeType: 'YulIdentifier',
                              src: '780:3:1',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '780:22:1',
                          },
                          {
                            name: 'dataEnd',
                            nodeType: 'YulIdentifier',
                            src: '804:7:1',
                          },
                        ],
                        functionName: {
                          name: 'abi_decode_t_uint256_fromMemory',
                          nodeType: 'YulIdentifier',
                          src: '748:31:1',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '748:64:1',
                      },
                      variableNames: [
                        {
                          name: 'value1',
                          nodeType: 'YulIdentifier',
                          src: '738:6:1',
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: 'YulBlock',
                  src: '832:129:1',
                  statements: [
                    {
                      nodeType: 'YulVariableDeclaration',
                      src: '847:16:1',
                      value: {
                        kind: 'number',
                        nodeType: 'YulLiteral',
                        src: '861:2:1',
                        type: '',
                        value: '64',
                      },
                      variables: [
                        {
                          name: 'offset',
                          nodeType: 'YulTypedName',
                          src: '851:6:1',
                          type: '',
                        },
                      ],
                    },
                    {
                      nodeType: 'YulAssignment',
                      src: '877:74:1',
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: 'headStart',
                                nodeType: 'YulIdentifier',
                                src: '923:9:1',
                              },
                              {
                                name: 'offset',
                                nodeType: 'YulIdentifier',
                                src: '934:6:1',
                              },
                            ],
                            functionName: {
                              name: 'add',
                              nodeType: 'YulIdentifier',
                              src: '919:3:1',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '919:22:1',
                          },
                          {
                            name: 'dataEnd',
                            nodeType: 'YulIdentifier',
                            src: '943:7:1',
                          },
                        ],
                        functionName: {
                          name: 'abi_decode_t_uint256_fromMemory',
                          nodeType: 'YulIdentifier',
                          src: '887:31:1',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '887:64:1',
                      },
                      variableNames: [
                        {
                          name: 'value2',
                          nodeType: 'YulIdentifier',
                          src: '877:6:1',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: 'abi_decode_tuple_t_addresst_uint256t_uint256_fromMemory',
            nodeType: 'YulFunctionDefinition',
            parameters: [
              {
                name: 'headStart',
                nodeType: 'YulTypedName',
                src: '370:9:1',
                type: '',
              },
              {
                name: 'dataEnd',
                nodeType: 'YulTypedName',
                src: '381:7:1',
                type: '',
              },
            ],
            returnVariables: [
              {
                name: 'value0',
                nodeType: 'YulTypedName',
                src: '393:6:1',
                type: '',
              },
              {
                name: 'value1',
                nodeType: 'YulTypedName',
                src: '401:6:1',
                type: '',
              },
              {
                name: 'value2',
                nodeType: 'YulTypedName',
                src: '409:6:1',
                type: '',
              },
            ],
            src: '305:663:1',
          },
          {
            body: {
              nodeType: 'YulBlock',
              src: '1014:35:1',
              statements: [
                {
                  nodeType: 'YulAssignment',
                  src: '1024:19:1',
                  value: {
                    arguments: [
                      {
                        kind: 'number',
                        nodeType: 'YulLiteral',
                        src: '1040:2:1',
                        type: '',
                        value: '64',
                      },
                    ],
                    functionName: {
                      name: 'mload',
                      nodeType: 'YulIdentifier',
                      src: '1034:5:1',
                    },
                    nodeType: 'YulFunctionCall',
                    src: '1034:9:1',
                  },
                  variableNames: [
                    {
                      name: 'memPtr',
                      nodeType: 'YulIdentifier',
                      src: '1024:6:1',
                    },
                  ],
                },
              ],
            },
            name: 'allocate_unbounded',
            nodeType: 'YulFunctionDefinition',
            returnVariables: [
              {
                name: 'memPtr',
                nodeType: 'YulTypedName',
                src: '1007:6:1',
                type: '',
              },
            ],
            src: '974:75:1',
          },
          {
            body: {
              nodeType: 'YulBlock',
              src: '1100:51:1',
              statements: [
                {
                  nodeType: 'YulAssignment',
                  src: '1110:35:1',
                  value: {
                    arguments: [
                      {
                        name: 'value',
                        nodeType: 'YulIdentifier',
                        src: '1139:5:1',
                      },
                    ],
                    functionName: {
                      name: 'cleanup_t_uint160',
                      nodeType: 'YulIdentifier',
                      src: '1121:17:1',
                    },
                    nodeType: 'YulFunctionCall',
                    src: '1121:24:1',
                  },
                  variableNames: [
                    {
                      name: 'cleaned',
                      nodeType: 'YulIdentifier',
                      src: '1110:7:1',
                    },
                  ],
                },
              ],
            },
            name: 'cleanup_t_address',
            nodeType: 'YulFunctionDefinition',
            parameters: [
              {
                name: 'value',
                nodeType: 'YulTypedName',
                src: '1082:5:1',
                type: '',
              },
            ],
            returnVariables: [
              {
                name: 'cleaned',
                nodeType: 'YulTypedName',
                src: '1092:7:1',
                type: '',
              },
            ],
            src: '1055:96:1',
          },
          {
            body: {
              nodeType: 'YulBlock',
              src: '1202:81:1',
              statements: [
                {
                  nodeType: 'YulAssignment',
                  src: '1212:65:1',
                  value: {
                    arguments: [
                      {
                        name: 'value',
                        nodeType: 'YulIdentifier',
                        src: '1227:5:1',
                      },
                      {
                        kind: 'number',
                        nodeType: 'YulLiteral',
                        src: '1234:42:1',
                        type: '',
                        value: '0xffffffffffffffffffffffffffffffffffffffff',
                      },
                    ],
                    functionName: {
                      name: 'and',
                      nodeType: 'YulIdentifier',
                      src: '1223:3:1',
                    },
                    nodeType: 'YulFunctionCall',
                    src: '1223:54:1',
                  },
                  variableNames: [
                    {
                      name: 'cleaned',
                      nodeType: 'YulIdentifier',
                      src: '1212:7:1',
                    },
                  ],
                },
              ],
            },
            name: 'cleanup_t_uint160',
            nodeType: 'YulFunctionDefinition',
            parameters: [
              {
                name: 'value',
                nodeType: 'YulTypedName',
                src: '1184:5:1',
                type: '',
              },
            ],
            returnVariables: [
              {
                name: 'cleaned',
                nodeType: 'YulTypedName',
                src: '1194:7:1',
                type: '',
              },
            ],
            src: '1157:126:1',
          },
          {
            body: {
              nodeType: 'YulBlock',
              src: '1334:32:1',
              statements: [
                {
                  nodeType: 'YulAssignment',
                  src: '1344:16:1',
                  value: {
                    name: 'value',
                    nodeType: 'YulIdentifier',
                    src: '1355:5:1',
                  },
                  variableNames: [
                    {
                      name: 'cleaned',
                      nodeType: 'YulIdentifier',
                      src: '1344:7:1',
                    },
                  ],
                },
              ],
            },
            name: 'cleanup_t_uint256',
            nodeType: 'YulFunctionDefinition',
            parameters: [
              {
                name: 'value',
                nodeType: 'YulTypedName',
                src: '1316:5:1',
                type: '',
              },
            ],
            returnVariables: [
              {
                name: 'cleaned',
                nodeType: 'YulTypedName',
                src: '1326:7:1',
                type: '',
              },
            ],
            src: '1289:77:1',
          },
          {
            body: {
              nodeType: 'YulBlock',
              src: '1461:28:1',
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: 'number',
                        nodeType: 'YulLiteral',
                        src: '1478:1:1',
                        type: '',
                        value: '0',
                      },
                      {
                        kind: 'number',
                        nodeType: 'YulLiteral',
                        src: '1481:1:1',
                        type: '',
                        value: '0',
                      },
                    ],
                    functionName: {
                      name: 'revert',
                      nodeType: 'YulIdentifier',
                      src: '1471:6:1',
                    },
                    nodeType: 'YulFunctionCall',
                    src: '1471:12:1',
                  },
                  nodeType: 'YulExpressionStatement',
                  src: '1471:12:1',
                },
              ],
            },
            name: 'revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db',
            nodeType: 'YulFunctionDefinition',
            src: '1372:117:1',
          },
          {
            body: {
              nodeType: 'YulBlock',
              src: '1584:28:1',
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: 'number',
                        nodeType: 'YulLiteral',
                        src: '1601:1:1',
                        type: '',
                        value: '0',
                      },
                      {
                        kind: 'number',
                        nodeType: 'YulLiteral',
                        src: '1604:1:1',
                        type: '',
                        value: '0',
                      },
                    ],
                    functionName: {
                      name: 'revert',
                      nodeType: 'YulIdentifier',
                      src: '1594:6:1',
                    },
                    nodeType: 'YulFunctionCall',
                    src: '1594:12:1',
                  },
                  nodeType: 'YulExpressionStatement',
                  src: '1594:12:1',
                },
              ],
            },
            name: 'revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b',
            nodeType: 'YulFunctionDefinition',
            src: '1495:117:1',
          },
          {
            body: {
              nodeType: 'YulBlock',
              src: '1661:79:1',
              statements: [
                {
                  body: {
                    nodeType: 'YulBlock',
                    src: '1718:16:1',
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '1727:1:1',
                              type: '',
                              value: '0',
                            },
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '1730:1:1',
                              type: '',
                              value: '0',
                            },
                          ],
                          functionName: {
                            name: 'revert',
                            nodeType: 'YulIdentifier',
                            src: '1720:6:1',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '1720:12:1',
                        },
                        nodeType: 'YulExpressionStatement',
                        src: '1720:12:1',
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: 'value',
                            nodeType: 'YulIdentifier',
                            src: '1684:5:1',
                          },
                          {
                            arguments: [
                              {
                                name: 'value',
                                nodeType: 'YulIdentifier',
                                src: '1709:5:1',
                              },
                            ],
                            functionName: {
                              name: 'cleanup_t_address',
                              nodeType: 'YulIdentifier',
                              src: '1691:17:1',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '1691:24:1',
                          },
                        ],
                        functionName: {
                          name: 'eq',
                          nodeType: 'YulIdentifier',
                          src: '1681:2:1',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '1681:35:1',
                      },
                    ],
                    functionName: {
                      name: 'iszero',
                      nodeType: 'YulIdentifier',
                      src: '1674:6:1',
                    },
                    nodeType: 'YulFunctionCall',
                    src: '1674:43:1',
                  },
                  nodeType: 'YulIf',
                  src: '1671:63:1',
                },
              ],
            },
            name: 'validator_revert_t_address',
            nodeType: 'YulFunctionDefinition',
            parameters: [
              {
                name: 'value',
                nodeType: 'YulTypedName',
                src: '1654:5:1',
                type: '',
              },
            ],
            src: '1618:122:1',
          },
          {
            body: {
              nodeType: 'YulBlock',
              src: '1789:79:1',
              statements: [
                {
                  body: {
                    nodeType: 'YulBlock',
                    src: '1846:16:1',
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '1855:1:1',
                              type: '',
                              value: '0',
                            },
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '1858:1:1',
                              type: '',
                              value: '0',
                            },
                          ],
                          functionName: {
                            name: 'revert',
                            nodeType: 'YulIdentifier',
                            src: '1848:6:1',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '1848:12:1',
                        },
                        nodeType: 'YulExpressionStatement',
                        src: '1848:12:1',
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: 'value',
                            nodeType: 'YulIdentifier',
                            src: '1812:5:1',
                          },
                          {
                            arguments: [
                              {
                                name: 'value',
                                nodeType: 'YulIdentifier',
                                src: '1837:5:1',
                              },
                            ],
                            functionName: {
                              name: 'cleanup_t_uint256',
                              nodeType: 'YulIdentifier',
                              src: '1819:17:1',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '1819:24:1',
                          },
                        ],
                        functionName: {
                          name: 'eq',
                          nodeType: 'YulIdentifier',
                          src: '1809:2:1',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '1809:35:1',
                      },
                    ],
                    functionName: {
                      name: 'iszero',
                      nodeType: 'YulIdentifier',
                      src: '1802:6:1',
                    },
                    nodeType: 'YulFunctionCall',
                    src: '1802:43:1',
                  },
                  nodeType: 'YulIf',
                  src: '1799:63:1',
                },
              ],
            },
            name: 'validator_revert_t_uint256',
            nodeType: 'YulFunctionDefinition',
            parameters: [
              {
                name: 'value',
                nodeType: 'YulTypedName',
                src: '1782:5:1',
                type: '',
              },
            ],
            src: '1746:122:1',
          },
        ],
      },
      contents:
        '{\n\n    function abi_decode_t_address_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_addresst_uint256t_uint256_fromMemory(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n}\n',
      id: 1,
      language: 'Yul',
      name: '#utility.yul',
    },
  ],
  linkReferences: {},
  object:
    '60c06040523480156200001157600080fd5b5060405162001c1038038062001c108339818101604052810190620000379190620000ea565b3373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508273ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508160008190555080600181905550505050620001bd565b600081519050620000cd8162000189565b92915050565b600081519050620000e481620001a3565b92915050565b60008060006060848603121562000106576200010562000184565b5b60006200011686828701620000bc565b93505060206200012986828701620000d3565b92505060406200013c86828701620000d3565b9150509250925092565b600062000153826200015a565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600080fd5b620001948162000146565b8114620001a057600080fd5b50565b620001ae816200017a565b8114620001ba57600080fd5b50565b60805160601c60a05160601c6119ef62000221600039600081816104440152818161063c015281816107e2015281816109da0152610ac00152600081816104ab015281816106a30152818161084901528181610a410152610ae401526119ef6000f3fe6080604052600436106100915760003560e01c80637e025802116100595780637e0258021461014a5780638ef1e25914610175578063b30a3922146101b2578063ec534135146101dd578063f31d008a1461021b57610091565b80631fa2bf31146100965780633ccfd60b146100d3578063453ca985146100ea5780634ac1e323146100f45780637de6b6fe1461011f575b600080fd5b3480156100a257600080fd5b506100bd60048036038101906100b8919061133f565b610246565b6040516100ca91906114ee565b60405180910390f35b3480156100df57600080fd5b506100e861025e565b005b6100f26103ad565b005b34801561010057600080fd5b50610109610abe565b604051610116919061142f565b60405180910390f35b34801561012b57600080fd5b50610134610ae2565b604051610141919061142f565b60405180910390f35b34801561015657600080fd5b5061015f610b06565b60405161016c91906114ee565b60405180910390f35b34801561018157600080fd5b5061019c6004803603810190610197919061133f565b610b0c565b6040516101a99190611473565b60405180910390f35b3480156101be57600080fd5b506101c7610b2c565b6040516101d491906114ee565b60405180910390f35b3480156101e957600080fd5b5061020460048036038101906101ff919061136c565b610b32565b60405161021292919061144a565b60405180910390f35b34801561022757600080fd5b50610230610b86565b60405161023d9190611473565b60405180910390f35b60056020528060005260406000206000915090505481565b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116102e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d79061148e565b60405180910390fd5b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff166108fc600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549081150290604051600060405180830381858888f193505050501580156103aa573d6000803e3d6000fd5b50565b3460001515600260009054906101000a900460ff161515141561071c5760015481101561040f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610406906114ce565b60405180910390fd5b60001515600260009054906101000a900460ff1615151415610521576104353433610b99565b600061044034610d20565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156104a8573d6000803e3d6000fd5b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166108fc82346104ef9190611737565b9081150290604051600060405180830381858888f1935050505015801561051a573d6000803e3d6000fd5b5050610717565b6000600360016003805490506105379190611737565b81548110610548576105476118dc565b5b90600052602060002090600202016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152505090506105cd3433610d42565b806020015160056000836000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600081602001513461062b9190611737565b9050600061063882610d20565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156106a0573d6000803e3d6000fd5b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166108fc82846106e79190611737565b9081150290604051600060405180830381858888f19350505050158015610712573d6000803e3d6000fd5b505050505b610abb565b60011515600260009054906101000a900460ff1615151415610aba57600360016000546107499190611737565b8154811061075a576107596118dc565b5b90600052602060002090600202016001015481116107ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a4906114ae565b60405180910390fd5b60001515600260009054906101000a900460ff16151514156108bf576107d33433610b99565b60006107de34610d20565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610846573d6000803e3d6000fd5b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166108fc823461088d9190611737565b9081150290604051600060405180830381858888f193505050501580156108b8573d6000803e3d6000fd5b5050610ab5565b6000600360016003805490506108d59190611737565b815481106108e6576108e56118dc565b5b90600052602060002090600202016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481525050905061096b3433610d42565b806020015160056000836000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008160200151346109c99190611737565b905060006109d682610d20565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610a3e573d6000803e3d6000fd5b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166108fc8284610a859190611737565b9081150290604051600060405180830381858888f19350505050158015610ab0573d6000803e3d6000fd5b505050505b610abb565b5b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60015481565b60046020528060005260406000206000915054906101000a900460ff1681565b60005481565b60038181548110610b4257600080fd5b90600052602060002090600202016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905082565b600260009054906101000a900460ff1681565b600360405180604001604052808373ffffffffffffffffffffffffffffffffffffffff16815260200184815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015550506001600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff16827f5d7b992eed4b29f51496d307f7f5a902e7ed497f12358e2202b9a51a022554476000604051610ce2919061142f565b60405180910390a360005460038054905010610d1c57610d00610ff2565b6001600260006101000a81548160ff0219169083151502179055505b5050565b60006064600a83610d319190611649565b610d3b9190611618565b9050919050565b600060036001600380549050610d589190611737565b81548110610d6957610d686118dc565b5b90600052602060002090600202016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152505090506003805480610df657610df56118ad565b5b6001900381819060005260206000209060020201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018201600090555050905560046000826000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690558173ffffffffffffffffffffffffffffffffffffffff16837f5d7b992eed4b29f51496d307f7f5a902e7ed497f12358e2202b9a51a022554478360000151604051610edc919061142f565b60405180910390a3600360405180604001604052808473ffffffffffffffffffffffffffffffffffffffff16815260200185815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015550506001600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610fed610ff2565b505050565b61101060036000600160038054905061100b9190611737565b611012565b565b600082905060008290508082141561102b575050611310565b6000856002868661103c91906116a3565b61104691906115ae565b86611051919061151a565b81548110611062576110616118dc565b5b90600052602060002090600202016001015490505b8183136112e4575b80868481548110611093576110926118dc565b5b90600052602060002090600202016001015411156110be5782806110b690611806565b93505061107f565b5b8582815481106110d2576110d16118dc565b5b9060005260206000209060020201600101548111156110fe5781806110f6906117bd565b9250506110bf565b8183136112df57600086848154811061111a576111196118dc565b5b90600052602060002090600202016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152505090508683815481106111a8576111a76118dc565b5b90600052602060002090600202018785815481106111c9576111c86118dc565b5b90600052602060002090600202016000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600182015481600101559050508087848154811061125f5761125e6118dc565b5b906000526020600020906002020160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015590505083806112cc90611806565b94505082806112da906117bd565b935050505b611077565b818512156112f8576112f7868684611012565b5b8383121561130c5761130b868486611012565b5b5050505b505050565b6000813590506113248161198b565b92915050565b600081359050611339816119a2565b92915050565b6000602082840312156113555761135461190b565b5b600061136384828501611315565b91505092915050565b6000602082840312156113825761138161190b565b5b60006113908482850161132a565b91505092915050565b6113a28161176b565b82525050565b6113b18161177d565b82525050565b60006113c4600f83611509565b91506113cf82611910565b602082019050919050565b60006113e7601d83611509565b91506113f282611939565b602082019050919050565b600061140a601183611509565b915061141582611962565b602082019050919050565b611429816117b3565b82525050565b60006020820190506114446000830184611399565b92915050565b600060408201905061145f6000830185611399565b61146c6020830184611420565b9392505050565b600060208201905061148860008301846113a8565b92915050565b600060208201905081810360008301526114a7816113b7565b9050919050565b600060208201905081810360008301526114c7816113da565b9050919050565b600060208201905081810360008301526114e7816113fd565b9050919050565b60006020820190506115036000830184611420565b92915050565b600082825260208201905092915050565b600061152582611789565b915061153083611789565b9250817f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0383136000831215161561156b5761156a61184f565b5b817f80000000000000000000000000000000000000000000000000000000000000000383126000831216156115a3576115a261184f565b5b828201905092915050565b60006115b982611789565b91506115c483611789565b9250826115d4576115d361187e565b5b600160000383147f80000000000000000000000000000000000000000000000000000000000000008314161561160d5761160c61184f565b5b828205905092915050565b6000611623826117b3565b915061162e836117b3565b92508261163e5761163d61187e565b5b828204905092915050565b6000611654826117b3565b915061165f836117b3565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156116985761169761184f565b5b828202905092915050565b60006116ae82611789565b91506116b983611789565b9250827f8000000000000000000000000000000000000000000000000000000000000000018212600084121516156116f4576116f361184f565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01821360008412161561172c5761172b61184f565b5b828203905092915050565b6000611742826117b3565b915061174d836117b3565b9250828210156117605761175f61184f565b5b828203905092915050565b600061177682611793565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006117c882611789565b91507f80000000000000000000000000000000000000000000000000000000000000008214156117fb576117fa61184f565b5b600182039050919050565b600061181182611789565b91507f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156118445761184361184f565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b7f4e6f204f77656420416d6f756e742e0000000000000000000000000000000000600082015250565b7f4e6f7420656e6f75676820746f2064657468726f6e65207768616c652e000000600082015250565b7f4e6f7420656e6f756768206d6f6e65792e000000000000000000000000000000600082015250565b6119948161176b565b811461199f57600080fd5b50565b6119ab816117b3565b81146119b657600080fd5b5056fea264697066735822122050f5b68640ca97da20c12f5e04c6ae59a465b1581ab9fe508d6cacfcef31a46c64736f6c63430008070033',
  opcodes:
    'PUSH1 0xC0 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH3 0x11 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH3 0x1C10 CODESIZE SUB DUP1 PUSH3 0x1C10 DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH3 0x37 SWAP2 SWAP1 PUSH3 0xEA JUMP JUMPDEST CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x80 DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x60 SHL DUP2 MSTORE POP POP DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0xA0 DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x60 SHL DUP2 MSTORE POP POP DUP2 PUSH1 0x0 DUP2 SWAP1 SSTORE POP DUP1 PUSH1 0x1 DUP2 SWAP1 SSTORE POP POP POP POP PUSH3 0x1BD JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH3 0xCD DUP2 PUSH3 0x189 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH3 0xE4 DUP2 PUSH3 0x1A3 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH3 0x106 JUMPI PUSH3 0x105 PUSH3 0x184 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH3 0x116 DUP7 DUP3 DUP8 ADD PUSH3 0xBC JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 PUSH3 0x129 DUP7 DUP3 DUP8 ADD PUSH3 0xD3 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 PUSH3 0x13C DUP7 DUP3 DUP8 ADD PUSH3 0xD3 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 PUSH3 0x153 DUP3 PUSH3 0x15A JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH3 0x194 DUP2 PUSH3 0x146 JUMP JUMPDEST DUP2 EQ PUSH3 0x1A0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH3 0x1AE DUP2 PUSH3 0x17A JUMP JUMPDEST DUP2 EQ PUSH3 0x1BA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x80 MLOAD PUSH1 0x60 SHR PUSH1 0xA0 MLOAD PUSH1 0x60 SHR PUSH2 0x19EF PUSH3 0x221 PUSH1 0x0 CODECOPY PUSH1 0x0 DUP2 DUP2 PUSH2 0x444 ADD MSTORE DUP2 DUP2 PUSH2 0x63C ADD MSTORE DUP2 DUP2 PUSH2 0x7E2 ADD MSTORE DUP2 DUP2 PUSH2 0x9DA ADD MSTORE PUSH2 0xAC0 ADD MSTORE PUSH1 0x0 DUP2 DUP2 PUSH2 0x4AB ADD MSTORE DUP2 DUP2 PUSH2 0x6A3 ADD MSTORE DUP2 DUP2 PUSH2 0x849 ADD MSTORE DUP2 DUP2 PUSH2 0xA41 ADD MSTORE PUSH2 0xAE4 ADD MSTORE PUSH2 0x19EF PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x91 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x7E025802 GT PUSH2 0x59 JUMPI DUP1 PUSH4 0x7E025802 EQ PUSH2 0x14A JUMPI DUP1 PUSH4 0x8EF1E259 EQ PUSH2 0x175 JUMPI DUP1 PUSH4 0xB30A3922 EQ PUSH2 0x1B2 JUMPI DUP1 PUSH4 0xEC534135 EQ PUSH2 0x1DD JUMPI DUP1 PUSH4 0xF31D008A EQ PUSH2 0x21B JUMPI PUSH2 0x91 JUMP JUMPDEST DUP1 PUSH4 0x1FA2BF31 EQ PUSH2 0x96 JUMPI DUP1 PUSH4 0x3CCFD60B EQ PUSH2 0xD3 JUMPI DUP1 PUSH4 0x453CA985 EQ PUSH2 0xEA JUMPI DUP1 PUSH4 0x4AC1E323 EQ PUSH2 0xF4 JUMPI DUP1 PUSH4 0x7DE6B6FE EQ PUSH2 0x11F JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xA2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xBD PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xB8 SWAP2 SWAP1 PUSH2 0x133F JUMP JUMPDEST PUSH2 0x246 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xCA SWAP2 SWAP1 PUSH2 0x14EE JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xDF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xE8 PUSH2 0x25E JUMP JUMPDEST STOP JUMPDEST PUSH2 0xF2 PUSH2 0x3AD JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x100 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x109 PUSH2 0xABE JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x116 SWAP2 SWAP1 PUSH2 0x142F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x12B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x134 PUSH2 0xAE2 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x141 SWAP2 SWAP1 PUSH2 0x142F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x156 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x15F PUSH2 0xB06 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x16C SWAP2 SWAP1 PUSH2 0x14EE JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x181 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19C PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x197 SWAP2 SWAP1 PUSH2 0x133F JUMP JUMPDEST PUSH2 0xB0C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1A9 SWAP2 SWAP1 PUSH2 0x1473 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1BE JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1C7 PUSH2 0xB2C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1D4 SWAP2 SWAP1 PUSH2 0x14EE JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1E9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x204 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1FF SWAP2 SWAP1 PUSH2 0x136C JUMP JUMPDEST PUSH2 0xB32 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x212 SWAP3 SWAP2 SWAP1 PUSH2 0x144A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x227 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x230 PUSH2 0xB86 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x23D SWAP2 SWAP1 PUSH2 0x1473 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x5 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SWAP1 POP SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x5 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD GT PUSH2 0x2E0 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x2D7 SWAP1 PUSH2 0x148E JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x5 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC PUSH1 0x5 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x3AA JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP JUMP JUMPDEST CALLVALUE PUSH1 0x0 ISZERO ISZERO PUSH1 0x2 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND ISZERO ISZERO EQ ISZERO PUSH2 0x71C JUMPI PUSH1 0x1 SLOAD DUP2 LT ISZERO PUSH2 0x40F JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x406 SWAP1 PUSH2 0x14CE JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 ISZERO ISZERO PUSH1 0x2 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND ISZERO ISZERO EQ ISZERO PUSH2 0x521 JUMPI PUSH2 0x435 CALLVALUE CALLER PUSH2 0xB99 JUMP JUMPDEST PUSH1 0x0 PUSH2 0x440 CALLVALUE PUSH2 0xD20 JUMP JUMPDEST SWAP1 POP PUSH32 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC DUP3 SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x4A8 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP PUSH32 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC DUP3 CALLVALUE PUSH2 0x4EF SWAP2 SWAP1 PUSH2 0x1737 JUMP JUMPDEST SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x51A JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP PUSH2 0x717 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x3 PUSH1 0x1 PUSH1 0x3 DUP1 SLOAD SWAP1 POP PUSH2 0x537 SWAP2 SWAP1 PUSH2 0x1737 JUMP JUMPDEST DUP2 SLOAD DUP2 LT PUSH2 0x548 JUMPI PUSH2 0x547 PUSH2 0x18DC JUMP JUMPDEST JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE SWAP1 DUP2 PUSH1 0x0 DUP3 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x1 DUP3 ADD SLOAD DUP2 MSTORE POP POP SWAP1 POP PUSH2 0x5CD CALLVALUE CALLER PUSH2 0xD42 JUMP JUMPDEST DUP1 PUSH1 0x20 ADD MLOAD PUSH1 0x5 PUSH1 0x0 DUP4 PUSH1 0x0 ADD MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP PUSH1 0x0 DUP2 PUSH1 0x20 ADD MLOAD CALLVALUE PUSH2 0x62B SWAP2 SWAP1 PUSH2 0x1737 JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH2 0x638 DUP3 PUSH2 0xD20 JUMP JUMPDEST SWAP1 POP PUSH32 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC DUP3 SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x6A0 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP PUSH32 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC DUP3 DUP5 PUSH2 0x6E7 SWAP2 SWAP1 PUSH2 0x1737 JUMP JUMPDEST SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x712 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP JUMPDEST PUSH2 0xABB JUMP JUMPDEST PUSH1 0x1 ISZERO ISZERO PUSH1 0x2 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND ISZERO ISZERO EQ ISZERO PUSH2 0xABA JUMPI PUSH1 0x3 PUSH1 0x1 PUSH1 0x0 SLOAD PUSH2 0x749 SWAP2 SWAP1 PUSH2 0x1737 JUMP JUMPDEST DUP2 SLOAD DUP2 LT PUSH2 0x75A JUMPI PUSH2 0x759 PUSH2 0x18DC JUMP JUMPDEST JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x1 ADD SLOAD DUP2 GT PUSH2 0x7AD JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x7A4 SWAP1 PUSH2 0x14AE JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 ISZERO ISZERO PUSH1 0x2 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND ISZERO ISZERO EQ ISZERO PUSH2 0x8BF JUMPI PUSH2 0x7D3 CALLVALUE CALLER PUSH2 0xB99 JUMP JUMPDEST PUSH1 0x0 PUSH2 0x7DE CALLVALUE PUSH2 0xD20 JUMP JUMPDEST SWAP1 POP PUSH32 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC DUP3 SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x846 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP PUSH32 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC DUP3 CALLVALUE PUSH2 0x88D SWAP2 SWAP1 PUSH2 0x1737 JUMP JUMPDEST SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x8B8 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP PUSH2 0xAB5 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x3 PUSH1 0x1 PUSH1 0x3 DUP1 SLOAD SWAP1 POP PUSH2 0x8D5 SWAP2 SWAP1 PUSH2 0x1737 JUMP JUMPDEST DUP2 SLOAD DUP2 LT PUSH2 0x8E6 JUMPI PUSH2 0x8E5 PUSH2 0x18DC JUMP JUMPDEST JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE SWAP1 DUP2 PUSH1 0x0 DUP3 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x1 DUP3 ADD SLOAD DUP2 MSTORE POP POP SWAP1 POP PUSH2 0x96B CALLVALUE CALLER PUSH2 0xD42 JUMP JUMPDEST DUP1 PUSH1 0x20 ADD MLOAD PUSH1 0x5 PUSH1 0x0 DUP4 PUSH1 0x0 ADD MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP PUSH1 0x0 DUP2 PUSH1 0x20 ADD MLOAD CALLVALUE PUSH2 0x9C9 SWAP2 SWAP1 PUSH2 0x1737 JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH2 0x9D6 DUP3 PUSH2 0xD20 JUMP JUMPDEST SWAP1 POP PUSH32 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC DUP3 SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0xA3E JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP PUSH32 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC DUP3 DUP5 PUSH2 0xA85 SWAP2 SWAP1 PUSH2 0x1737 JUMP JUMPDEST SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0xAB0 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP JUMPDEST PUSH2 0xABB JUMP JUMPDEST JUMPDEST POP JUMP JUMPDEST PUSH32 0x0 DUP2 JUMP JUMPDEST PUSH32 0x0 DUP2 JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x4 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x3 DUP2 DUP2 SLOAD DUP2 LT PUSH2 0xB42 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x0 SWAP2 POP SWAP1 POP DUP1 PUSH1 0x0 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 DUP1 PUSH1 0x1 ADD SLOAD SWAP1 POP DUP3 JUMP JUMPDEST PUSH1 0x2 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x3 PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD DUP5 DUP2 MSTORE POP SWAP1 DUP1 PUSH1 0x1 DUP2 SLOAD ADD DUP1 DUP3 SSTORE DUP1 SWAP2 POP POP PUSH1 0x1 SWAP1 SUB SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x0 SWAP1 SWAP2 SWAP1 SWAP2 SWAP1 SWAP2 POP PUSH1 0x0 DUP3 ADD MLOAD DUP2 PUSH1 0x0 ADD PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH1 0x20 DUP3 ADD MLOAD DUP2 PUSH1 0x1 ADD SSTORE POP POP PUSH1 0x1 PUSH1 0x4 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH32 0x5D7B992EED4B29F51496D307F7F5A902E7ED497F12358E2202B9A51A02255447 PUSH1 0x0 PUSH1 0x40 MLOAD PUSH2 0xCE2 SWAP2 SWAP1 PUSH2 0x142F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH1 0x0 SLOAD PUSH1 0x3 DUP1 SLOAD SWAP1 POP LT PUSH2 0xD1C JUMPI PUSH2 0xD00 PUSH2 0xFF2 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x2 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x64 PUSH1 0xA DUP4 PUSH2 0xD31 SWAP2 SWAP1 PUSH2 0x1649 JUMP JUMPDEST PUSH2 0xD3B SWAP2 SWAP1 PUSH2 0x1618 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x3 PUSH1 0x1 PUSH1 0x3 DUP1 SLOAD SWAP1 POP PUSH2 0xD58 SWAP2 SWAP1 PUSH2 0x1737 JUMP JUMPDEST DUP2 SLOAD DUP2 LT PUSH2 0xD69 JUMPI PUSH2 0xD68 PUSH2 0x18DC JUMP JUMPDEST JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE SWAP1 DUP2 PUSH1 0x0 DUP3 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x1 DUP3 ADD SLOAD DUP2 MSTORE POP POP SWAP1 POP PUSH1 0x3 DUP1 SLOAD DUP1 PUSH2 0xDF6 JUMPI PUSH2 0xDF5 PUSH2 0x18AD JUMP JUMPDEST JUMPDEST PUSH1 0x1 SWAP1 SUB DUP2 DUP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x0 DUP1 DUP3 ADD PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD SWAP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 SSTORE PUSH1 0x1 DUP3 ADD PUSH1 0x0 SWAP1 SSTORE POP POP SWAP1 SSTORE PUSH1 0x4 PUSH1 0x0 DUP3 PUSH1 0x0 ADD MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD SWAP1 PUSH1 0xFF MUL NOT AND SWAP1 SSTORE DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH32 0x5D7B992EED4B29F51496D307F7F5A902E7ED497F12358E2202B9A51A02255447 DUP4 PUSH1 0x0 ADD MLOAD PUSH1 0x40 MLOAD PUSH2 0xEDC SWAP2 SWAP1 PUSH2 0x142F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH1 0x3 PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD DUP6 DUP2 MSTORE POP SWAP1 DUP1 PUSH1 0x1 DUP2 SLOAD ADD DUP1 DUP3 SSTORE DUP1 SWAP2 POP POP PUSH1 0x1 SWAP1 SUB SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x0 SWAP1 SWAP2 SWAP1 SWAP2 SWAP1 SWAP2 POP PUSH1 0x0 DUP3 ADD MLOAD DUP2 PUSH1 0x0 ADD PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH1 0x20 DUP3 ADD MLOAD DUP2 PUSH1 0x1 ADD SSTORE POP POP PUSH1 0x1 PUSH1 0x4 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP PUSH2 0xFED PUSH2 0xFF2 JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH2 0x1010 PUSH1 0x3 PUSH1 0x0 PUSH1 0x1 PUSH1 0x3 DUP1 SLOAD SWAP1 POP PUSH2 0x100B SWAP2 SWAP1 PUSH2 0x1737 JUMP JUMPDEST PUSH2 0x1012 JUMP JUMPDEST JUMP JUMPDEST PUSH1 0x0 DUP3 SWAP1 POP PUSH1 0x0 DUP3 SWAP1 POP DUP1 DUP3 EQ ISZERO PUSH2 0x102B JUMPI POP POP PUSH2 0x1310 JUMP JUMPDEST PUSH1 0x0 DUP6 PUSH1 0x2 DUP7 DUP7 PUSH2 0x103C SWAP2 SWAP1 PUSH2 0x16A3 JUMP JUMPDEST PUSH2 0x1046 SWAP2 SWAP1 PUSH2 0x15AE JUMP JUMPDEST DUP7 PUSH2 0x1051 SWAP2 SWAP1 PUSH2 0x151A JUMP JUMPDEST DUP2 SLOAD DUP2 LT PUSH2 0x1062 JUMPI PUSH2 0x1061 PUSH2 0x18DC JUMP JUMPDEST JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x1 ADD SLOAD SWAP1 POP JUMPDEST DUP2 DUP4 SGT PUSH2 0x12E4 JUMPI JUMPDEST DUP1 DUP7 DUP5 DUP2 SLOAD DUP2 LT PUSH2 0x1093 JUMPI PUSH2 0x1092 PUSH2 0x18DC JUMP JUMPDEST JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x1 ADD SLOAD GT ISZERO PUSH2 0x10BE JUMPI DUP3 DUP1 PUSH2 0x10B6 SWAP1 PUSH2 0x1806 JUMP JUMPDEST SWAP4 POP POP PUSH2 0x107F JUMP JUMPDEST JUMPDEST DUP6 DUP3 DUP2 SLOAD DUP2 LT PUSH2 0x10D2 JUMPI PUSH2 0x10D1 PUSH2 0x18DC JUMP JUMPDEST JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x1 ADD SLOAD DUP2 GT ISZERO PUSH2 0x10FE JUMPI DUP2 DUP1 PUSH2 0x10F6 SWAP1 PUSH2 0x17BD JUMP JUMPDEST SWAP3 POP POP PUSH2 0x10BF JUMP JUMPDEST DUP2 DUP4 SGT PUSH2 0x12DF JUMPI PUSH1 0x0 DUP7 DUP5 DUP2 SLOAD DUP2 LT PUSH2 0x111A JUMPI PUSH2 0x1119 PUSH2 0x18DC JUMP JUMPDEST JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE SWAP1 DUP2 PUSH1 0x0 DUP3 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x1 DUP3 ADD SLOAD DUP2 MSTORE POP POP SWAP1 POP DUP7 DUP4 DUP2 SLOAD DUP2 LT PUSH2 0x11A8 JUMPI PUSH2 0x11A7 PUSH2 0x18DC JUMP JUMPDEST JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD DUP8 DUP6 DUP2 SLOAD DUP2 LT PUSH2 0x11C9 JUMPI PUSH2 0x11C8 PUSH2 0x18DC JUMP JUMPDEST JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x0 DUP3 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH1 0x0 ADD PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH1 0x1 DUP3 ADD SLOAD DUP2 PUSH1 0x1 ADD SSTORE SWAP1 POP POP DUP1 DUP8 DUP5 DUP2 SLOAD DUP2 LT PUSH2 0x125F JUMPI PUSH2 0x125E PUSH2 0x18DC JUMP JUMPDEST JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x0 DUP3 ADD MLOAD DUP2 PUSH1 0x0 ADD PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH1 0x20 DUP3 ADD MLOAD DUP2 PUSH1 0x1 ADD SSTORE SWAP1 POP POP DUP4 DUP1 PUSH2 0x12CC SWAP1 PUSH2 0x1806 JUMP JUMPDEST SWAP5 POP POP DUP3 DUP1 PUSH2 0x12DA SWAP1 PUSH2 0x17BD JUMP JUMPDEST SWAP4 POP POP POP JUMPDEST PUSH2 0x1077 JUMP JUMPDEST DUP2 DUP6 SLT ISZERO PUSH2 0x12F8 JUMPI PUSH2 0x12F7 DUP7 DUP7 DUP5 PUSH2 0x1012 JUMP JUMPDEST JUMPDEST DUP4 DUP4 SLT ISZERO PUSH2 0x130C JUMPI PUSH2 0x130B DUP7 DUP5 DUP7 PUSH2 0x1012 JUMP JUMPDEST JUMPDEST POP POP POP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x1324 DUP2 PUSH2 0x198B JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x1339 DUP2 PUSH2 0x19A2 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1355 JUMPI PUSH2 0x1354 PUSH2 0x190B JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x1363 DUP5 DUP3 DUP6 ADD PUSH2 0x1315 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1382 JUMPI PUSH2 0x1381 PUSH2 0x190B JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x1390 DUP5 DUP3 DUP6 ADD PUSH2 0x132A JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x13A2 DUP2 PUSH2 0x176B JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH2 0x13B1 DUP2 PUSH2 0x177D JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x13C4 PUSH1 0xF DUP4 PUSH2 0x1509 JUMP JUMPDEST SWAP2 POP PUSH2 0x13CF DUP3 PUSH2 0x1910 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x13E7 PUSH1 0x1D DUP4 PUSH2 0x1509 JUMP JUMPDEST SWAP2 POP PUSH2 0x13F2 DUP3 PUSH2 0x1939 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x140A PUSH1 0x11 DUP4 PUSH2 0x1509 JUMP JUMPDEST SWAP2 POP PUSH2 0x1415 DUP3 PUSH2 0x1962 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x1429 DUP2 PUSH2 0x17B3 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x1444 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x1399 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 DUP3 ADD SWAP1 POP PUSH2 0x145F PUSH1 0x0 DUP4 ADD DUP6 PUSH2 0x1399 JUMP JUMPDEST PUSH2 0x146C PUSH1 0x20 DUP4 ADD DUP5 PUSH2 0x1420 JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x1488 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x13A8 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x14A7 DUP2 PUSH2 0x13B7 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x14C7 DUP2 PUSH2 0x13DA JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x14E7 DUP2 PUSH2 0x13FD JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x1503 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x1420 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1525 DUP3 PUSH2 0x1789 JUMP JUMPDEST SWAP2 POP PUSH2 0x1530 DUP4 PUSH2 0x1789 JUMP JUMPDEST SWAP3 POP DUP2 PUSH32 0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SUB DUP4 SGT PUSH1 0x0 DUP4 SLT ISZERO AND ISZERO PUSH2 0x156B JUMPI PUSH2 0x156A PUSH2 0x184F JUMP JUMPDEST JUMPDEST DUP2 PUSH32 0x8000000000000000000000000000000000000000000000000000000000000000 SUB DUP4 SLT PUSH1 0x0 DUP4 SLT AND ISZERO PUSH2 0x15A3 JUMPI PUSH2 0x15A2 PUSH2 0x184F JUMP JUMPDEST JUMPDEST DUP3 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x15B9 DUP3 PUSH2 0x1789 JUMP JUMPDEST SWAP2 POP PUSH2 0x15C4 DUP4 PUSH2 0x1789 JUMP JUMPDEST SWAP3 POP DUP3 PUSH2 0x15D4 JUMPI PUSH2 0x15D3 PUSH2 0x187E JUMP JUMPDEST JUMPDEST PUSH1 0x1 PUSH1 0x0 SUB DUP4 EQ PUSH32 0x8000000000000000000000000000000000000000000000000000000000000000 DUP4 EQ AND ISZERO PUSH2 0x160D JUMPI PUSH2 0x160C PUSH2 0x184F JUMP JUMPDEST JUMPDEST DUP3 DUP3 SDIV SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1623 DUP3 PUSH2 0x17B3 JUMP JUMPDEST SWAP2 POP PUSH2 0x162E DUP4 PUSH2 0x17B3 JUMP JUMPDEST SWAP3 POP DUP3 PUSH2 0x163E JUMPI PUSH2 0x163D PUSH2 0x187E JUMP JUMPDEST JUMPDEST DUP3 DUP3 DIV SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1654 DUP3 PUSH2 0x17B3 JUMP JUMPDEST SWAP2 POP PUSH2 0x165F DUP4 PUSH2 0x17B3 JUMP JUMPDEST SWAP3 POP DUP2 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DIV DUP4 GT DUP3 ISZERO ISZERO AND ISZERO PUSH2 0x1698 JUMPI PUSH2 0x1697 PUSH2 0x184F JUMP JUMPDEST JUMPDEST DUP3 DUP3 MUL SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x16AE DUP3 PUSH2 0x1789 JUMP JUMPDEST SWAP2 POP PUSH2 0x16B9 DUP4 PUSH2 0x1789 JUMP JUMPDEST SWAP3 POP DUP3 PUSH32 0x8000000000000000000000000000000000000000000000000000000000000000 ADD DUP3 SLT PUSH1 0x0 DUP5 SLT ISZERO AND ISZERO PUSH2 0x16F4 JUMPI PUSH2 0x16F3 PUSH2 0x184F JUMP JUMPDEST JUMPDEST DUP3 PUSH32 0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF ADD DUP3 SGT PUSH1 0x0 DUP5 SLT AND ISZERO PUSH2 0x172C JUMPI PUSH2 0x172B PUSH2 0x184F JUMP JUMPDEST JUMPDEST DUP3 DUP3 SUB SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1742 DUP3 PUSH2 0x17B3 JUMP JUMPDEST SWAP2 POP PUSH2 0x174D DUP4 PUSH2 0x17B3 JUMP JUMPDEST SWAP3 POP DUP3 DUP3 LT ISZERO PUSH2 0x1760 JUMPI PUSH2 0x175F PUSH2 0x184F JUMP JUMPDEST JUMPDEST DUP3 DUP3 SUB SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1776 DUP3 PUSH2 0x1793 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x17C8 DUP3 PUSH2 0x1789 JUMP JUMPDEST SWAP2 POP PUSH32 0x8000000000000000000000000000000000000000000000000000000000000000 DUP3 EQ ISZERO PUSH2 0x17FB JUMPI PUSH2 0x17FA PUSH2 0x184F JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP3 SUB SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1811 DUP3 PUSH2 0x1789 JUMP JUMPDEST SWAP2 POP PUSH32 0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 EQ ISZERO PUSH2 0x1844 JUMPI PUSH2 0x1843 PUSH2 0x184F JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x12 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x31 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x32 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH32 0x4E6F204F77656420416D6F756E742E0000000000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x4E6F7420656E6F75676820746F2064657468726F6E65207768616C652E000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x4E6F7420656E6F756768206D6F6E65792E000000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH2 0x1994 DUP2 PUSH2 0x176B JUMP JUMPDEST DUP2 EQ PUSH2 0x199F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x19AB DUP2 PUSH2 0x17B3 JUMP JUMPDEST DUP2 EQ PUSH2 0x19B6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 POP CREATE2 0xB6 DUP7 BLOCKHASH 0xCA SWAP8 0xDA KECCAK256 0xC1 0x2F 0x5E DIV 0xC6 0xAE MSIZE LOG4 PUSH6 0xB1581AB9FE50 DUP14 PUSH13 0xACFCEF31A46C64736F6C634300 ADDMOD SMOD STOP CALLER ',
  sourceMap:
    '108:3998:0:-:0;;;576:239;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;697:10;679:28;;;;;;;;;;;;727:11;713:25;;;;;;;;;;;;757:11;744:10;:24;;;;793:17;774:16;:36;;;;576:239;;;108:3998;;7:143:1;64:5;95:6;89:13;80:22;;111:33;138:5;111:33;:::i;:::-;7:143;;;;:::o;156:::-;213:5;244:6;238:13;229:22;;260:33;287:5;260:33;:::i;:::-;156:143;;;;:::o;305:663::-;393:6;401;409;458:2;446:9;437:7;433:23;429:32;426:119;;;464:79;;:::i;:::-;426:119;584:1;609:64;665:7;656:6;645:9;641:22;609:64;:::i;:::-;599:74;;555:128;722:2;748:64;804:7;795:6;784:9;780:22;748:64;:::i;:::-;738:74;;693:129;861:2;887:64;943:7;934:6;923:9;919:22;887:64;:::i;:::-;877:74;;832:129;305:663;;;;;:::o;1055:96::-;1092:7;1121:24;1139:5;1121:24;:::i;:::-;1110:35;;1055:96;;;:::o;1157:126::-;1194:7;1234:42;1227:5;1223:54;1212:65;;1157:126;;;:::o;1289:77::-;1326:7;1355:5;1344:16;;1289:77;;;:::o;1495:117::-;1604:1;1601;1594:12;1618:122;1691:24;1709:5;1691:24;:::i;:::-;1684:5;1681:35;1671:63;;1730:1;1727;1720:12;1671:63;1618:122;:::o;1746:::-;1819:24;1837:5;1819:24;:::i;:::-;1812:5;1809:35;1799:63;;1858:1;1855;1848:12;1799:63;1746:122;:::o;108:3998:0:-;;;;;;;;;;;;;;;;;;;',
}
const lairSourceCode =
  "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nuint256 constant PERCENTAGE_MARKETPLACE_FEE = 10;\n\ncontract Lair {\n  address public immutable CREATOR_ADDRESS;\n  address public immutable APP_ADDRESS;\n  uint256 public whaleLimit;\n  uint256 public initialLairEntry;\n\n  bool public lairFull;\n\n  Whale[] public whaleArr;\n  mapping(address => bool) public isWhale;\n  mapping(address => uint256) public refundWhaleAmount;\n\n  struct Whale {\n    address addr;\n    uint256 grant;\n  }\n\n  event LogNewWhale(uint256 indexed amount, address indexed newWhale, address oldWhale);\n\n  constructor(\n    address _appAddress,\n    uint256 _whaleLimit,\n    uint256 _initialLairEntry\n  ) {\n    CREATOR_ADDRESS = msg.sender;\n    APP_ADDRESS = _appAddress;\n    whaleLimit = _whaleLimit;\n    initialLairEntry = _initialLairEntry;\n  }\n\n  function enterLair() external payable checkEtherGuard(msg.value) {\n    if (lairFull == false) {\n      _accomodateWhaleWithoutDethrone(msg.value, msg.sender);\n      // Calculate Mktplace fee\n      uint256 marketPlaceFee = _calculateAppFee(msg.value);\n      // Distribute ether\n      payable(APP_ADDRESS).transfer(marketPlaceFee);\n      payable(CREATOR_ADDRESS).transfer(msg.value - marketPlaceFee);\n      return;\n    }\n    // LAIR IS FULL\n\n    Whale memory whaleToDethrone = whaleArr[whaleArr.length - 1];\n    _accomodateWhaleAndDethrone(msg.value, msg.sender);\n    // Refund old whale\n    refundWhaleAmount[whaleToDethrone.addr] = whaleToDethrone.grant;\n    // Distribute the profits\n    uint256 profit = msg.value - whaleToDethrone.grant;\n    uint256 appProfit = _calculateAppFee(profit);\n    payable(APP_ADDRESS).transfer(appProfit);\n    payable(CREATOR_ADDRESS).transfer(profit - appProfit);\n  }\n\n  function withdraw() public {\n    require(refundWhaleAmount[msg.sender] > 0, 'No Owed Amount.');\n    refundWhaleAmount[msg.sender] = 0;\n    payable(msg.sender).transfer(refundWhaleAmount[msg.sender]);\n  }\n\n  function _accomodateWhaleWithoutDethrone(uint256 moneyPaid, address newWhaleWallet) private {\n    // Include new whale in mapping and array\n    whaleArr.push(Whale(newWhaleWallet, moneyPaid));\n    isWhale[newWhaleWallet] = true;\n\n    emit LogNewWhale(moneyPaid, newWhaleWallet, address(0));\n\n    if (whaleArr.length >= whaleLimit) {\n      sort();\n      lairFull = true;\n    }\n  }\n\n  function _accomodateWhaleAndDethrone(uint256 newMoney, address newAddr) private {\n    Whale memory dethronedWhale = whaleArr[whaleArr.length - 1];\n    // Remove last element from array since it is sorted\n    whaleArr.pop();\n    // Remove whale from mapping\n    delete isWhale[dethronedWhale.addr];\n    emit LogNewWhale(newMoney, newAddr, dethronedWhale.addr);\n    // Include new whale in mapping and array\n    whaleArr.push(Whale(newAddr, newMoney));\n    isWhale[newAddr] = true;\n    // This step can be optimized by finding the\n    // pertaining location and moving the whales in\n    // the array\n    sort();\n  }\n\n  function _calculateAppFee(uint256 amount) private pure returns (uint256) {\n    return (amount * PERCENTAGE_MARKETPLACE_FEE) / 100;\n  }\n\n  function sort() internal {\n    _quickSort(whaleArr, int256(0), int256(whaleArr.length - 1));\n  }\n\n  function _quickSort(\n    Whale[] storage arr,\n    int256 left,\n    int256 right\n  ) private {\n    int256 i = left;\n    int256 j = right;\n    if (i == j) return;\n    uint256 pivot = arr[uint256(left + (right - left) / 2)].grant;\n    while (i <= j) {\n      while (arr[uint256(i)].grant > pivot) i++;\n      while (pivot > arr[uint256(j)].grant) j--;\n      if (i <= j) {\n        Whale memory temp = arr[uint256(i)];\n        arr[uint256(i)] = arr[uint256(j)];\n        arr[uint256(j)] = temp;\n        i++;\n        j--;\n      }\n    }\n    if (left < j) _quickSort(arr, left, j);\n    if (i < right) _quickSort(arr, i, right);\n  }\n\n  modifier checkEtherGuard(uint256 amount) {\n    if (lairFull == false) {\n      require(amount >= initialLairEntry, 'Not enough money.');\n      _;\n      return;\n    }\n    if (lairFull == true) {\n      require(amount > whaleArr[whaleLimit - 1].grant, 'Not enough to dethrone whale.');\n      _;\n      return;\n    }\n  }\n}\n"

export const verifyLairEtherscan = (contractAddress, constructorArg, url) => {
  const { whales, price } = constructorArg

  // constructor arguments must be encoded without 0x
  const encodedArgs = ethers.utils.defaultAbiCoder
    .encode(
      ['address', 'uint256', 'uint256'],
      [
        process.env.NEXT_PUBLIC_APP_ADDRESS,
        whales,
        ethers.utils.parseEther(String(price)),
      ]
    )
    .slice(2)

  return Axios({
    method: 'POST',
    url: url,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify({
      apikey: process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY,
      module: 'contract',
      action: 'verifysourcecode',
      sourceCode: lairSourceCode,
      contractaddress: contractAddress,
      codeformat: 'solidity-single-file',
      contractname: 'Lair',
      compilerversion: 'v0.8.7+commit.e28d00a7',
      optimizationUsed: '0',
      licenseType: '3',
      constructorArguements: encodedArgs,
    }),
  })
}

export const createWhaleFactory = (signer) => {
  return new ethers.ContractFactory(abi, bytecode, signer)
}

export const createWhaleContract = (address, provider) =>
  new ethers.Contract(address, abi, provider)
