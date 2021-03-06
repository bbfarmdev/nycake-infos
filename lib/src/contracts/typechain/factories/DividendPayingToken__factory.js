"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DividendPayingToken__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class DividendPayingToken__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_name, _symbol, overrides) {
        return super.deploy(_name, _symbol, overrides || {});
    }
    getDeployTransaction(_name, _symbol, overrides) {
        return super.getDeployTransaction(_name, _symbol, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.DividendPayingToken__factory = DividendPayingToken__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
            {
                internalType: "string",
                name: "_symbol",
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
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
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
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "weiAmount",
                type: "uint256",
            },
        ],
        name: "DividendWithdrawn",
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
                indexed: false,
                internalType: "uint256",
                name: "weiAmount",
                type: "uint256",
            },
        ],
        name: "DividendsDistributed",
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
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [],
        name: "CAKE",
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
                name: "_owner",
                type: "address",
            },
        ],
        name: "accumulativeDividendOf",
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
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
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
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
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
        name: "decimals",
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
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "distributeCAKEDividends",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
        ],
        name: "dividendOf",
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
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
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
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
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
        inputs: [],
        name: "totalDividendsDistributed",
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
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
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
        inputs: [],
        name: "withdrawDividend",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
        ],
        name: "withdrawableDividendOf",
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
                name: "_owner",
                type: "address",
            },
        ],
        name: "withdrawnDividendOf",
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
];
const _bytecode = "0x60a06040527f0e09fabb73bd3ade0a17ecc321fd13a19e81ce820000000000000000000000006080523480156200003557600080fd5b506040516200137238038062001372833981810160405260408110156200005b57600080fd5b81019080805160405193929190846401000000008211156200007c57600080fd5b9083019060208201858111156200009257600080fd5b8251640100000000811182820188101715620000ad57600080fd5b82525081516020918201929091019080838360005b83811015620000dc578181015183820152602001620000c2565b50505050905090810190601f1680156200010a5780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200012e57600080fd5b9083019060208201858111156200014457600080fd5b82516401000000008111828201881017156200015f57600080fd5b82525081516020918201929091019080838360005b838110156200018e57818101518382015260200162000174565b50505050905090810190601f168015620001bc5780820380516001836020036101000a031916815260200191505b50604052505082518391508290620001dc90600390602085019062000261565b508051620001f290600490602084019062000261565b5050506000620002076200025d60201b60201c565b600580546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3505050620002fd565b3390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002a457805160ff1916838001178555620002d4565b82800160010185558215620002d4579182015b82811115620002d4578251825591602001919060010190620002b7565b50620002e2929150620002e6565b5090565b5b80821115620002e25760008155600101620002e7565b60805160601c61105262000320600039806106685280610dfe52506110526000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806385a6b3ae116100b8578063a8b9d2401161007c578063a8b9d2401461038a578063a9059cbb146103b0578063aafd847a146103dc578063ba72a95514610402578063dd62ed3e1461041f578063f2fde38b1461044d57610142565b806385a6b3ae146103205780638da5cb5b1461032857806391b89fba1461033057806395d89b4114610356578063a457c2d71461035e57610142565b8063313ce5671161010a578063313ce5671461027a57806339509351146102985780634ca6ef28146102c45780636a474002146102e857806370a08231146102f2578063715018a61461031857610142565b806306fdde0314610147578063095ea7b3146101c457806318160ddd1461020457806323b872dd1461021e57806327ce014714610254575b600080fd5b61014f610473565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610189578181015183820152602001610171565b50505050905090810190601f1680156101b65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101f0600480360360408110156101da57600080fd5b506001600160a01b038135169060200135610509565b604080519115158252519081900360200190f35b61020c610527565b60408051918252519081900360200190f35b6101f06004803603606081101561023457600080fd5b506001600160a01b0381358116916020810135909116906040013561052d565b61020c6004803603602081101561026a57600080fd5b50356001600160a01b03166105b4565b610282610613565b6040805160ff9092168252519081900360200190f35b6101f0600480360360408110156102ae57600080fd5b506001600160a01b038135169060200135610618565b6102cc610666565b604080516001600160a01b039092168252519081900360200190f35b6102f061068a565b005b61020c6004803603602081101561030857600080fd5b50356001600160a01b0316610696565b6102f06106b1565b61020c610765565b6102cc61076b565b61020c6004803603602081101561034657600080fd5b50356001600160a01b031661077a565b61014f610785565b6101f06004803603604081101561037457600080fd5b506001600160a01b0381351690602001356107e6565b61020c600480360360208110156103a057600080fd5b50356001600160a01b031661084e565b6101f0600480360360408110156103c657600080fd5b506001600160a01b03813516906020013561087a565b61020c600480360360208110156103f257600080fd5b50356001600160a01b031661088e565b6102f06004803603602081101561041857600080fd5b50356108a9565b61020c6004803603604081101561043557600080fd5b506001600160a01b03813581169160200135166109a4565b6102f06004803603602081101561046357600080fd5b50356001600160a01b03166109cf565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104ff5780601f106104d4576101008083540402835291602001916104ff565b820191906000526020600020905b8154815290600101906020018083116104e257829003601f168201915b5050505050905090565b600061051d610516610ada565b8484610ade565b5060015b92915050565b60025490565b600061053a848484610142565b6105aa84610546610ada565b6105a585604051806060016040528060288152602001610fac602891396001600160a01b038a16600090815260016020526040812090610584610ada565b6001600160a01b031681526020810191909152604001600020549190610bca565b610ade565b5060019392505050565b6001600160a01b038116600090815260076020526040812054600160801b90610603906105fe906105f86105f36105ea88610696565b60065490610c61565b610cc1565b90610cd1565b610d04565b8161060a57fe5b0490505b919050565b601290565b600061051d610625610ada565b846105a58560016000610636610ada565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490610d17565b7f000000000000000000000000000000000000000000000000000000000000000081565b61069333610d71565b50565b6001600160a01b031660009081526020819052604090205490565b6106b9610ada565b6005546001600160a01b0390811691161461071b576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6005546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600580546001600160a01b0319169055565b60095481565b6005546001600160a01b031690565b60006105218261084e565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104ff5780601f106104d4576101008083540402835291602001916104ff565b600061051d6107f3610ada565b846105a585604051806060016040528060258152602001610ff8602591396001600061081d610ada565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190610bca565b6001600160a01b03811660009081526008602052604081205461052190610874846105b4565b90610f00565b600061051d610887610ada565b8484610142565b6001600160a01b031660009081526008602052604090205490565b6108b1610ada565b6005546001600160a01b03908116911614610913576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600061091d610527565b1161092757600080fd5b801561069357610958610938610527565b61094683600160801b610c61565b8161094d57fe5b600654919004610d17565b60065560408051828152905133917fa493a9229478c3fcd73f66d2cdeb7f94fd0f341da924d1054236d78454116511919081900360200190a260095461099e9082610d17565b60095550565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6109d7610ada565b6005546001600160a01b03908116911614610a39576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b038116610a7e5760405162461bcd60e51b8152600401808060200182810382526026815260200180610f436026913960400191505060405180910390fd5b6005546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600580546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b6001600160a01b038316610b235760405162461bcd60e51b8152600401808060200182810382526024815260200180610fd46024913960400191505060405180910390fd5b6001600160a01b038216610b685760405162461bcd60e51b8152600401808060200182810382526022815260200180610f696022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b60008184841115610c595760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610c1e578181015183820152602001610c06565b50505050905090810190601f168015610c4b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082610c7057506000610521565b82820282848281610c7d57fe5b0414610cba5760405162461bcd60e51b8152600401808060200182810382526021815260200180610f8b6021913960400191505060405180910390fd5b9392505050565b6000818181121561052157600080fd5b6000828201818312801590610ce65750838112155b80610cfb5750600083128015610cfb57508381125b610cba57600080fd5b600080821215610d1357600080fd5b5090565b600082820183811015610cba576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600080610d7d8361084e565b90508015610ef7576001600160a01b038316600090815260086020526040902054610da89082610d17565b6001600160a01b038416600081815260086020908152604091829020939093558051848152905191927fee503bee2bb6a87e57bc57db795f98137327401a0e7b7ce42e37926cc1a9ca4d92918290030190a260007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb85846040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015610e7357600080fd5b505af1158015610e87573d6000803e3d6000fd5b505050506040513d6020811015610e9d57600080fd5b5051905080610eef576001600160a01b038416600090815260086020526040902054610ec99083610f00565b6001600160a01b038516600090815260086020526040812091909155925061060e915050565b50905061060e565b50600092915050565b6000610cba83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610bca56fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122009b052418a3ca94c740552755829bb53511bdf9d9490c434c9367c46f412baff64736f6c634300060c0033";
//# sourceMappingURL=DividendPayingToken__factory.js.map