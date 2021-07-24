<template>
    <div v-if="passenger">
        <h1>{{ passenger.name }} </h1>
    </div>
</template>
<script>
import PassengerService from "@/services/PassengerService.js";
export default {
    props: ['id'],
    data() {
        return {
            passenger: null,
        }
    },
    created() {
        PassengerService.getPassenger(this.id)
        .then(response => {
            this.passenger = response.data
        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>