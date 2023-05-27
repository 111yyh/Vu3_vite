<script>
import MyButton from './components/MyButton.vue'
    export default {
        data() {
            return {
                msg:'vue'
            }
        },
        components: {
            MyButton
        }
    }
</script>

<template>
    <h1>{{ msg }}</h1>
    <MyButton/>
</template>