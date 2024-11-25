export interface IReferralStats {
  totalInvited: number;
  rewardedInvited: number;
  energyPerReferral: number;
  totalCapacityIncreased: number;
}

export interface IFriendListItem {
  userId: number,
  firstName: string,
  lastName: string,
  photoUrl: string,
  rewardEnergy: string
}

