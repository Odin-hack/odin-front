import { ref } from 'vue';
import { defineStore } from 'pinia';

import { useApi } from '@/composables/useApi';

import type { IReferralStats } from '@/types/friends';
import type { IReferral } from '@/types/socket-data.interface';


export const useFriendsStore = defineStore('friends-store', () => {
  const referralStats = ref<IReferralStats | null>(null);
  const friendList = ref<IReferral['payload'][]>([]);


  const setReferralStats = (stats: IReferralStats) => stats && (referralStats.value = stats);
  const addToFriendList = (friend: IReferral['payload']) => friendList.value.unshift(friend);
  const updateFriend = (updatedFriend: IReferral['payload']) => {
    friendList.value = friendList.value.map((friend) =>
      friend.userId === updatedFriend.userId
        ? { ...friend, rewardEnergy: updatedFriend.rewardEnergy }
        : friend,
    );
  };
  const getFriendsList = async () => {
    const { data, error } = await useApi<IReferral['payload'][]>('GET', '/v1/api/referrals');

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
