<template>
    <a :href="link">
    <img :src="pilt">
    <div class="blog_comp">
        <h1>{{ name }}</h1>
        <p>{{ alltekst }}</p>
    </div>
    </a>
</template>

<script>
export default {
    name: "Blogi",
    props: ['name', 'alltekst', 'link', 'pilt'],
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

img {
    width: 350px;
    height: 220px;
    object-fit: cover;
}

</style>