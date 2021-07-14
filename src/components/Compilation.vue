<template>
  <section class="compilation">
    <Header />
    <div class="compilation__about">
      <h2 class="compilation__title">{{block.title}}</h2>
      <p class="compilation__text">{{block.text}}</p>
    </div>
    <div class="compilation__content">
      <swiper>
        <swiper-slide v-for="card of cards" :key="card.id">
          <ContentBlock  v-bind:card="card"/>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import ContentBlock from "@/components/ContentBlockPages.vue";
import data from "@/data/data.json";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'

export default {
  props: ['block'],
  components: {
    Header,
    ContentBlock,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      cards: data,
    };
  },
};
</script>

<style scoped>
section {
  margin: 0;
  padding: 0;
}
.compilation {
  margin: 0;
  padding: 0;
  width: 100%;
  margin: 0 auto;
}
.compilation__about {
  margin: 0 auto;
  padding: 62px 23px 30px;
  max-width: 554px;
  width: calc(100% - 46px);
}
.compilation__title {
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #292941;
  margin: 0 0 11px;
}

.compilation__text {
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 135%;
  color: #292941;
  opacity: 0.5;
  margin: 0;
}
.compilation__content {
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}
.swiper-slide{
      display: flex;
    }
</style>