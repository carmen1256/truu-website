<template>
<div class="blog_comp">
    <a href="https://uttraineeshipblog.com/rasmus-in-toulouse-france/">
    <h1>{{ name }}</h1>
    <p>{{ alltekst }}</p>
    </a>
</div>
</template>

<script>
export default {
    name: "Blogi",
    props: ['name', 'alltekst'],
};

</script>

<style scoped>

    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        color:#66fcf1;
    }

    p {
        width: 350px;
        font-size: 15px;
    }

    h1 {
        font-size: 25px;
    }

</style>