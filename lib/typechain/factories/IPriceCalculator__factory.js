"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPriceCalculator__factory = void 0;
const ethers_1 = require("ethers");
class IPriceCalculator__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IPriceCalculator__factory = IPriceCalculator__factory;
const _abi = [
    {
        inputs: [],
        name: "priceOfBNB",
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
        name: "priceOfBunny",
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
                internalType: "address[]",
                name: "assets",
                type: "address[]",
            },
        ],
        name: "pricesInUSD",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "asset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "valueOfAsset",
        outputs: [
            {
                internalType: "uint256",
                name: "valueInBNB",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "valueInUSD",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
//# sourceMappingURL=IPriceCalculator__factory.js.map