export interface IHashLastBlock {
  index: number;
  myReward: number;
  hash: string;
  timestamp: number;
  reward: number;
  solver: number;
  solverName: string;
}

export interface IEnergy {
  payload: {
    energy: number
    energyConsumed: number
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
    lastBlock: IHashLastBlock[];
  };
  event: string;
}


