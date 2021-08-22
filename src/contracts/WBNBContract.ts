import { NYCAKEDividendTracker } from "../../typechain";
import ERC20Artifact from "./artifacts/contracts/ERC20.sol/ERC20.json";
import ERC20Contract from "./standard/ERC20Contract";
import { ERC20 } from "./typechain";

class WBNBContract extends ERC20Contract<ERC20> {

    protected dividendTrackerContract: NYCAKEDividendTracker | undefined;

    constructor() {
        super("0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", ERC20Artifact.abi, []);
    }
}

export default new WBNBContract();
