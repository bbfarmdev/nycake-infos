import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { NYCAKE } from "../NYCAKE";
export declare class NYCAKE__factory extends ContractFactory {
    constructor(linkLibraryAddresses: NYCAKELibraryAddresses, signer?: Signer);
    static linkBytecode(linkLibraryAddresses: NYCAKELibraryAddresses): string;
    deploy(routerAddress: string, marketingWalletAddress: string, overrides?: Overrides): Promise<NYCAKE>;
    getDeployTransaction(routerAddress: string, marketingWalletAddress: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): NYCAKE;
    connect(signer: Signer): NYCAKE__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NYCAKE;
}
export interface NYCAKELibraryAddresses {
    ["__$ce39e7eba0e8c210ce522c13d692fbaca1$__"]: string;
}
//# sourceMappingURL=NYCAKE__factory.d.ts.map