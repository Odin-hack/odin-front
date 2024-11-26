import { defineStore, storeToRefs } from 'pinia';
import { ref, watch } from 'vue';
import { MiningStatus } from '@/enum';
import socket from '@/api/socket';
import { useHashStore } from '@/stores/hash';
import { useSocketDataStore } from '@/stores/socket-data';

export const useUserEnergyStore = defineStore('userEnergy', () => {
    const userId = ref<string>('');
    const energyLeft = ref<number>(0);
    const miningStatus = ref<MiningStatus>(MiningStatus.STOPPED);
    const maxEnergy = ref<number>(0);
    const recoveryRate = ref<number | null>(null);
    const consumptionRate = ref<number | null>(null);
    const serverEnergy = ref<number | null>(null);
    const serverTimestamp = ref<number | null>(null);
    const shouldReconnect = ref<boolean>(false);

    const { isSocketReconnect } = storeToRefs(useSocketDataStore());
    const { energy } = storeToRefs(useSocketDataStore());

    watch(energy, (val) => {
        if (val.energy) {
            serverEnergy.value = val.energy;
            serverTimestamp.value = Date.now();
        }
    });

    watch(isSocketReconnect, (val) => {
        if (miningStatus.value === MiningStatus.MINING && val) {
            stopMining();
            shouldReconnect.value = true;
        }
        if (miningStatus.value === MiningStatus.STOPPED && !val && shouldReconnect.value) {
            startMining();
        }
    }, { deep: true });

    const lock = ref<boolean>(false);
    setInterval(() => {
        if (!maxEnergy.value || !recoveryRate.value || !consumptionRate.value || lock.value) {
            return;
        }

        if (energyLeft.value > 0 && miningStatus.value === MiningStatus.MINING) {
            energyLeft.value = Math.max(energyLeft.value - consumptionRate.value, 0);
        }
        if (energyLeft.value < maxEnergy.value && miningStatus.value === MiningStatus.STOPPED) {
            energyLeft.value = Math.min(energyLeft.value + recoveryRate.value, maxEnergy.value);
        }
        if (energyLeft.value === 0) {
            stopMining();
        }
    }, 1000);

    setInterval(() => {
        if (consumptionRate.value && serverEnergy.value && serverTimestamp.value && miningStatus.value === MiningStatus.MINING) {
            lock.value = true;
            const now = Date.now();
            const diff = now - serverTimestamp.value;

            const energyToRecover = (diff / 1000) * consumptionRate.value;
            energyLeft.value = Math.max(serverEnergy.value - energyToRecover, 0);
            lock.value = false;
        }
    }, 10_000);

    const setMaxEnergy = (val: number) => {
        maxEnergy.value = val;
    };
    const addMaxEnergy = (val: number) => {
        maxEnergy.value += val;
    };

    const setUpEnergy = (opts: {
        userId: string;
        energy: number;
        maxEnergy: number;
        recoveryRate: number;
        consumptionRate: number;
    }) => {
        userId.value = opts.userId;
        energyLeft.value = opts.energy;
        maxEnergy.value = opts.maxEnergy;
        recoveryRate.value = opts.recoveryRate;
        consumptionRate.value = opts.consumptionRate;
    };

    const startMining = () => {
        socket.emit('mining.start');
        miningStatus.value = MiningStatus.MINING;
        useHashStore().startMining({ minerId: userId.value });
    };

    const stopMining = () => {
        socket.emit('mining.stop');
        miningStatus.value = MiningStatus.STOPPED;
        useHashStore().stopMining();
    };

    return {
        energyLeft,
        miningStatus,
        addMaxEnergy,
        setUpEnergy,
        setMaxEnergy,
        startMining,
        stopMining,
    };
});
