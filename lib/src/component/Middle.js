"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ethers_1 = require("ethers");
const react_1 = require("react");
const Wallet_1 = __importDefault(require("../bsc/Wallet"));
const NYCakeContract_1 = __importDefault(require("../contracts/NYCakeContract"));
const PriceCalculatorContract_1 = __importDefault(require("../contracts/PriceCalculatorContract"));
const Utils_1 = __importDefault(require("../Utils"));
class Middle extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            yourNYCakeBalance: ethers_1.BigNumber.from(0),
            claimableCakeRewards: ethers_1.BigNumber.from(0),
            value: ethers_1.BigNumber.from(0),
            totalDistributedCakeRewards: ethers_1.BigNumber.from(0),
        };
        Wallet_1.default.on("connect", () => this.componentDidMount());
    }
    async componentDidMount() {
        const owner = await Wallet_1.default.loadAddress();
        if (owner !== undefined) {
            (async () => {
                this.setState({ yourNYCakeBalance: await NYCakeContract_1.default.balanceOf(owner) });
            })();
            (async () => {
                const results = await NYCakeContract_1.default.getAccount(owner);
                this.setState({ claimableCakeRewards: results[3], totalDistributedCakeRewards: results[4] });
                const prices = await PriceCalculatorContract_1.default.valueOfAsset("0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", results[3]);
                this.setState({ value: prices[1] });
            })();
        }
    }
    render() {
        return jsx_runtime_1.jsxs("main", { children: [jsx_runtime_1.jsxs("div", { children: ["Your NewYorkCake Balance: ", Utils_1.default.numberWithCommas(ethers_1.utils.formatEther(this.state.yourNYCakeBalance))] }, void 0), jsx_runtime_1.jsxs("div", { children: ["Claimable Cake Rewards: ", Utils_1.default.numberWithCommas(ethers_1.utils.formatEther(this.state.claimableCakeRewards))] }, void 0), jsx_runtime_1.jsxs("div", { children: ["Value: $", Utils_1.default.numberWithCommas(ethers_1.utils.formatEther(this.state.value))] }, void 0), jsx_runtime_1.jsxs("div", { children: ["Total Distributed Cake Rewards: ", Utils_1.default.numberWithCommas(ethers_1.utils.formatEther(this.state.totalDistributedCakeRewards))] }, void 0)] }, void 0);
    }
}
exports.default = Middle;
//# sourceMappingURL=Middle.js.map