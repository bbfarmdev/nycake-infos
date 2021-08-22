import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
import { IPriceCalculator } from "./typechain";
declare class PriceCalculatorContract extends Contract<IPriceCalculator> {
    constructor();
    valueOfAsset(asset: string, amount: BigNumberish): Promise<[BigNumber, BigNumber]>;
}
declare const _default: PriceCalculatorContract;
export default _default;
//# sourceMappingURL=PriceCalculatorContract.d.ts.map