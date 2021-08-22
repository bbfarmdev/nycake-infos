import { BigNumber } from "ethers";
import ERC20Contract from "./standard/ERC20Contract";
import { ERC20 } from "./typechain";
declare class NYCakeContract extends ERC20Contract<ERC20> {
    constructor();
    getClaimWait(): Promise<BigNumber>;
    getTotalDividendsDistributed(): Promise<BigNumber>;
    getNumberOfDividendTokenHolders(): Promise<number>;
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