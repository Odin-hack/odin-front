import { defineStore, storeToRefs } from 'pinia';
import { ref, watch } from 'vue';
import { MiningStatus } from '@/enum';
import { useHashStore } from '@/stores/hash';

export const useUserEnergyStore = defineStore('userEnergy', () => {
    const energyLeft = ref<number>(0);
    const miningStatus = ref<MiningStatus>(MiningStatus.STOPPED);
    const maxEnergy = ref<number | null>(null);
    const recoveryRate = ref<number | null>(null);
    const consumptionRate = ref<number | null>(null);
    const serverEnergy = ref<number | null>(null);
    const serverTimestamp = ref<number | null>(null);

    const { stopMining } = useHashStore();
    const { isMiningStarted } = storeToRefs(useHashStore());

    watch(isMiningStarted, (newVal) => {
        miningStatus.value = newVal ? MiningStatus.MINING : MiningStatus.STOPPED;
    }, { immediate: true, deep: true });

    setInterval(() => {
        if (!maxEnergy.value || !recoveryRate.value || !consumptionRate.value || !energyLeft.value) return;

        if (energyLeft.value > 0 && miningStatus.value === MiningStatus.MINING) {
            energyLeft.value = Math.max(energyLeft.value - consumptionRate.value, 0);
        }
        if (energyLeft.value < maxEnergy.value && miningStatus.value === MiningStatus.STOPPED) {
            energyLeft.value = Math.min(energyLeft.value + recoveryRate.value, maxEnergy.value);
        }
        if (energyLeft.value === 0) {
            miningStatus.value = MiningStatus.STOPPED;
            stopMining();
        }
    }, 1000);

    setInterval(() => {
        if (consumptionRate.value && serverEnergy.value && serverTimestamp.value && miningStatus.value === MiningStatus.MINING) {
            const now = Date.now();
            const diff = now - serverTimestamp.value;

            const energyToRecover = (diff / 1000) * consumptionRate.value;
            energyLeft.value = Math.max(serverEnergy.value - energyToRecover, 0);
        }
    }, 10_000);

    const setServerEnergy = (val: { energy: number, timestamp: number }) => {
        serverEnergy.value = val.energy;
        serverTimestamp.value = val.timestamp;
    };

    const setMaxEnergy = (val: number) => {
        maxEnergy.value = val;
    };

    const setUpEnergy = (opts: {
        energy: number;
        maxEnergy: number;
        recoveryRate: number;
        consumptionRate: number;
    }) => {
        energyLeft.value = opts.energy;
        maxEnergy.value = opts.maxEnergy;
        recoveryRate.value = opts.recoveryRate;
        consumptionRate.value = opts.consumptionRate;
    };

    return {
        energyLeft,
        setUpEnergy,
        setServerEnergy,
        setMaxEnergy,
    };
});
