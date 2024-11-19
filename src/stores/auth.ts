import { ref } from 'vue';
import { defineStore } from 'pinia';

import WebApp from '@twa-dev/sdk';

import { useApi } from '@/composables/useApi';
import { useLocalStorage } from '@/composables/useLocaleStorage';
import { useRuntimeConfig } from '@/composables/useRuntimeConfig';

import { useLoaderStore } from '@/stores/loader';

import type { IAuthResponse, IBlockchainStats, IUserInfoEnergy, IUser } from '@/types/auth';


export const useAuthStore = defineStore('authStore', () => {
  const initData = ref('');

  const { dev } = useRuntimeConfig();

  initData.value = !dev ?
    WebApp.initData :
    'query_id=AAFNyPUbAAAAAE3I9Rs-Dm2K&user=%7B%22id%22%3A469092429%2C%22first_name%22%3A%22%D0%9B%D1%83%D0%BA%D0%B0%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22lukatsag%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FxqJh2Ka8kTsw6ZCT5g5N5cwRqU7dpGS2MKa3ntnusc8.svg%22%7D&auth_date=1731848013&signature=qy8DnnbyVOqKzr3q8lxRD2BXlw9cc3ZMAhn4rrOYjT7IVh7Jrla8BxIf6jyonZxuc9jultN7JQEUFCe3PsPuAA&hash=b9a87e5de109f1cd84ac84b03ed106a752c3a788fb0a2e06fe1ad7ec66388f8a';

  const user = ref<{
    info: IUser,
    energy: IUserInfoEnergy
  } | null>(null);

  const alreadyInApp = ref(false);

  const blockchainStats = ref<IBlockchainStats | null>(null);

  const loadingStore = useLoaderStore();

  const authUser = async () => {
    loadingStore.setLoading(true);

    const { data, error } = await useApi<IAuthResponse>('POST', '/v1/api/auth', {
      body: {
        initData: initData.value,
      },
    });


    if (error) return;


    if (data?.token) useLocalStorage('token').value = data?.token;

    alreadyInApp.value = data?.alreadyInApp || false;
    user.value =  data?.appData && { info: data?.appData?.user, energy: data?.appData?.energy } || null;
    blockchainStats.value = data?.appData?.blockchainStats || null;

    loadingStore.setLoading(false);
  };

  return {
    authUser,
    user,
    blockchainStats,
    alreadyInApp,
  };
});
