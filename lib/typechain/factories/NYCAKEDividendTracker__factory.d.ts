import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { NYCAKEDividendTracker } from "../NYCAKEDividendTracker";
export declare class NYCAKEDividendTracker__factory extends ContractFactory {
    constructor(linkLibraryAddresses: NYCAKEDividendTrackerLibraryAddresses, signer?: Signer);
    static linkBytecode(linkLibraryAddresses: NYCAKEDividendTrackerLibraryAddresses): string;
    deploy(overrides?: Overrides): Promise<NYCAKEDividendTracker>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): NYCAKEDividendTracker;
    connect(signer: Signer): NYCAKEDividendTracker__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NYCAKEDividendTracker;
}
export interface NYCAKEDividendTrackerLibraryAddresses {
    ["__$ce39e7eba0e8c210ce522c13d692fbaca1$__"]: string;
}
//# sourceMappingURL=NYCAKEDividendTracker__factory.d.ts.map