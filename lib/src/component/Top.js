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
const Utils_1 = __importDefault(require("../Utils"));
class Top extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCAKERewards: ethers_1.BigNumber.from(0),
            value: ethers_1.BigNumber.from(0),
        };
    }
    async componentDidMount() {
        const totalCAKERewards = (await NYCakeContract_1.default.getClaimWait()).add(await NYCakeContract_1.default.getTotalDividendsDistributed());
        this.setState({ totalCAKERewards });
        const prices = await PriceCalculatorContract_1.default.valueOfAsset("0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", totalCAKERewards);
        this.setState({ value: prices[1] });
    }
    render() {
        return jsx_runtime_1.jsxs("main", { children: [jsx_runtime_1.jsxs("div", { children: ["Total CAKE Rewards: ", Utils_1.default.numberWithCommas(ethers_1.utils.formatEther(this.state.totalCAKERewards))] }, void 0), jsx_runtime_1.jsxs("div", { children: ["Value: $", Utils_1.default.numberWithCommas(ethers_1.utils.formatEther(this.state.value))] }, void 0)] }, void 0);
    }
}
exports.default = Top;
//# sourceMappingURL=Top.js.map