import { ref } from 'vue';
import { defineStore } from 'pinia';

import { useApi } from '@/composables/useApi';

import type { IReferralStats } from '@/types/friends';
import type { IReferral } from '@/types/socket-data.interface';
import { useAuthStore } from '@/stores/auth';


export const useFriendsStore = defineStore('friends-store', () => {
  const referralStats = ref<IReferralStats | null>(null);
  const friendList = ref<IReferral['payload'][]>([]);


  const setReferralStats = (stats: IReferralStats) => stats && (referralStats.value = stats);

  const updateReferralStats = (data: IReferral['payload']) => {
    data.totalInvited && (referralStats.value!.totalInvited = data.totalInvited);
    data.rewardedInvited && (referralStats.value!.rewardedInvited = data.rewardedInvited);
    data.totalCapacityIncreased && (referralStats.value!.totalCapacityIncreased = data.totalCapacityIncreased);
  };

  const addToFriendList = (friend: IReferral['payload']) => {
    friendList.value.unshift(friend);

    updateReferralStats(friend);
  };

  const updateFriend = (updatedFriend: IReferral['payload']) => {
    friendList.value = friendList.value.map((friend) =>
      friend.userId === updatedFriend.userId
        ? { ...friend, rewardEnergy: updatedFriend.rewardEnergy }
        : friend,
    );

    useAuthStore().addBalance(updatedFriend.rewardEnergy);
    updateReferralStats(updatedFriend);
  };

  const getFriendsList = async ({ offset = 0, limit = 100 }: Record<string, number>) => {
    const { data, error } = await useApi<IReferral['payload'][]>('GET', `/v1/api/referrals?limit=${ limit }&offset=${ offset }`);

    if (error) return;

    if (data) return friendList.value = data;
  };

  return {
    referralStats,
    friendList,
    setReferralStats,
    addToFriendList,
    getFriendsList,
    updateFriend,
  };
});
