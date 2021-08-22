"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ethers_1 = require("ethers");
const react_1 = require("react");
const NYCakeContract_1 = __importDefault(require("../contracts/NYCakeContract"));
const PriceCalculatorContract_1 = __importDefault(require("../contracts/PriceCalculatorContract"));
const WBNBContract_1 = __importDefault(require("../contracts/WBNBContract"));
const Utils_1 = __importDefault(require("../Utils"));
class Right extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            marketCap: ethers_1.BigNumber.from(0),
            tradingVolume24h: ethers_1.BigNumber.from(0),
            lpValue: ethers_1.BigNumber.from(0),
            holders: 0,
        };
    }
    async componentDidMount() {
        (async () => {
            const prices = await PriceCalculatorContract_1.default.valueOfAsset("0xA14eBc2cbe4B2f87B0F1aEC4bCa6e410790D8709", await NYCakeContract_1.default.getTotalSupply());
            this.setState({ marketCap: prices[1] });
        });
        (async () => {
            const wbnb = await WBNBContract_1.default.balanceOf("0x3ca164ce12593f856eb9a51d007798d126f5b3fd");
            const nycake = await NYCakeContract_1.default.balanceOf("0x3ca164ce12593f856eb9a51d007798d126f5b3fd");
            const wbnbPrices = await PriceCalculatorContract_1.default.valueOfAsset("0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", wbnb);
            const nycakePrices = await PriceCalculatorContract_1.default.valueOfAsset("0xA14eBc2cbe4B2f87B0F1aEC4bCa6e410790D8709", nycake);
            this.setState({ lpValue: wbnbPrices[1].add(nycakePrices[1]) });
        })();
    }
    render() {
        return jsx_runtime_1.jsxs("main", { children: [jsx_runtime_1.jsxs("div", { children: ["MarketCap", jsx_runtime_1.jsx("br", {}, void 0), jsx_runtime_1.jsxs("b", { children: ["$", Utils_1.default.numberWithCommas(ethers_1.utils.formatEther(this.state.marketCap))] }, void 0)] }, void 0), jsx_runtime_1.jsxs("div", { children: ["LP value", jsx_runtime_1.jsx("br", {}, void 0), jsx_runtime_1.jsxs("b", { children: ["$", Utils_1.default.numberWithCommas(ethers_1.utils.formatEther(this.state.lpValue))] }, void 0)] }, void 0)] }, void 0);
    }
}
exports.default = Right;
//# sourceMappingURL=Right.js.map