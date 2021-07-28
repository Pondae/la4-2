<template>
    <div v-if="passenger">
        <span>
        <img :src="passenger.airline.logo" />
        <img v-for="airline in passenger.airline"
            :key="airline.id"
            :src="airline.logo"
        />
        </span>
        <br>
        <br>
        <b>Head quaters: </b>
        <span>{{ passenger.airline.head_quaters }}</span>
        <span v-for="airline in passenger.airline" :key="airline.id">
            {{ airline.head_quaters }}
        </span>
        <br>
        <br>
        <b>Name: </b>
        <span>{{ passenger.airline.name }}</span>
        <span v-for="airline in passenger.airline" :key="airline.id">
            {{ airline.name }}
        </span>
        <br>
        <b>Country: </b>
        <span>{{ passenger.airline.slogan }}</span>
        <span v-for="airline in passenger.airline" :key="airline.id">
            {{ airline.slogan }}
        </span>
        <br>
        <b>website: </b>
        <span>{{ passenger.airline.website }}</span>
        <span v-for="airline in passenger.airline" :key="airline.id">
            {{ airline.website }}
        </span>
        <br>
        <b>Established: </b>
        <span>{{ passenger.airline.established }}</span>
        <span v-for="airline in passenger.airline" :key="airline.id">
            {{ airline.established }}
        </span>
    </div>
</template>

<script>
export default {
    props: ['passenger']
}
</script>