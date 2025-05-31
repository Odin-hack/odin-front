<template>
  <v-app>
    <v-navigation-drawer
      v-model="menuDrawer"
      :permanent="!isMobile"
      :temporary="isMobile"
      location="left"
      :width="260"
    >
      <v-list nav>
        <v-list-item
          to="/companies"
          :active="$route.path.startsWith('/companies')"
          prepend-icon="mdi-domain"
          title="Companies"
        />
        <v-list-item
          to="/campaigns"
          :active="$route.path.startsWith('/campaigns')"
          prepend-icon="mdi-bullhorn"
          title="Campaigns"
        />
        <v-list-item
          to="/statistics"
          :active="$route.path.startsWith('/statistics')"
          prepend-icon="mdi-chart-bar"
          title="Statistics"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat color="white" class="main-app-bar" height="60" v-if="isMobile">
      <v-btn
        icon
        class="d-md-none mr-2"
        @click="menuDrawer = !menuDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <slot name="app-bar-content" />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
const menuDrawer = ref(false)
const auth = useAuthStore()
const router = useRouter()

const isMobile = ref(false)
function checkMobile() {
  isMobile.value = window.innerWidth < 960
  menuDrawer.value = !isMobile.value
}
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
</script>

<style scoped>
.main-app-bar {
  z-index: 10;
  box-shadow: 0 2px 8px 0 rgba(33, 150, 243, 0.04);
}
</style> 