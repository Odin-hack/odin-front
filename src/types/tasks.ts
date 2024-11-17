type TActions = 'join' | 'forward' | 'check' | 'copy' | 'invite'

export interface ITask {
  actions: TActions[];
  awardAmount: number;
  awardType: string;
  id: number;
  info: string;
  status: string;
  title: string;
  type: string;
}
