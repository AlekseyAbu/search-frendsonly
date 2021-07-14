 <template>
  <body>
    <SearchMobile />
    <MostFriends />
    <PopularPaid />
    <MostProfitable />
    <MostFriendsDay />
    <MostFriendsWeek />
    <!-- <Navigation /> -->
  </body>
</template>

<script>
import SearchMobile from '@/components/search-mobile.vue'
import MostFriends from '@/components/most-friends.vue'
import PopularPaid from '@/components/PopularPaid.vue'
import MostProfitable from '@/components/MostProfitable.vue'
import MostFriendsDay from '@/components/MostFriendsDay.vue'
import MostFriendsWeek from '@/components/MostFriendsWeek.vue'
import Navigation from '@/components/navigation.vue'

export default {
  name: 'Home',
  components: {
    SearchMobile,
    MostFriends,
    PopularPaid,
    MostProfitable,
    MostFriendsDay,
    MostFriendsWeek,
    Navigation,
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