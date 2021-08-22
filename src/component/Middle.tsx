import { BigNumber, utils } from "ethers";
import { Component } from "react";
import Wallet from "../bsc/Wallet";
import NYCakeContract from "../contracts/NYCakeContract";
import PriceCalculatorContract from "../contracts/PriceCalculatorContract";
import Utils from "../Utils";

export default class Middle extends Component<{}, {
    yourNYCakeBalance: BigNumber,
    claimableCakeRewards: BigNumber,
    value: BigNumber,
    totalDistributedCakeRewards: BigNumber,
}> {

    constructor(props: {}) {
        super(props);
        this.state = {
            yourNYCakeBalance: BigNumber.from(0),
            claimableCakeRewards: BigNumber.from(0),
            value: BigNumber.from(0),
            totalDistributedCakeRewards: BigNumber.from(0),
        };
        Wallet.on("connect", () => this.componentDidMount());
    }

    public async componentDidMount() {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            (async () => {
                this.setState({ yourNYCakeBalance: await NYCakeContract.balanceOf(owner) });
            })();
            (async () => {
                const results = await NYCakeContract.getAccount(owner);
                this.setState({ claimableCakeRewards: results[3], totalDistributedCakeRewards: results[4] });
                const prices = await PriceCalculatorContract.valueOfAsset("0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", results[3]);
                this.setState({ value: prices[1] });
            })();
        }
    }

    public render() {
        return <main>
            <div>
                Your NewYorkCake Balance: {Utils.numberWithCommas(utils.formatEther(this.state.yourNYCakeBalance))}
            </div>
            <div>
                Claimable Cake Rewards: {Utils.numberWithCommas(utils.formatEther(this.state.claimableCakeRewards))}
            </div>
            <div>
                Value: ${Utils.numberWithCommas(utils.formatEther(this.state.value))}
            </div>
            <div>
                Total Distributed Cake Rewards: {Utils.numberWithCommas(utils.formatEther(this.state.totalDistributedCakeRewards))}
            </div>
        </main>;
    }
}
