"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ERC20_json_1 = __importDefault(require("./artifacts/contracts/ERC20.sol/ERC20.json"));
const ERC20Contract_1 = __importDefault(require("./standard/ERC20Contract"));
class WBNBContract extends ERC20Contract_1.default {
    constructor() {
        super("0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", ERC20_json_1.default.abi, []);
    }
}
exports.default = new WBNBContract();
//# sourceMappingURL=WBNBContract.js.map