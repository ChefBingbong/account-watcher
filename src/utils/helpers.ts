import { BN, PublicKey } from "@drift-labs/sdk";
import { FUNDS_PROGRAM_ID } from "./config";

export function bnToDecimal(bn: BN, decimalPlaces: number): number {
    const decimalFactor = Math.pow(10, decimalPlaces);
    return bn.toNumber() / decimalFactor;
}
  

export const getVault = (owner: PublicKey) => {
    const [vault] = PublicKey.findProgramAddressSync(
        [Buffer.from("vault"), owner.toBuffer()],
        new PublicKey(FUNDS_PROGRAM_ID)
    )
    return vault;
}