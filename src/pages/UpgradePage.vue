<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import WebApp from '@twa-dev/sdk';

import { useAuthStore } from '@/stores/auth';
import { useInvoiceStore } from '@/stores/invoice';
import { useTasksStore } from '@/stores/tasks';
import { useHashStore } from '@/stores/hash';
import { useSocketDataStore } from '@/stores/socket-data';
import { storeToRefs } from 'pinia';

import type { ITask } from '@/types/tasks';

import { ButtonThemeEnum } from '@/types/enums/button.enum';
import { TaskTypeEnum } from '@/types/enums/task.enum';

import BatteryInfo from '@/components/BatteryInfo.vue';
import Badge from '@/components/UI/Badge.vue';
import Button from '@/components/UI/Button.vue';
import TasksWrapper from '@/components/tasks/wrapper.vue';

import IconBlizzard from '@/components/Icon/blizzard.vue';
import Drawer from '@/components/Drawer.vue';
import { useTurboModeStore } from '@/stores/turbo-mode';


const { user } = storeToRefs(useAuthStore());
const { isTurboModeActive } = storeToRefs(useTurboModeStore());
const { invoice } = storeToRefs(useInvoiceStore());
const { setInvoice } = useInvoiceStore();
const { isMiningStarted } = storeToRefs(useHashStore());
const { energy } = storeToRefs(useSocketDataStore());

const tasksStore = useTasksStore();

const { tasks } = storeToRefs(tasksStore);


const isInvoiceModal = ref(false);

const switcherChangeHandler = (value: boolean) => {
  if (!user.value?.info.powerMode) {
    isInvoiceModal.value = true;
    return;
  }

  isTurboModeActive.value = value;
};

const openInvoiceModal = async (value: boolean) => {
  await setInvoice('00000000-0000-0000-0000-000000000000');

  if (invoice.value?.link) {
    WebApp.openInvoice(invoice.value.link);
  }

  WebApp.onEvent('invoiceClosed', (event) => {
    if (event.status === 'paid') isTurboModeActive.value = value;
  });
};

onMounted(async () => {
  await tasksStore.fetchTasks();
});

const friendInvite = computed(() =>
  tasks.value?.find((task: ITask) =>
    task.type?.toUpperCase() === TaskTypeEnum.INVITE,
));

const inviteFriend = () => WebApp?.openTelegramLink('https://t.me/share/url?url=');
</script>

<template>
  <div class="UpgradePage">
    <BatteryInfo
      :user
      :energy
      :is-mining-started
    />

    <!--    <div class="UpgradePage__upgrades">-->
    <!--      <h3 class="SectionTitle">-->
    <!--        UPGRADES-->
    <!--      </h3>-->

    <!--      <div class="UpgradePage__upgrades__wrapper">-->
    <!--        <UpgradeCard />-->
    <!--      </div>-->
    <!--    </div>-->

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

    <div
      v-if="friendInvite"
      class="FixedButton--bottom"
    >
      <Button
        :theme="ButtonThemeEnum.PRIMARY"
        @click="inviteFriend"
      >
        Invite Friend

        <template #badge>
          <p>+ {{ friendInvite?.awardAmount }}</p>

          <IconBlizzard
            width="8"
            height="10"
          />
        </template>
      </Button>
    </div>

    <Drawer v-model:visible="isInvoiceModal">
      <template #title>
        Paid feature
      </template>

      <template #content>
        <div
          style="padding: 20px 16px 40px 16px"
        >
          <p>
            To access the power mode, you need to pay
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
  padding-bottom: 24dvh;

  &__upgrades {
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
}
</style>
