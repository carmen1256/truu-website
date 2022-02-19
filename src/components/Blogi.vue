<template>
<div class="blog_comp">
    <a href="http://www.seiklejad.org/projektiblogi/">
    <img class="blogi1" alt="blogi1" src="../assets/c5.jpg">
    <h1>{{ name }}</h1>
    <p>{{ alltekst }}</p>
    </a>
</div>
</template>

<script>
export default {
    name: "Blogi",
    props: ['name', 'alltekst']
};

</script>

<style scoped>
    .blog_comp img {
        width: 320px;
        height: auto;
    }

    a {
        color: black;
        text-decoration: none;
    }

    a:hover {
        color: #ef9723;
    }

</style>