import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { Ownable } from "../Ownable";
export declare class Ownable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<Ownable>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): Ownable;
    connect(signer: Signer): Ownable__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Ownable;
}
//# sourceMappingURL=Ownable__factory.d.ts.map