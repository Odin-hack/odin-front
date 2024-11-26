import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useApi } from '@/composables/useApi';
import type { IInvoice } from '@/types/invoice.interface';

export const useInvoiceStore = defineStore('invoiceStore', () => {
  const invoice = ref<IInvoice | null>(null);

  const setInvoice = async (itemId: string) => {
    const { data, error } = await useApi<IInvoice>('POST', '/v1/api/invoice', {
      body: {
        itemId,
      },
    });

    if (error) return;

    invoice.value = data;
  };

  return {
    invoice,
    setInvoice,
  };
});
