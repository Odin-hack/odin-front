import { ref } from 'vue';
import { defineStore } from 'pinia';

import { useApi } from '@/composables/useApi';
import { useLocalStorage } from '@/composables/useLocaleStorage';

import { useLoaderStore } from '@/stores/loader';

import type { IAuthResponse, IUser } from '@/types/auth';


export const useAuthStore = defineStore('authStore', () => {
  const initData = 'query_id=AAFNyPUbAAAAAE3I9Rvx_7oK&user=%7B%22id%22%3A469092429%2C%22first_name%22%3A%22%D0%9B%D1%83%D0%BA%D0%B0%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22lukatsag%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FxqJh2Ka8kTsw6ZCT5g5N5cwRqU7dpGS2MKa3ntnusc8.svg%22%7D&auth_date=1731771108&hash=8e73a048c7e9a45d77d13b7e1d3329a13aae9134d013d4b22e4880f2d35f5655';

  const user = ref<IUser | null>(null);
  const blockchainStats = ref<IUser | null>(null);

  const loadingStore = useLoaderStore();

  const authUser = async () => {
    loadingStore.setLoading(true);

    const { data, error } = await useApi<IAuthResponse>('POST', '/v1/api/auth', {
      body: {
        initData,
      },
    });

    if (error) return;

    if (data?.token) useLocalStorage('token').value = data?.token;

    user.value = data?.appData?.user;
    blockchainStats.value = data?.appData?.blockchainStats;

    loadingStore.setLoading(false);
  };

  return {
    authUser,
    user,
    blockchainStats,
  };
});
