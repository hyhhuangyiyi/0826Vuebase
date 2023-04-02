<template>
    <div>
        <h2>i love you </h2>
        <button @click="count++">love了{{count}}次</button>
    </div>
</template>

<script>
export default {
    name: 'mybutton',

    data() {
        return {
            count:0
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>