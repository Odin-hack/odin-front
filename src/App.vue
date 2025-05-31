<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import LoginSidebar from '@/components/LoginSidebar.vue';
import { useAuthStore } from '@/stores/auth';

import { useScrollEl } from '@/stores/scrollEl';

const { setScrollEl } = useScrollEl();
const router = useRouter();
const authStore = useAuthStore();
const isLoaderLocal = ref(false);
const loginDrawer = ref(false);
const menuDrawer = ref(true);

const isAuthenticated = computed(() => authStore.isAuthenticated);

const handleLogout = () => {
  authStore.logout();
  router.push('/');
};

onMounted(async () => {
  isLoaderLocal.value = false;

  if ('wakeLock' in navigator) {
    try {
      await navigator.wakeLock.request('screen');
    } catch (e) {
      console.error(e);
    }
  }

  setScrollEl(document.querySelector('#app') as HTMLElement || undefined);

  isLoaderLocal.value = true;
});
</script>

<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title class="logo-title">
        <div class="d-flex align-center">
          <v-icon color="yellow-darken-2" size="30" class="mr-2">mdi-shield-crown</v-icon>
          <span class="logo-odin">Odin</span><span class="logo-ads"> Ads</span>
        </div>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-avatar color="primary" size="32" v-bind="props" class="cursor-pointer mr-2">
            <v-icon>mdi-account</v-icon>
          </v-avatar>
        </template>
        <v-list density="compact">
          <v-list-item @click="handleLogout" prepend-icon="mdi-logout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <div class="RouterLayout">
        <RouterView/>
      </div>
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">
.RouterLayout {
  height: 100dvh;
}

.logo-title {
  display: flex;
  align-items: center;
  font-family: 'Montserrat', 'Segoe UI', 'Arial', sans-serif;
  font-weight: 800;
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  user-select: none;
}

.logo-odin {
  font-weight: 600;
  font-size: 1.2em;
  letter-spacing: 1px;
  font-family: 'Montserrat', 'Segoe UI', 'Arial', sans-serif;
}

.logo-ads {
  color: #fff;
  font-weight: 500;
  font-size: 1.1em;
  letter-spacing: 0.5px;
  font-family: 'Montserrat', 'Segoe UI', 'Arial', sans-serif;
}

@media (max-width: 600px) {
  .logo-title {
    font-size: 1.1rem;
  }
  .logo-odin {
    font-size: 1.1em;
  }
  .logo-ads {
    font-size: 0.95em;
  }
}
</style>
