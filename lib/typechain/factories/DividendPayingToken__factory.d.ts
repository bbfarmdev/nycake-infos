import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { DividendPayingToken } from "../DividendPayingToken";
export declare class DividendPayingToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_name: string, _symbol: string, overrides?: Overrides): Promise<DividendPayingToken>;
    getDeployTransaction(_name: string, _symbol: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): DividendPayingToken;
    connect(signer: Signer): DividendPayingToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): DividendPayingToken;
}
//# sourceMappingURL=DividendPayingToken__factory.d.ts.map