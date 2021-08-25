import { BigNumber, utils } from "ethers";
import { Component } from "react";
import NYCakeContract from "../contracts/NYCakeContract";
import PriceCalculatorContract from "../contracts/PriceCalculatorContract";
import Utils from "../Utils";

export default class Main extends Component<{}, {
}> {

    constructor(props: {}) {
        super(props);
        this.state = {
        };
    }

    public async componentDidMount() {
    }

    public render() {
        return <main>
            <a className="twitter-timeline" href="https://twitter.com/NYCAKE_BSC?ref_src=twsrc%5Etfw">Tweets by NYCAKE_BSC</a>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
        </main>;
    }
}
