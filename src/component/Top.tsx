import { BigNumber, utils } from "ethers";
import { Component } from "react";
import NYCakeContract from "../contracts/NYCakeContract";
import PriceCalculatorContract from "../contracts/PriceCalculatorContract";
import Utils from "../Utils";

export default class Top extends Component<{}, {
    totalCAKERewards: BigNumber,
    value: BigNumber,
}> {

    constructor(props: {}) {
        super(props);
        this.state = {
            totalCAKERewards: BigNumber.from(0),
            value: BigNumber.from(0),
        };
    }

    public async componentDidMount() {
        const totalCAKERewards = (await NYCakeContract.getClaimWait()).add(await NYCakeContract.getTotalDividendsDistributed());
        this.setState({ totalCAKERewards });
        const prices = await PriceCalculatorContract.valueOfAsset("0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", totalCAKERewards);
        this.setState({ value: prices[1] });
    }

    public render() {
        return <main>
            <div>
                Total CAKE Rewards: {Utils.numberWithCommas(utils.formatEther(this.state.totalCAKERewards))}
            </div>
            <div>
                Value: ${Utils.numberWithCommas(utils.formatEther(this.state.value))}
            </div>
        </main>;
    }
}
