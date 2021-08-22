"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NYCAKE_json_1 = __importDefault(require("./artifacts/contracts/NYCAKE.sol/NYCAKE.json"));
const ERC20Contract_1 = __importDefault(require("./standard/ERC20Contract"));
class NYCAKEDividendTrackerContract extends ERC20Contract_1.default {
    constructor() {
        super("0xA14eBc2cbe4B2f87B0F1aEC4bCa6e410790D8709", NYCAKE_json_1.default.abi, []);
    }
    async getClaimWait() { return await this.contract.getClaimWait(); }
    async getTotalDividendsDistributed() { return await this.contract.getTotalDividendsDistributed(); }
    async getAccount(account) {
        return await this.contract.getAccount(account);
    }
}
exports.default = new NYCakeContract();
//# sourceMappingURL=NYCAKEDividendTrackerContract.js.map