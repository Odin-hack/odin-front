export interface IBlockchainStats {
  totalBlocks: number;
  blocksMined: number;
  miningStarted: number;
  totalSupply: number;
  totalMined: number;
  totalHolders: number;
}

export interface IUser {
  balance: number;
  blocks: number;
  energy: number;
  firstName: string;
  maxEnergy: number;
  powerMode: boolean;
}

export interface IAppData {
  blockchainStats: IBlockchainStats;
  user: IUser;
}

export interface IAuthResponse {
  token: string;
  version: string;
  alreadyInApp: boolean;
  appData: IAppData;
}
