import { BigNumber, ethers } from "ethers";
import { NYCAKEDividendTracker } from "../../typechain";
import NetworkProvider from "../bsc/NetworkProvider";
import NYCAKEArtifact from "./artifacts/contracts/NYCAKE.sol/NYCAKE.json";
import NYCAKEDividendTrackerArtifact from "./artifacts/contracts/NYCAKE.sol/NYCAKEDividendTracker.json";
import ERC20Contract from "./standard/ERC20Contract";
import { ERC20 } from "./typechain";

class NYCakeContract extends ERC20Contract<ERC20> {

    protected dividendTrackerContract: NYCAKEDividendTracker | undefined;

    constructor() {
        super("0xA14eBc2cbe4B2f87B0F1aEC4bCa6e410790D8709", NYCAKEArtifact.abi, []);
    }

    public async getClaimWait(): Promise<BigNumber> { return await this.contract.getClaimWait(); }
    public async getTotalDividendsDistributed(): Promise<BigNumber> { return await this.contract.getTotalDividendsDistributed(); }

    public async getAccount(account: string): Promise<[
        string, // account
        BigNumber, // index
        BigNumber, // iterationsUntilProcessed
        BigNumber, // withdrawableDividends
        BigNumber, // totalDividends
        BigNumber, // lastClaimTime
        BigNumber, // nextClaimTime
        BigNumber, // secondsUntilAutoClaimAvailable
    ]> {
        if (this.dividendTrackerContract === undefined) {
            this.dividendTrackerContract = new ethers.Contract(await this.contract.dividendTracker(), NYCAKEDividendTrackerArtifact.abi, NetworkProvider.provider).connect(NetworkProvider.signer) as NYCAKEDividendTracker;
        }
        return await this.dividendTrackerContract.getAccount(account);
    }
}

export default new NYCakeContract();
