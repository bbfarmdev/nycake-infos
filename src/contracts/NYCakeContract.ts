import Config from "../Config";
import NYCAKEArtifact from "./artifacts/contracts/NYCAKE.sol/NYCAKE.json";
import ERC20Contract from "./standard/ERC20Contract";
import { ERC20 } from "./typechain";

class NYCakeContract extends ERC20Contract<ERC20> {

    constructor() {
        super(Config.contracts.NYCake, NYCAKEArtifact.abi, []);
    }
}

export default new NYCakeContract();
