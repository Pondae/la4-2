<template>
  <h1>Total Passengers</h1>
  <div class="passengers">
    <div v-if="GStore.flashMessageEdit">
      {{ GStore.flashMessageEdit }}
    </div>
    <br>
    <PassengerCard v-for="passenger in passengers" :key="passenger._id" :passenger="passenger" />
  </div>
</template>

<script>
import PassengerCard from '@/components/PassengerCard.vue'
import PassengerService from '@/services/PassengerService.js'
import { watchEffect } from '@vue/runtime-core'
export default {
  name: 'Home',
  inject: ['GStore'],
  components: {
    PassengerCard
  },
  data() {
    return {
      passengers: null,
    }
  },
  created() {
    watchEffect(() => {
    PassengerService.getPassengers(0,10)
    .then((response) => {
      this.passengers = response.data.data
    })
    .catch(error => {
      console.log(error)
    })
    })
  },
  beforeRouteEnter(routeTo, routeFrom, next){
    PassengerService.getPassengers(3, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.passengers = response.data.data
          comp.totalEvents = response.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    PassengerService.getPassengers(3, parseInt(routeTo.query.page) || 1)
    .then((response) => {
        this.passengers = response.data.data
        this.totalEvents = response.headers['x=total-count']
        next()
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
}
</script>
<style scoped>
.passengers {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
