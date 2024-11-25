import { ref } from 'vue';
import { defineStore } from 'pinia';

import { useApi } from '@/composables/useApi';

import type { IFriendListItem, IReferralStats } from '@/types/friends';


export const useFriendsStore = defineStore('friends-store', () => {
  const referralStats = ref<IReferralStats | null>(null);
  const friendList = ref<IFriendListItem[]>([]);

  const setReferralStats = (stats: IReferralStats) => stats && (referralStats.value = stats);
  const addToFriendList = (friend: IFriendListItem) => friendList.value.unshift(friend);

  const getFriendsList = async () => {
    const { data, error } = await useApi<IFriendListItem[]>('GET', '/v1/api/referrals');

    if (error) return;

    if (data) return friendList.value = data;
  };

  return {
    referralStats,
    friendList,
    setReferralStats,
    addToFriendList,
    getFriendsList,
  };
});
