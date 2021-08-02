<template>
    <button @click="edit">Edit</button>
</template>

<script>
export default {
    props: ['passenger'],
    inject: ['GStore'],
    methods: {
        edit(){
            this.$router.push({
            name: 'Home',
            params: { id: this.passenger.id }
        })
        }
    }
}
</script>