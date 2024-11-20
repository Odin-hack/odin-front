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


const { user } = storeToRefs(useAuthStore());
const { invoice } = storeToRefs(useInvoiceStore());
const { setInvoice } = useInvoiceStore();
const { isMiningStarted } = storeToRefs(useHashStore());
const { energy } = storeToRefs(useSocketDataStore());

const tasksStore = useTasksStore();

const { tasks } = storeToRefs(tasksStore);


const isSwitchActive = ref(user.value?.powerMode);

const changeSwitchActiveHandler = async (value: boolean) => {
  await setInvoice();

  if (invoice.value?.link) {
    WebApp.openInvoice(invoice.value.link);
  }

  WebApp.onEvent('invoiceClosed', (event) => {
    if (event.status === 'paid') isSwitchActive.value = value;
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
          :switch-active="isSwitchActive"
          @update:switch-active="changeSwitchActiveHandler"
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
