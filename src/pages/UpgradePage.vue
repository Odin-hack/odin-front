<script setup lang="ts">
import WebApp from '@twa-dev/sdk';

import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';

import { ButtonThemeEnum } from '@/types/enums/button.enum';

import BatteryInfo from '@/components/BatteryInfo.vue';
import Badge from '@/components/UI/Badge.vue';
import Button from '@/components/UI/Button.vue';
import UpgradeCard from '@/components/UpgradeCard.vue';

import IconBlizzard from '@/components/Icon/blizzard.vue';
import { ref } from 'vue';
import { useInvoiceStore } from '@/stores/invoice';


const { user } = storeToRefs(useAuthStore());
const { invoice } = storeToRefs(useInvoiceStore());
const { setInvoice } = useInvoiceStore();

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
</script>

<template>
  <div class="UpgradePage">
    <BatteryInfo
      :user
    />

    <div class="UpgradePage__upgrades">
      <h3 class="SectionTitle">
        UPGRADES
      </h3>

      <div class="UpgradePage__upgrades__wrapper">
        <UpgradeCard />
      </div>
    </div>

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

    <div class="FixedButton--bottom">
      <Button
        :theme="ButtonThemeEnum.PRIMARY"
      >
        Invite Friend

        <template #badge>
          <p>+ 100</p>

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
