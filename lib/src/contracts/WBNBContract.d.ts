import { NYCAKEDividendTracker } from "../../typechain";
import ERC20Contract from "./standard/ERC20Contract";
import { ERC20 } from "./typechain";
declare class WBNBContract extends ERC20Contract<ERC20> {
    protected dividendTrackerContract: NYCAKEDividendTracker | undefined;
    constructor();
}
declare const _default: WBNBContract;
export default _default;
//# sourceMappingURL=WBNBContract.d.ts.map