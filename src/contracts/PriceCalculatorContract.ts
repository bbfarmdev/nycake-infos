import { BigNumber, BigNumberish } from "ethers";
import IPriceCalculatorArtifact from "./artifacts/contracts/IPriceCalculator.sol/IPriceCalculator.json";
import Contract from "./Contract";
import { IPriceCalculator } from "./typechain";

class PriceCalculatorContract extends Contract<IPriceCalculator> {

    constructor() {
        super("0xF5BF8A9249e3cc4cB684E3f23db9669323d4FB7d", IPriceCalculatorArtifact.abi, []);
    }

    public async valueOfAsset(asset: string, amount: BigNumberish): Promise<[BigNumber, BigNumber]> { return await this.contract.valueOfAsset(asset, amount); }
}

export default new PriceCalculatorContract();
