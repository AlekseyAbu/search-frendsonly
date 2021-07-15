 <template>
  <body>
    <SearchMobile />
    <BlockSubject v-for="block in visibleList" :key="block.id" v-bind:block="block"/>
  </body>
</template>

<script>
import SearchMobile from '../components/SearchMobile.vue'
import Navigation from '../components/Navigation.vue'
import CardData from '../data/blocks.json'
import BlockSubject from '../components/BlockSubject.vue'

export default {
  name: 'Home',
  components: {
    SearchMobile,
    Navigation,
    BlockSubject
  },
  data(){
    return{
      CardData: CardData,
    }
  },
  computed: {
    visibleList: function(){
      const arr =  this.CardData.map(item => {
        if(item.counter >= 1000000){
          item.counter = ((item.counter/1000000).toFixed(1) + 'M')
        }
        if(item.counter <= 1000000){
          item.counter = ((item.counter/100000).toFixed(0) + 'K')
        }
        return item
      })
      return arr
    }
  }
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
    
  }
  :active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
  }
</style>