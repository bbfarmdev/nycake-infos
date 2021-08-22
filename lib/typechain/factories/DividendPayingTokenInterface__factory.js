"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DividendPayingTokenInterface__factory = void 0;
const ethers_1 = require("ethers");
class DividendPayingTokenInterface__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.DividendPayingTokenInterface__factory = DividendPayingTokenInterface__factory;
const _abi = [
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
        inputs: [],
        name: "withdrawDividend",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
//# sourceMappingURL=DividendPayingTokenInterface__factory.js.map