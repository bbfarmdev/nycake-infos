"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DividendPayingTokenOptionalInterface__factory = void 0;
const ethers_1 = require("ethers");
class DividendPayingTokenOptionalInterface__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.DividendPayingTokenOptionalInterface__factory = DividendPayingTokenOptionalInterface__factory;
const _abi = [
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
//# sourceMappingURL=DividendPayingTokenOptionalInterface__factory.js.map