<template>
  <section class="search">
    <input class="search__input" placeholder="Найти аккаунт" v-model="value" type="text" @input="searchAuthors()" @click="activeFieldSearch()"/>
    <div class="search__recent">
        <p class="recent">Недавнее</p>
        <Authors />
        <Authors />
        <Authors />
        <Authors />
    </div>
    <div class="search__result">
        <p class="recent">Аккаунты</p>
        <Authors />
        <Authors />
        <Authors />
        <Authors />
        <p class="recent__end">Вы добрались до конца</p>
    </div>
  </section>
</template>

<script>
import Authors from '../components/Authors.vue'

export default {
  components: {
    Authors,
  },
  data(){
        return{
            value: null
        }
    },
  methods: {
      activeFieldSearch(){
          const recent = this.$el.querySelector('.search__recent')
          recent.classList.toggle('search__result-active')
      },
      searchAuthors(){
          const recent = this.$el.querySelector('.search__recent')
          const result = this.$el.querySelector('.search__result')
          console.log(this.value.length > 0)
          if(this.value.length > 0){
            recent.classList.remove('search__result-active')
            result.classList.add('search__result-active')
          } else{
            recent.classList.remove('search__result-active')
            result.classList.toggle('search__result-active') 
          }
      }
  }
};
</script>

<style scoped>
    .search{
        margin: 15px 0 20px;
        padding: 0 23px;
        position: relative;
    }
    .search__input{
        display: block;
        width: 100%;
        padding: 16px 0 16px 24px;
        border: 1.5px solid rgba(0, 0, 0, 0.05);
        box-sizing: border-box;
        border-radius: 13px;
    }
    .search__recent{
        display: none;
        /* position: absolute;
        left: 0;
        top: 50px; */
        width: 100vw;
        height: 100vh;
        padding: 0 23px;
        background: #fff;
        /* transition: visibility 0.4s, opacity 0.4s linear;
        visibility: hidden;
        opacity: 0;
        z-index: 10;
        pointer-events: none; */

    }
    .search__result{
        display: none;
        width: 100vw;
        height: 100vh;
        padding: 0 23px;
        background: #fff;
    }
    .search__result-active{
        display: flex;
        flex-direction: column;
        /* visibility: visible;
        opacity: 1;
        pointer-events: all; */
    }
    .recent{
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;
        color: #292941;
        opacity: 0.5;
        margin: 14px auto 20px 0;
    }
    .recent__end{
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 130%;
        text-align: center;
        color: #8A8CA9;
        margin: 30px auto 130px;
    }
</style>