<template>
    <button @click="edit">Edit</button>
</template>

<script>
export default {
    props: ['passenger'],
    inject: ['GStore'],
    methods: {
        edit(){
            this.GStore.flashMessageEdit =
            'the update is in progress.'
            setTimeout(() => {
            // After 5 seconds remove it
            this.GStore.flashMessageEdit = ''
            }, 5000)

            this.$router.push({
            name: 'Home',
            params: { id: this.passenger.id }
        })
        }
    }
}
</script>