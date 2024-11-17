export interface IUserStaff {
  payload: {
    maxEnergy: number;
    tasks: number[];
    lastEnergyClaim: number;
    powerMode: boolean;
    energy: number;
    balance: number;
    userId: number;
    energyLevel: number;
    blocks: number;
  };
  event: string;
  info: {
    online: number;
  };
}

export interface IUserBlock {
  payload: {
    energy: number;
    balance: number;
  };
  info: {
    online: number;
  };
  event: string;
}

export interface IHashLastBlock {
  index: number;
  myReward: number;
  hash: string;
  timestamp: number;
  reward: number;
  solver: number;
  solverName: string;
}

export interface IHashCash {
  info: {
    online: number;
  };
  payload: {
    config: {
      nextBlockReward: number;
      previousBlock: {
        index: number;
        data: string;
        timestamp: number;
        reward: number;
        hash: string;
        mainFactor: number;
        shareFactor: number;
        nonce: number;
        miner: number;
        previousHash: string;
      };
      mainFactor: number;
      nextBlockEnergy: number;
      shareFactor: number;
    };
    miners: number;
    lastBlocks: IHashLastBlock[];
  };
  event: string;
}


