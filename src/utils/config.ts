import { PublicKey } from '@drift-labs/sdk';
import dotenv from 'dotenv';

dotenv.config({
    path: process.env.NODE_ENV === 'development' ? '.dev.env' : '.env',
});


export const RPC_URL = process.env.RPC_URL;
export const TG_API_KEY = process.env.TG_API_KEY;
export const PORT = process.env.PORT || 3000;

export const SUPABASE_URL = process.env.SUPABASE_URL || "";
export const SUPABASE_KEY = process.env.SUPABASE_KEY || "";

export const DRIFT_MARKET_INDEX_USDC = 0;
export const DRIFT_MARKET_INDEX_SOL = 1;
export const MICRO_CENTS_PER_USDC = 1000000;
export const FUNDS_PROGRAM_ID = new PublicKey("6JjHXLheGSNvvexgzMthEcgjkcirDrGduc3HAKB2P1v2");
