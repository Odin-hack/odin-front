<template>
    <v-dialog
      v-model="modal"
      max-width="800px"
    >
      <v-card>
        <v-card-title>
          {{ isEdit ? 'Редагувати кампанію' : 'Створити кампанію' }}
      </v-card-title>
  
      <v-card-text>
          <v-stepper v-model="currentStep">
            <v-stepper-header>
              <v-stepper-item value="1" title="Кампанія">
                <template v-slot:title>
                  <span class="text-caption">Кампанія</span>
                </template>
              </v-stepper-item>
              <v-stepper-item value="2" title="Група оголошень">
                <template v-slot:title>
                  <span class="text-caption">Група оголошень</span>
                </template>
              </v-stepper-item>
              <v-stepper-item value="3" title="Оголошення">
                <template v-slot:title>
                  <span class="text-caption">Оголошення</span>
                </template>
              </v-stepper-item>
            </v-stepper-header>

            <v-stepper-window>
              <!-- Step 1: Campaign Details -->
              <v-stepper-window-item value="1">
                <v-form
                  ref="campaignForm"
                  v-model="isCampaignValid"
                >
                  <v-text-field
                    v-model="formData.name"
                    label="Назва кампанії"
                    :rules="[(v: string) => !!v || 'Назва обовʼязкова']"
                    required
                  />
      
                  <v-text-field
                    v-model.number="formData.budget_amount_micros"
                    label="Денний бюджет"
                    type="number"
                    prefix="₴"
                    :rules="[
                      (v: number) => !!v || 'Бюджет обовʼязковий',
                      (v: number) => v > 0 || 'Бюджет має бути більше 0'
                    ]"
                    required
                  />
      
                  <v-row>
                    <v-col cols="6">
                      <v-text-field
                        v-model="formData.start_date"
                        label="Дата початку"
                        type="date"
                        :rules="[(v: string) => !!v || 'Дата початку обовʼязкова']"
                        required
                      />
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="formData.end_date"
                        label="Дата завершення"
                        type="date"
                        :min="formData.start_date"
                      />
                    </v-col>
                  </v-row>
      
                  <v-select
                    v-model="formData.advertising_channel_type"
                    label="Тип каналу"
                    :items="[
                      { title: 'Пошук', value: 'search' },
                      { title: 'Подорожі', value: 'travel' },
                      { title: 'Відео', value: 'video' },
                      { title: 'Шопінг', value: 'shopping' },
                      { title: 'Локальні послуги', value: 'local_services' }
                    ]"
                    item-title="title"
                    item-value="value"
                    :rules="[(v: string) => !!v || 'Тип каналу обовʼязковий']"
                    required
                  />
                </v-form>
              </v-stepper-window-item>

              <!-- Step 2: Ad Group -->
              <v-stepper-window-item value="2">
                <v-form
                  ref="adGroupForm"
                  v-model="isAdGroupValid"
                >
                  <v-text-field
                    v-model="formData.ad_group_name"
                    label="Назва групи оголошень"
                    :rules="[(v) => !!v || 'Назва обовʼязкова']"
                    required
                  />
                  <v-select
                    v-model="formData.ad_group_status"
                    label="Статус"
                    :items="[
                      { title: 'Активний', value: 'enabled' },
                      { title: 'Пауза', value: 'paused' },
                      { title: 'Вимкнений', value: 'removed' }
                    ]"
                    item-title="title"
                    item-value="value"
                    :rules="[(v) => !!v || 'Статус обовʼязковий']"
                    required
                  />
                  <v-text-field
                    v-model.number="formData.cpc_bid_micros"
                    class="mb-2"
                    label="Ставка CPC"
                    type="number"
                    prefix="₴"
                    :rules="[
                      (v) => !!v || 'Ставка обовʼязкова',
                      (v) => v > 0 || 'Ставка має бути більше 0'
                    ]"
                    required
                    hint="Ціна за натиск"
                    persistent-hint
                  />
                  <v-select
                    v-model="formData.ad_group_type"
                    label="Тип групи оголошень"
                    :items="['search_standard', 'display_standard', 'display_smart']"
                    :rules="[(v) => !!v || 'Тип групи обовʼязковий']"
                    required
                  />
                </v-form>
              </v-stepper-window-item>

              <!-- Step 3: Ads -->
              <v-stepper-window-item value="3">
                <v-form
                  ref="adsForm"
                  v-model="isAdsValid"
                >
                  <div v-for="(ad, index) in formData.ads" :key="index" class="mb-4">
                    <v-card class="pa-4">
                      <v-card-title class="text-subtitle-1">
                        Оголошення {{ index + 1 }}
                        <v-btn
                          icon="mdi-delete"
                          variant="text"
                          size="small"
                          @click="removeAd(index)"
                          class="ml-auto"
                        />
                      </v-card-title>
                      <v-text-field
                        v-model="ad.name"
                        label="Назва оголошення"
                        :rules="[(v) => !!v || 'Назва обовʼязкова']"
                        required
                        @blur="fetchRecommendedCountriesForAdName"
                      />
                      <v-select
                        v-model="ad.status"
                        label="Статус"
                        :items="[
                        { title: 'Активний', value: 'enabled' },
                        { title: 'Пауза', value: 'paused' },
                        { title: 'Вимкнений', value: 'removed' }
                        ]"
                        item-title="title"
                        item-value="value"
                        :rules="[(v) => !!v || 'Статус обовʼязковий']"
                        required
                      />
                      <v-select
                        v-model="ad.ad_type"
                        label="Тип оголошення"
                        :items="['text', 'image', 'video']"
                        :rules="[(v) => !!v || 'Тип оголошення обовʼязковий']"
                        required
                      />
                      <v-text-field
                        v-model="ad.final_url"
                        label="Фінальний URL"
                        :rules="[(v) => !!v || 'URL обовʼязковий']"
                        required
                      />
                      <v-text-field
                        v-model="ad.headline1"
                        label="Заголовок 1"
                        :rules="[(v) => !!v || 'Заголовок обовʼязковий']"
                        required
                      />
                      <v-text-field
                        v-model="ad.headline2"
                        label="Заголовок 2"
                        :rules="[(v) => !!v || 'Заголовок обовʼязковий']"
                        required
                      />
                      <v-textarea
                        v-model="ad.description"
                        label="Опис"
                        :rules="[(v) => !!v || 'Опис обовʼязковий']"
                        required
                        rows="2"
                      />
                        <v-select
                        v-model="ad.countries"
                        label="Країни"
                        :items="countryOptions"
                        multiple
                        chips
                        clearable
                        item-title="title"
                        item-value="value"
                        :rules="[(v) => v && v.length > 0 || 'Потрібно вибрати хоча б одну країну']"
                        required
                        class="mb-2"
                        />
                        <div v-if="recommendedCountries.length" class="text-caption mb-1">
                            <span>Рекомендовані країни:</span>
                            <span v-if="Object.keys(recommendedStats).length">
                            <span v-for="(count, country, idx) in recommendedStats" :key="country">
                                {{ country }}<span v-if="count"> ({{ count }})</span><span v-if="idx < Object.keys(recommendedStats).length - 1">, </span>
                            </span>
                            </span>
                            <span v-else>
                            {{ recommendedCountries.join(', ') }}
                            </span>
                        </div>
                        <v-btn
                            v-if="recommendedCountries.length"
                            color="primary"
                            variant="text"
                            size="small"
                            class="mb-2"
                            @click="addRecommendedCountries(ad)"
                        >
                            Додати рекомендовані країни
                        </v-btn>
                      <v-file-input
                        v-model="ad.image"
                        label="Зображення"
                        accept="image/*"
                        :rules="[(v) => !v || v.size < 5000000 || 'Зображення має бути менше 5 МБ']"
                        prepend-icon="mdi-camera"
                        show-size
                        counter
                      />
                    </v-card>
                 </div>
                  <v-btn
                    color="primary"
                    variant="outlined"
                    @click="addAd"
                    class="mt-2"
                  >
                    Додати ще одне оголошення
                  </v-btn>
                </v-form>
              </v-stepper-window-item>
            </v-stepper-window>
          </v-stepper>
        </v-card-text>
  
        <v-card-actions class="action-stack">
          <v-spacer />
          <v-btn
            color="grey"
            variant="text"
            @click="close"
          >
            Скасувати
          </v-btn>
          <v-btn
            v-if="currentStep !== '1'"
            color="primary"
            variant="text"
            @click="goToPreviousStep"
          >
            Назад
          </v-btn>
          <template v-if="currentStep === '1'">
            <v-btn
              color="primary"
              @click="handleSubmit(true)"
              :disabled="!isCampaignValid"
            >
              Пропустити і створити кампанію
            </v-btn>
            <v-btn
              color="primary"
              @click="goToNextStep"
              :disabled="!isCampaignValid"
            >
              Далі
            </v-btn>
          </template>
          <v-btn
            v-else-if="currentStep !== '3'"
            color="primary"
            @click="goToNextStep"
          >
            Далі
          </v-btn>
          <v-btn
            v-else
            color="primary"
            :loading="loading"
            :disabled="!isValid"
            @click="handleSubmit(false)"
          >
            {{ isEdit ? 'Зберегти' : 'Створити' }}
              </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
  
  <script setup lang="ts">
  import { ref, computed, watch } from 'vue';
  import type { Campaign, CampaignCreateData } from '@/types/googleAds';
  import { useCampaignStore } from '@/stores/campaignStore';
  import { useConfig } from '@/composables/useConfig'

  const campaignStore = useCampaignStore();
  const config = useConfig()
  const recommendedCountries = ref<string[]>([]);
  const recommendedStats = ref<Record<string, number>>({})
  
  interface Ad {
    name: string;
    status: 'enabled' | 'paused' | 'removed';
    ad_type: 'text' | 'image' | 'video';
    final_url: string;
    headline1: string;
    headline2: string;
    description: string;
    image: File | null;
    video_url: string | null;
    countries: string[];
  }
  
  const props = defineProps<{
    modelValue: boolean;
    campaign?: Campaign;
    loading?: boolean;
  }>();
  
  const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
    (e: 'submit', data: CampaignCreateData): void;
  }>();
  
  const campaignForm = ref();
  const adGroupForm = ref();
  const adsForm = ref();
  const currentStep = ref('1');
  
  const isCampaignValid = ref(false);
  const isAdGroupValid = ref(false);
  const isAdsValid = ref(false);
  
  const countryOptions = [
    { title: 'Україна', value: 'Ukraine' },
    { title: 'Польща', value: 'Poland' },
    { title: 'Німеччина', value: 'Germany' },
    { title: 'Франція', value: 'France' },
    { title: 'США', value: 'USA' },
    { title: 'Канада', value: 'Canada' },
    { title: 'Велика Британія', value: 'United Kingdom' },
    { title: 'Іспанія', value: 'Spain' },
    { title: 'Італія', value: 'Italy' },
    { title: 'Нідерланди', value: 'Netherlands' },
    { title: 'Швеція', value: 'Sweden' },
    { title: 'Норвегія', value: 'Norway' },
    { title: 'Фінляндія', value: 'Finland' },
    { title: 'Данія', value: 'Denmark' },
    { title: 'Чехія', value: 'Czech Republic' },
    { title: 'Австрія', value: 'Austria' },
    { title: 'Швейцарія', value: 'Switzerland' },
    { title: 'Бельгія', value: 'Belgium' },
    { title: 'Португалія', value: 'Portugal' },
    { title: 'Румунія', value: 'Romania' },
    { title: 'Угорщина', value: 'Hungary' },
    { title: 'Словаччина', value: 'Slovakia' },
    { title: 'Болгарія', value: 'Bulgaria' },
    { title: 'Греція', value: 'Greece' },
    { title: 'Туреччина', value: 'Turkey' },
    { title: 'Естонія', value: 'Estonia' },
    { title: 'Латвія', value: 'Latvia' },
    { title: 'Литва', value: 'Lithuania' },
    { title: 'Ірландія', value: 'Ireland' },
    { title: 'Хорватія', value: 'Croatia' },
    { title: 'Сербія', value: 'Serbia' },
    { title: 'Словенія', value: 'Slovenia' },
    { title: 'Люксембург', value: 'Luxembourg' },
    { title: 'Ісландія', value: 'Iceland' },
    { title: 'Мальта', value: 'Malta' },
    { title: 'Кіпр', value: 'Cyprus' },
    { title: 'Молдова', value: 'Moldova' },
    { title: 'Грузія', value: 'Georgia' },
    { title: 'Вірменія', value: 'Armenia' },
    { title: 'Азербайджан', value: 'Azerbaijan' },
    { title: 'Казахстан', value: 'Kazakhstan' },
    { title: 'Узбекистан', value: 'Uzbekistan' },
    { title: 'Білорусь', value: 'Belarus' },
    { title: 'Росія', value: 'Russia' },
    { title: 'Китай', value: 'China' },
    { title: 'Японія', value: 'Japan' },
    { title: 'Південна Корея', value: 'South Korea' },
    { title: 'Індія', value: 'India' },
    { title: 'Австралія', value: 'Australia' },
    { title: 'Нова Зеландія', value: 'New Zealand' },
    { title: 'Бразилія', value: 'Brazil' },
    { title: 'Аргентина', value: 'Argentina' },
    { title: 'Мексика', value: 'Mexico' },
    { title: 'Чилі', value: 'Chile' },
    { title: 'Колумбія', value: 'Colombia' },
    { title: 'ПАР', value: 'South Africa' },
    { title: 'Єгипет', value: 'Egypt' },
    { title: 'Ізраїль', value: 'Israel' },
    { title: 'Саудівська Аравія', value: 'Saudi Arabia' },
    { title: 'ОАЕ', value: 'UAE' },
    { title: 'Катар', value: 'Qatar' },
    { title: 'Сінгапур', value: 'Singapore' },
    { title: 'Таїланд', value: 'Thailand' },
    { title: 'Вʼєтнам', value: 'Vietnam' },
    { title: 'Малайзія', value: 'Malaysia' },
    { title: 'Індонезія', value: 'Indonesia' },
    { title: 'Філіппіни', value: 'Philippines' },
    { title: 'Пакистан', value: 'Pakistan' },
    { title: 'Бангладеш', value: 'Bangladesh' },
    { title: 'Нігерія', value: 'Nigeria' },
    { title: 'Кенія', value: 'Kenya' },
    { title: 'Марокко', value: 'Morocco' },
    { title: 'Алжир', value: 'Algeria' },
    { title: 'Туніс', value: 'Tunisia' },
    { title: 'Лівія', value: 'Libya' },
    { title: 'Судан', value: 'Sudan' },
    { title: 'Ефіопія', value: 'Ethiopia' },
    { title: 'Гана', value: 'Ghana' },
    { title: 'Кот-дʼІвуар', value: 'Ivory Coast' },
    { title: 'Камерун', value: 'Cameroon' },
    { title: 'Сенегал', value: 'Senegal' },
    { title: 'Ангола', value: 'Angola' },
    { title: 'Мозамбік', value: 'Mozambique' },
    { title: 'Танзанія', value: 'Tanzania' },
    { title: 'Уганда', value: 'Uganda' },
    { title: 'Замбія', value: 'Zambia' },
    { title: 'Зімбабве', value: 'Zimbabwe' },
    { title: 'Ботсвана', value: 'Botswana' },
    { title: 'Намібія', value: 'Namibia' },
    { title: 'Мадагаскар', value: 'Madagascar' },
    { title: 'Маврикій', value: 'Mauritius' },
    { title: 'Сейшели', value: 'Seychelles' },
    { title: 'Малаві', value: 'Malawi' },
    { title: 'Руанда', value: 'Rwanda' },
    { title: 'Бурунді', value: 'Burundi' },
    { title: 'Сомалі', value: 'Somalia' },
    { title: 'Конго', value: 'Congo' },
    { title: 'Габон', value: 'Gabon' },
    { title: 'Екваторіальна Гвінея', value: 'Equatorial Guinea' },
    { title: 'Гвінея', value: 'Guinea' },
    { title: 'Сьєрра-Леоне', value: 'Sierra Leone' },
    { title: 'Ліберія', value: 'Liberia' },
    { title: 'Того', value: 'Togo' },
    { title: 'Бенін', value: 'Benin' },
    { title: 'Буркіна-Фасо', value: 'Burkina Faso' },
    { title: 'Нігер', value: 'Niger' },
    { title: 'Чад', value: 'Chad' },
    { title: 'ЦАР', value: 'Central African Republic' },
    { title: 'Південний Судан', value: 'South Sudan' },
    { title: 'Еритрея', value: 'Eritrea' },
    { title: 'Джибуті', value: 'Djibouti' },
    { title: 'Коморські Острови', value: 'Comoros' },
    { title: 'Сан-Томе і Принсіпі', value: 'Sao Tome and Principe' },
    { title: 'Кабо-Верде', value: 'Cape Verde' },
    { title: 'Гамбія', value: 'Gambia' },
    { title: 'Гвінея-Бісау', value: 'Guinea-Bissau' },
    { title: 'Лесото', value: 'Lesotho' },
    { title: 'Свазіленд', value: 'Swaziland' },
    { title: 'Західна Сахара', value: 'Western Sahara' }
  ]
  
  const formData = ref({
    name: '',
    status: 'enabled' as 'enabled' | 'paused' | 'removed',
    advertising_channel_type: 'search',
    budget_amount_micros: 0,
    start_date: '',
    end_date: '',
    bidding_strategy_type: 'maximize_conversions',
    ad_group_name: '',
    ad_group_status: 'enabled' as 'enabled' | 'paused' | 'removed',
    cpc_bid_micros: 0,
    ad_group_type: 'search_standard',
    ads: [] as Ad[],
    countries: [] as string[]
  });
  
  const isEdit = computed(() => !!props.campaign);
  const modal = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
  });
  

  const close = () => {
    modal.value = false
    emit('update:modelValue', false)
    resetForm()
  }
  
  const canProceed = computed(() => {
    switch (currentStep.value) {
      case '1':
        return isCampaignValid.value;
      default:
        return true;
    }
  });
  
  const isValid = computed(() => {
    return isCampaignValid.value;
  });
  
  const addAd = () => {
    formData.value.ads.push({
      name: '',
      status: 'enabled',
      ad_type: 'text',
      final_url: '',
      headline1: '',
      headline2: '',
      description: '',
      image: null,
      video_url: null,
      countries: []
    });
  };
  
  const removeAd = (index: number) => {
    formData.value.ads.splice(index, 1);
  };
  
  const resetForm = () => {
    formData.value = {
      name: '',
      status: 'enabled' as 'enabled' | 'paused' | 'removed',
      advertising_channel_type: 'search',
      budget_amount_micros: 0,
      start_date: '',
      end_date: '',
      bidding_strategy_type: 'maximize_conversions',
      ad_group_name: '',
      ad_group_status: 'enabled' as 'enabled' | 'paused' | 'removed',
      cpc_bid_micros: 0,
      ad_group_type: 'search_standard',
      ads: [],
      countries: []
    };
    currentStep.value = '1';
    isCampaignValid.value = false;
    isAdGroupValid.value = false;
    isAdsValid.value = false;
  };
  
  // Оновлення форми при редагуванні
  watch(() => props.campaign, (newCampaign) => {
    if (newCampaign) {
      formData.value = {
        name: newCampaign.name,
        status: newCampaign.status.toLowerCase() as 'enabled' | 'paused' | 'removed',
        advertising_channel_type: newCampaign.advertising_channel_type.toLowerCase(),
        budget_amount_micros: newCampaign.budget_amount_micros,
        start_date: newCampaign.start_date,
        end_date: newCampaign.end_date || '',
        bidding_strategy_type: newCampaign.bidding_strategy_type.toLowerCase(),
        ad_group_name: '',
        ad_group_status: newCampaign.status.toLowerCase() as 'enabled' | 'paused' | 'removed',
        cpc_bid_micros: 0,
        ad_group_type: 'search_standard',
        ads: [],
        countries: []
      };
    } else {
      resetForm();
    }
  }, { immediate: true });
  
  // Скидання форми при закритті
  watch(() => props.modelValue, (newValue) => {
    if (!newValue) {
      resetForm();
    }
  });
  
  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          // Remove the data URL prefix (e.g., "data:image/jpeg;base64,")
          const base64 = reader.result.split(',')[1];
          resolve(base64);
        } else {
          reject(new Error('Failed to convert file to base64'));
        }
      };
      reader.onerror = error => reject(error);
    });
  };
  
  const handleSubmit = async (skip: boolean = false) => {
    const { valid } = await campaignForm.value.validate();
    if (valid) {
      try {
        const adsWithBase64Images = await Promise.all(
          formData.value.ads.map(async (ad) => {
            const imageBase64 = ad.image ? await convertFileToBase64(ad.image) : null;
            return {
              ...ad,
              image: imageBase64
            };
          })
        );

        const campaignData = skip ? {
            name: formData.value.name,
          status: formData.value.status.toLowerCase() as 'enabled' | 'paused' | 'removed',
          advertising_channel_type: formData.value.advertising_channel_type,
          budget_amount: Number(formData.value.budget_amount_micros),
          start_date: formData.value.start_date,
          end_date: formData.value.end_date || undefined,
          bidding_strategy_type: formData.value.bidding_strategy_type,
        } : {
          name: formData.value.name,
          status: formData.value.status.toLowerCase() as 'enabled' | 'paused' | 'removed',
          advertising_channel_type: formData.value.advertising_channel_type,
          budget_amount: Number(formData.value.budget_amount_micros),
          start_date: formData.value.start_date,
          end_date: formData.value.end_date || undefined,
          bidding_strategy_type: formData.value.bidding_strategy_type,
          ad_groups_attributes: [{
            name: formData.value.ad_group_name,
            status: formData.value.ad_group_status.toLowerCase() as 'enabled' | 'paused' | 'removed',
            cpc_bid_micros: Number(formData.value.cpc_bid_micros),
            ad_group_type: formData.value.ad_group_type,
            ads_attributes: adsWithBase64Images.map(ad => ({
              name: ad.name,
              status: ad.status.toLowerCase() as 'enabled' | 'paused' | 'removed',
              ad_type: ad.ad_type,
              final_url: ad.final_url,
              headline1: ad.headline1,
              headline2: ad.headline2,
              description: ad.description,
              image_data: `data:image/jpeg;base64, ${ad.image}`,
              countries: ad.countries
            })),
          }]
        };

        await campaignStore.createCampaign(campaignData as unknown as Partial<Campaign>);
        resetForm();
        emit('update:modelValue', false);
        await campaignStore.getAllCampaigns()
      } catch (error) {
        console.error('Failed to create campaign:', error);
      }
    }
  };
  
  const goToNextStep = () => {
    switch (currentStep.value) {
      case '1':
        currentStep.value = '2';
        break;
      case '2':
        currentStep.value = '3';
        break;
    }
  };
  
  const goToPreviousStep = () => {
    switch (currentStep.value) {
      case '3':
        currentStep.value = '2';
        break;
      case '2':
        currentStep.value = '1';
        break;
    }
  };
  
  const skipToEnd = () => {
    currentStep.value = '3';
  };

  async function fetchRecommendedCountriesForAdName(value: string) {
    if (!value) return
    try {
      const resp = await fetch(`${config.trendsUrl}/trends?keyword=${encodeURIComponent(value)}`)
      const data = await resp.json()
      if (data && typeof data === 'object' && !Array.isArray(data)) {
        const sorted = Object.entries(data as Record<string, number>)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
        recommendedCountries.value = sorted.map(([country]) => country)
        recommendedStats.value = Object.fromEntries(sorted)
      } else if (Array.isArray((data as any).countries)) {
        recommendedCountries.value = (data as any).countries
        recommendedStats.value = {}
      } else {
        recommendedCountries.value = []
        recommendedStats.value = {}
      }
    } catch (e) {
      recommendedCountries.value = []
      recommendedStats.value = {}
    }
  }

  function addRecommendedCountries(ad: Ad) {
    ad.countries = Array.from(new Set([...ad.countries, ...recommendedCountries.value]))
  }
  </script>

<style scoped>
.v-stepper {
  box-shadow: none;
}

.v-stepper-item {
  min-width: 100px;
}

.action-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
@media (max-width: 600px) {
  .action-stack {
    flex-direction: column;
    align-items: stretch;
  }
  .action-stack .v-btn {
    width: 100%;
  }
}
</style> 