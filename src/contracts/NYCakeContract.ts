import { BigNumber } from "ethers";
import NYCAKEArtifact from "./artifacts/contracts/NYCAKE.sol/NYCAKE.json";
import ERC20Contract from "./standard/ERC20Contract";
import { ERC20 } from "./typechain";

class NYCakeContract extends ERC20Contract<ERC20> {

    constructor() {
        super("0x3d6f31679c13b767c7d029efd33fc5f19da40224", NYCAKEArtifact.abi, []);
    }

    public async getClaimWait(): Promise<BigNumber> { return await this.contract.getClaimWait(); }
    public async getTotalDividendsDistributed(): Promise<BigNumber> { return await this.contract.getTotalDividendsDistributed(); }
    public async getNumberOfDividendTokenHolders(): Promise<number> { return (await this.contract.getNumberOfDividendTokenHolders()).toNumber(); }

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
        return await this.contract.getAccountDividendsInfo(account);
    }

    public async claim() {
        const contract = await this.loadWalletContract();
        await contract?.claim();
    }
}

export default new NYCakeContract();
