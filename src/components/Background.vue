<template>
<div class="background">
    <div>
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
        <img src="@/assets/graphics/eva-cortado.jpg">
        <h2>{{ name }}</h2>
        <h3>{{ occupation }}</h3>

        
    </div>
</div>
</template>

<script>
import store from '@/store/index'
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'Background',
    computed: {
        ...mapState([
            'title',
            'text',
            'name',
            'occupation'
        ]),
        ...mapGetters({
            pathImage: 'getImage'
        }),
        products () {
            return store.state.products
        }
    }
    
};
</script>

<style></style>
