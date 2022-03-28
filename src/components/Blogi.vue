<template>
<div class="blog_comp">
    <a href="https://uttraineeshipblog.com/rasmus-in-toulouse-france/">
    <img class="blogi1" alt="blogi1" src= "../assets/toulouse.jpg">
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
    .blog_comp img {
        width: 350px;
        height: auto;
        margin: 20px;
    }

    a {
        color: black;
        text-decoration: none;
    }

    a:hover {
        color: #ef9723;
    }

    p {
        width: 350px;
        font-size: 15px;
    }

    h1 {
        font-size: 25px;
    }

</style>