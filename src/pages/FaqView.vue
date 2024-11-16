<script setup lang="ts">
const contents = [
  {
    title: 'Title 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur cumque, dignissimos ducimus eligendi expedita neque perspiciatis repellat. Ab aspernatur atque excepturi ipsam libero natus nesciunt nihil quibusdam quidem sunt. Asperiores consequatur consequuntur deleniti doloremque esse expedita itaque, libero necessitatibus, nihil nulla repudiandae rerum sequi ut voluptates voluptatum. Amet, autem commodi consectetur fugit incidunt ipsa iste quod suscipit tempora unde? Eveniet iure laborum optio totam. Alias amet aspernatur ea exercitationem facere harum in, ipsa magnam placeat quaerat. Accusamus alias autem consequuntur debitis ea eius excepturi maxime, mollitia quibusdam, repellat saepe sapiente sint tempora ut, vel velit vitae voluptatibus. Excepturi, temporibus!',
  },

  {
    title: 'Title 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur cumque, dignissimos ducimus eligendi expedita neque perspiciatis repellat. Ab aspernatur atque excepturi ipsam libero natus nesciunt nihil quibusdam quidem sunt. Asperiores consequatur consequuntur deleniti doloremque esse expedita itaque, libero necessitatibus, nihil nulla repudiandae rerum sequi ut voluptates voluptatum. Amet, autem commodi consectetur fugit incidunt ipsa iste quod suscipit tempora unde? Eveniet iure laborum optio totam. Alias amet aspernatur ea exercitationem facere harum in, ipsa magnam placeat quaerat. Accusamus alias autem consequuntur debitis ea eius excepturi maxime, mollitia quibusdam, repellat saepe sapiente sint tempora ut, vel velit vitae voluptatibus. Excepturi, temporibus!',
  },

  {
    title: 'Title 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur cumque, dignissimos ducimus eligendi expedita neque perspiciatis repellat. Ab aspernatur atque excepturi ipsam libero natus nesciunt nihil quibusdam quidem sunt. Asperiores consequatur consequuntur deleniti doloremque esse expedita itaque, libero necessitatibus, nihil nulla repudiandae rerum sequi ut voluptates voluptatum. Amet, autem commodi consectetur fugit incidunt ipsa iste quod suscipit tempora unde? Eveniet iure laborum optio totam. Alias amet aspernatur ea exercitationem facere harum in, ipsa magnam placeat quaerat. Accusamus alias autem consequuntur debitis ea eius excepturi maxime, mollitia quibusdam, repellat saepe sapiente sint tempora ut, vel velit vitae voluptatibus. Excepturi, temporibus!',
  },

  {
    title: 'Title 4',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur cumque, dignissimos ducimus eligendi expedita neque perspiciatis repellat. Ab aspernatur atque excepturi ipsam libero natus nesciunt nihil quibusdam quidem sunt. Asperiores consequatur consequuntur deleniti doloremque esse expedita itaque, libero necessitatibus, nihil nulla repudiandae rerum sequi ut voluptates voluptatum. Amet, autem commodi consectetur fugit incidunt ipsa iste quod suscipit tempora unde? Eveniet iure laborum optio totam. Alias amet aspernatur ea exercitationem facere harum in, ipsa magnam placeat quaerat. Accusamus alias autem consequuntur debitis ea eius excepturi maxime, mollitia quibusdam, repellat saepe sapiente sint tempora ut, vel velit vitae voluptatibus. Excepturi, temporibus!',
  },

  {
    title: 'Title 5',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur cumque, dignissimos ducimus eligendi expedita neque perspiciatis repellat. Ab aspernatur atque excepturi ipsam libero natus nesciunt nihil quibusdam quidem sunt. Asperiores consequatur consequuntur deleniti doloremque esse expedita itaque, libero necessitatibus, nihil nulla repudiandae rerum sequi ut voluptates voluptatum. Amet, autem commodi consectetur fugit incidunt ipsa iste quod suscipit tempora unde? Eveniet iure laborum optio totam. Alias amet aspernatur ea exercitationem facere harum in, ipsa magnam placeat quaerat. Accusamus alias autem consequuntur debitis ea eius excepturi maxime, mollitia quibusdam, repellat saepe sapiente sint tempora ut, vel velit vitae voluptatibus. Excepturi, temporibus!',
  },

  {
    title: 'Title 6',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur cumque, dignissimos ducimus eligendi expedita neque perspiciatis repellat. Ab aspernatur atque excepturi ipsam libero natus nesciunt nihil quibusdam quidem sunt. Asperiores consequatur consequuntur deleniti doloremque esse expedita itaque, libero necessitatibus, nihil nulla repudiandae rerum sequi ut voluptates voluptatum. Amet, autem commodi consectetur fugit incidunt ipsa iste quod suscipit tempora unde? Eveniet iure laborum optio totam. Alias amet aspernatur ea exercitationem facere harum in, ipsa magnam placeat quaerat. Accusamus alias autem consequuntur debitis ea eius excepturi maxime, mollitia quibusdam, repellat saepe sapiente sint tempora ut, vel velit vitae voluptatibus. Excepturi, temporibus!',
  },

  {
    title: 'Title 7',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur cumque, dignissimos ducimus eligendi expedita neque perspiciatis repellat. Ab aspernatur atque excepturi ipsam libero natus nesciunt nihil quibusdam quidem sunt. Asperiores consequatur consequuntur deleniti doloremque esse expedita itaque, libero necessitatibus, nihil nulla repudiandae rerum sequi ut voluptates voluptatum. Amet, autem commodi consectetur fugit incidunt ipsa iste quod suscipit tempora unde? Eveniet iure laborum optio totam. Alias amet aspernatur ea exercitationem facere harum in, ipsa magnam placeat quaerat. Accusamus alias autem consequuntur debitis ea eius excepturi maxime, mollitia quibusdam, repellat saepe sapiente sint tempora ut, vel velit vitae voluptatibus. Excepturi, temporibus!',
  },

  {
    title: 'Title 8',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur cumque, dignissimos ducimus eligendi expedita neque perspiciatis repellat. Ab aspernatur atque excepturi ipsam libero natus nesciunt nihil quibusdam quidem sunt. Asperiores consequatur consequuntur deleniti doloremque esse expedita itaque, libero necessitatibus, nihil nulla repudiandae rerum sequi ut voluptates voluptatum. Amet, autem commodi consectetur fugit incidunt ipsa iste quod suscipit tempora unde? Eveniet iure laborum optio totam. Alias amet aspernatur ea exercitationem facere harum in, ipsa magnam placeat quaerat. Accusamus alias autem consequuntur debitis ea eius excepturi maxime, mollitia quibusdam, repellat saepe sapiente sint tempora ut, vel velit vitae voluptatibus. Excepturi, temporibus!',
  },
];
</script>

<template>
  <div class="FaqView">
    <h1 class="FaqView__header">
      How does it works?
    </h1>

    <div class="FaqView__wrapper">
      <div
        v-for="(content, index) in contents"
        :key="index"
        class="FaqView__wrapper__block"
      >
        <h3>{{ content.title }}</h3>

        <p>{{ content.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.FaqView {
  padding: 16px;

  &__header {
    padding-bottom: 12px;
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
        position: sticky;
        top: 0;
        padding-bottom: 12px;
        background-color: var(--color-dark);
      }

      p {
        color: var(--color-grey-light);
      }
    }
  }
}
</style>
