import { BigNumber, utils } from "ethers";
import { Component } from "react";
import NYCakeContract from "../contracts/NYCakeContract";
import PriceCalculatorContract from "../contracts/PriceCalculatorContract";
import WBNBContract from "../contracts/WBNBContract";
import Utils from "../Utils";

export default class Right extends Component<{}, {
    marketCap: BigNumber,
    tradingVolume24h: BigNumber,
    lpValue: BigNumber,
    holders: number,
}> {

    constructor(props: {}) {
        super(props);
        this.state = {
            marketCap: BigNumber.from(0),
            tradingVolume24h: BigNumber.from(0),
            lpValue: BigNumber.from(0),
            holders: 0,
        };
    }

    public async componentDidMount() {
        (async () => {
            const prices = await PriceCalculatorContract.valueOfAsset("0x3d6f31679c13b767c7d029efd33fc5f19da40224", await NYCakeContract.getTotalSupply());
            this.setState({ marketCap: prices[1] });
        });
        //TODO: Load Trading VOLUME 24H using https://www.coingecko.com/api/documentations/v3#/coins/get_coins__id__market_chart

        // Load LP value.
        (async () => {
            const wbnb = await WBNBContract.balanceOf("0x0e0fdc578548427a9cded233bb4a48c2e20de489");
            const nycake = await NYCakeContract.balanceOf("0x0e0fdc578548427a9cded233bb4a48c2e20de489");
            const wbnbPrices = await PriceCalculatorContract.valueOfAsset("0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", wbnb);
            const nycakePrices = await PriceCalculatorContract.valueOfAsset("0x3d6f31679c13b767c7d029efd33fc5f19da40224", nycake);
            this.setState({ lpValue: wbnbPrices[1].add(nycakePrices[1]) });
        })();
        (async () => {
            this.setState({ holders: await NYCakeContract.getNumberOfDividendTokenHolders() });
        });
    }

    public render() {
        return <main>
            <div>
                MarketCap<br />
                <b>${Utils.numberWithCommas(utils.formatEther(this.state.marketCap))}</b>
            </div>
            {/*<div>
                Trading VOLUME 24H<br />
                <b>${Utils.numberWithCommas(utils.formatEther(this.state.tradingVolume24h))}</b>
            </div>*/}
            <div>
                LP value<br />
                <b>${Utils.numberWithCommas(utils.formatEther(this.state.lpValue))}</b>
            </div>
            {<div>
                Holders<br />
                <b>{Utils.numberWithCommas(String(this.state.holders))}</b>
            </div>}
        </main>;
    }
}
