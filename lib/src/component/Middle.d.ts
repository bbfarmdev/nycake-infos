import { BigNumber } from "ethers";
import { Component } from "react";
export default class Middle extends Component<{}, {
    yourNYCakeBalance: BigNumber;
    claimableCakeRewards: BigNumber;
    value: BigNumber;
    totalDistributedCakeRewards: BigNumber;
}> {
    constructor(props: {});
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
//# sourceMappingURL=Middle.d.ts.map