<template>
  <section class="friends">
    <div class="block">
      <div class="header">
        <router-link class="title" to="/most-friends">Больше всего друзей за сутки ⭐️</router-link>
        <p class="counter">12.2М</p>
      </div>
      <div class="content">
        <ContentBlock 
            v-for="card of cards"
            :key="card.id"
            v-bind:card="card"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ContentBlock from "@/components/content-block.vue";
import data from "@/data/data.json";

export default {
  components: {
    ContentBlock,
  },
  data() {
    return {
      cards: data,
    };
  },
};
</script>

<style scoped>
    .friends{
        margin: 0 auto 20px;
    }
     .header{
        margin: 0 23px 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .title{
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        color: #292941;
        margin: 0;
        text-decoration: none;
    }
    .counter{
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-align: right;
        color: #292941;
        opacity: 0.5;
        margin: 0;
    }
    .content{
        max-width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        overflow: hidden;

    }
</style>