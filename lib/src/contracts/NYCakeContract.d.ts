import { BigNumber } from "ethers";
import { NYCAKEDividendTracker } from "../../typechain";
import ERC20Contract from "./standard/ERC20Contract";
import { ERC20 } from "./typechain";
declare class NYCakeContract extends ERC20Contract<ERC20> {
    protected dividendTrackerContract: NYCAKEDividendTracker | undefined;
    constructor();
    getClaimWait(): Promise<BigNumber>;
    getTotalDividendsDistributed(): Promise<BigNumber>;
    getAccount(account: string): Promise<[
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ]>;
}
declare const _default: NYCakeContract;
export default _default;
//# sourceMappingURL=NYCakeContract.d.ts.map