"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IPriceCalculator_json_1 = __importDefault(require("./artifacts/contracts/IPriceCalculator.sol/IPriceCalculator.json"));
const Contract_1 = __importDefault(require("./Contract"));
class PriceCalculatorContract extends Contract_1.default {
    constructor() {
        super("0xF5BF8A9249e3cc4cB684E3f23db9669323d4FB7d", IPriceCalculator_json_1.default.abi, []);
    }
    async valueOfAsset(asset, amount) { return await this.contract.valueOfAsset(asset, amount); }
}
exports.default = new PriceCalculatorContract();
//# sourceMappingURL=PriceCalculatorContract.js.map