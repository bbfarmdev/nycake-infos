import { BigNumber } from "ethers";
import { Component } from "react";
export default class Right extends Component<{}, {
    marketCap: BigNumber;
    tradingVolume24h: BigNumber;
    lpValue: BigNumber;
    holders: number;
}> {
    constructor(props: {});
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
//# sourceMappingURL=Right.d.ts.map