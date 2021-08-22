import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { NYCTransferHelper } from "../NYCTransferHelper";
export declare class NYCTransferHelper__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(routerAddress: string, overrides?: Overrides): Promise<NYCTransferHelper>;
    getDeployTransaction(routerAddress: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): NYCTransferHelper;
    connect(signer: Signer): NYCTransferHelper__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NYCTransferHelper;
}
//# sourceMappingURL=NYCTransferHelper__factory.d.ts.map