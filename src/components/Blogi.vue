<template>
<div class="blog_comp">
    <h1>{{ name }}</h1>
    <p>{{ alltekst }}</p>
</div>
</template>

<script>
export default {
    name: "Blogi",
    props: ['name', 'alltekst'],
};

</script>

<style scoped>

    p {
        width: 350px;
        font-size: 15px;
    }

    h1 {
        font-size: 25px;
    }

</style>