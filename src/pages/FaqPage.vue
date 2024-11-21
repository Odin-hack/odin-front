<script setup lang="ts">
const contents = [
  {
    title: 'Earn Tokens Through Mining',
    text: 'Simply tap “Start Mining” and wait for the process to begin.\n\nIf you\'re new, we recommend focusing on mining first and exploring the technical documentation later.',
  },
  {
    title: 'Your Goal is Simple',
    text: 'Your task is to find a valid hash for the current block during mining and earn rewards for it.\n' +
        '60% of the block reward goes to the miner who discovers the correct hash, while 40% is shared among other participants.\n\n' +
        'Note: The miner reward gradually decreases by 10% every 100,000 blocks until it reaches a fixed 10%.',
  },
  {
    title: 'Mining Mechanism',
    text: 'Imagine mining cryptocurrency directly from your phone. What would Satoshi think if he saw our project?!\n\n' +
        'Mining operates on the same principles as Bitcoin, using a similar algorithm.\n' +
        'However, our mechanism is accessible through Telegram MiniApps, allowing you to mine both on mobile devices and desktop computers.',
  },
  {
    title: 'Early Miner Rewards',
    text: 'The more people start mining, the harder it becomes to earn tokens, and vice versa.\n' +
        'Being an early adopter is always more beneficial: you have a greater chance of earning maximum rewards for solved blocks while the competition is still low.',
  },
  {
    title: 'Limited Mining',
    text: 'Once all tokens are mined, they will be distributed on-chain among the miners.\n' +
        'The total mining period lasts approximately 2 to 3 months, followed by an AirDrop and token listing on both DEX and CEX platforms.',
  },
  {
    title: 'Token Distribution',
    text: 'Our project features a unique mining mechanism that works seamlessly on mobile devices and desktops. This innovative approach targets users who appreciate the mining process itself.\n' +
        '\n' +
        'Mining is just the first step in our technological roadmap. We are committed to rewarding all users who actively mine blocks and contribute to the platform\'s development. Up to 20% of SIGMA’s revenue earned through Telegram Stars will be allocated to further development and marketing, while the rest will directly support the token, user rewards, and its listing. The crypto community will be the driving force in the new bull cycle!',
  },
  {
    title: 'Device Performance',
    text: 'Since your device performs real computations, it may heat up only in maximum Nitro mode.\n' +
        'For the rest of the time, you can mine worry-free without overheating concerns.',
  },
  {
    title: 'Limitations',
    text: 'All tokens mined using bots will not be confiscated but burned, increasing their value for honest users by the time of the AirDrop.',
  },
];
</script>

<template>
  <div class="FaqPage">
    <h1 class="FaqPage__header">
      How does it works?
    </h1>

    <div class="FaqPage__wrapper">
      <div
        v-for="(content, index) in contents"
        :key="index"
        class="FaqPage__wrapper__block"
      >
        <h3>{{ content.title }}</h3>

        <p>{{ content.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.FaqPage {
  padding: 16px;

  &__header {
    margin-bottom: 40px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 80dvh;
    overflow: scroll;
    padding-bottom: 40px;


    &__block {
      h3 {
        top: -2px;
        padding-bottom: 12px;
        background-color: var(--color-dark);
      }

      p {
        color: var(--color-grey-light);
        font-weight: 300;
      }
    }
  }
}
</style>
