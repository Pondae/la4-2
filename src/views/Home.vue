<template>
  <h1>Total Passengers</h1>
  <div class="passengers">
    <PassengerCard v-for="passenger in passengers" :key="passenger._id" :passenger="passenger" />
  </div>
</template>

<script>
import PassengerCard from '@/components/PassengerCard.vue'
import PassengerService from '@/services/PassengerService.js'
import { watchEffect } from '@vue/runtime-core'
export default {
  name: 'Home',
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
  }
}
</script>
<style scoped>
.passengers {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
