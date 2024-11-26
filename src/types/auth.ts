export interface IUserInfoEnergy {
  recoveryRate: number,
  consumptionRate: number
}

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
  allowMining: boolean;
  online: number;
  id: string;
  refLink?: string
}

export interface IAppData {
  blockchainStats: IBlockchainStats;
  user: IUser;
  energy: IUserInfoEnergy
  refLink: string
}

export interface IAuthResponse {
  token: string;
  version: string;
  appData: IAppData;
}
