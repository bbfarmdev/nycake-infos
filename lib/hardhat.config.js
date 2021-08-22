"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("dotenv/config");
require("hardhat-typechain");
const config = {
    solidity: {
        version: "0.6.12",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    networks: {
        bsc: {
            url: "https://bsc-dataseed.binance.org",
            chainId: 56,
        },
    },
};
exports.default = config;
//# sourceMappingURL=hardhat.config.js.map