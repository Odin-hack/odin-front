export interface IStatistics {
  event: string;
  payload: {
    totalBlocks: number;
    blocksMined: number;
    miningStarted: string;
    totalSupply: number;
    totalMined: number;
    totalHolders: number;
  };
}

export interface IUpdateUser {
  event: string;
  payload: {
    balance?: string,
    maxEnergy?: number,
    powerMode?: boolean,
    allowMining?: boolean,
    online?: number
  };
}


export interface IHashLastBlock {
  solverName: number;
  blockReward: number;
  rewards: any[];
  hash: string;
  timestamp: number;
  solver: number;
  index: number;
  myReward?: number;
}

export interface IEnergy {
  payload: {
    energy: number
    energyConsumed: number
  }
}

export interface IRewardData {
  event: 'string',
  payload: {
    index: number
    reward: number
  }
}

export interface IHashCash {
  info: {
    online: number;
  };
  payload: {
    config: {
      nextBlockReward: number;
      previousBlock: {
        nonce: number;
        index: number;
        hash: string;
        previousHash: string;
        mainFactor: string;
        shareFactor: string;
        timestamp: number;
        miner: number;
        reward: number;
      };
      mainFactor: number;
      shareFactor: number;
    };
    miners: number;
    lastBlock: IHashLastBlock[];
  };
  event: string;
}


