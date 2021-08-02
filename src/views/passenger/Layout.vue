<template>
    <div v-if="GStore.passenger">
        <h1>{{ GStore.passenger.name }}</h1>
        <div id="nav">
            <router-link :to="{ name: 'PassengerDetails', params: { id } }">
                Details
            </router-link> |
            <router-link :to="{ name: 'PassengerAirlineDetails', params: { id } }">
                Airline Details
            </router-link> |
            <router-link :to="{ name: 'EditDetails', params: { id } }">
                Edit
            </router-link>
        </div>
        <router-view :passenger="GStore.passenger" />
    </div>
</template>

<script>
export default {
    inject: ['GStore']
}
</script>