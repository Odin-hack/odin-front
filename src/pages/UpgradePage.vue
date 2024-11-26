<script setup lang="ts">
import { onMounted, ref } from 'vue';

import WebApp from '@twa-dev/sdk';

import { useAuthStore } from '@/stores/auth';
import { useInvoiceStore } from '@/stores/invoice';
import { useTasksStore } from '@/stores/tasks';
import { storeToRefs } from 'pinia';

import { useTurboModeStore } from '@/stores/turbo-mode';
import { useLoaderStore } from '@/stores/loader';
import { useUserEnergyStore } from '@/stores/energy';
import { useFriendsStore } from '@/stores/friends';

import { ButtonThemeEnum } from '@/types/enums/button.enum';

import BatteryInfo from '@/components/BatteryInfo.vue';
import Badge from '@/components/UI/Badge.vue';
import Button from '@/components/UI/Button.vue';
import TasksWrapper from '@/components/tasks/wrapper.vue';
import Drawer from '@/components/Drawer.vue';
import InviteCard from '@/components/upgrades/InviteCard.vue';


const tasksStore = useTasksStore();

const { user } = storeToRefs(useAuthStore());
const { isTurboModeActive } = storeToRefs(useTurboModeStore());
const { invoice } = storeToRefs(useInvoiceStore());
const { setInvoice } = useInvoiceStore();
const { referralStats } = storeToRefs(useFriendsStore());
const { miningStatus, energyLeft, maxEnergy } = storeToRefs(useUserEnergyStore());
const { tasks } = storeToRefs(tasksStore);
const { isLoader } = storeToRefs(useLoaderStore());


const isInvoiceModal = ref(false);

const switcherChangeHandler = (value: boolean) => {
  if (!user.value?.info.powerMode) return isInvoiceModal.value = true;

  isTurboModeActive.value = value;
};

const openInvoiceModal = async (value: boolean) => {
  await setInvoice('00000000-0000-0000-0000-000000000000');

  if (invoice.value?.link) {
    WebApp.openInvoice(invoice.value.link);
  }

  WebApp.onEvent('invoiceClosed', (event) => {
    if (event.status === 'paid') {
      isTurboModeActive.value = value;
      isInvoiceModal.value = false;
    }
  });
};

onMounted(async () => {
  if (!tasks.value?.length) {
    isLoader.value = true;
    await tasksStore.fetchTasks();
    isLoader.value = false;
  }
});
</script>

<template>
  <div class="UpgradePage">
    <BatteryInfo
      :user
      :energy-left="energyLeft"
      :max-energy="maxEnergy"
      :is-mining-started="miningStatus"
    />

    <div class="UpgradePage__upgrades">
      <h3 class="SectionTitle">
        UPGRADES
      </h3>

      <div class="UpgradePage__upgrades__wrapper">
        <InviteCard
          :ref-link="user?.info?.refLink"
          :referral-energy="referralStats?.referralEnergy"
          :referrer-energy="referralStats?.referrerEnergy"
        />
      </div>
    </div>

    <div class="UpgradePage__upgrades">
      <h3 class="SectionTitle">
        UPGRADES
      </h3>

      <div class="UpgradePage__upgrades__wrapper">
        <Badge
          is-invoice
          :switch-active="isTurboModeActive"
          @update:switch-active="switcherChangeHandler($event)"
        />
      </div>
    </div>

    <TasksWrapper
      :tasks
    />

    <Drawer v-model:visible="isInvoiceModal">
      <template #title>
        Paid feature
      </template>

      <template #content>
        <div
          style="padding: 20px 16px 40px 16px"
        >
          <p>
            To access the turbo mode, you need to pay
          </p>

          <Button
            :theme="ButtonThemeEnum.PRIMARY"
            style="margin-top: 24px;"
            @click="openInvoiceModal"
          >
            Pay
          </Button>
        </div>
      </template>
    </Drawer>
  </div>
</template>

<style scoped lang="scss">
.UpgradePage {
  padding-bottom: 100px;

  &__upgrades {
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
}
</style>
