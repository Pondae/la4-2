<template>
    <b>ID: </b>
    <span>{{ passenger._id }}</span>
    <br>
    <b>Trips: </b>
    <span>{{ passenger.trips }}</span>
</template>

<script>
export default {
    props: ['passenger']
}
</script>