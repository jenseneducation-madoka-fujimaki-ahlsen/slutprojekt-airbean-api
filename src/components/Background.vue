<template>
<div class="background">
    <div>
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
        
    </div>

</div>
</template>

<script>
import store from '@/store/index'
import { mapState } from 'vuex'

export default {
    name: 'Background',
    computed: {
        ...mapState([
            'title',
            'text'
        ]),
        products () {
            return store.state.products
        }
    }
    
};
</script>

<style></style>
