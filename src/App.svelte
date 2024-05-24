<script lang="ts">
    import Circle from "./lib/Circle.svelte";
    import Swap from "./lib/Swap.svelte";

    const names = ["Hazel", "Aspen", "Biscuit"];
</script>

<main>
    <div class="bg-image"></div>
    <Circle center={Swap} data={{ items: names }} />
</main>

<style>
    .bg-image {
        background-image: url("https://img.freepik.com/free-vector/gradient-background-vector-spring-colors_53876-117271.jpg?w=1800&t=st=1716568366~exp=1716568966~hmac=22dcda3851a9ec51dbf475e787a214f6d9a9381fd5e9d3a4292b1b54372c6146");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(8px);
        height: 100%;
        width: 100%;
        position: absolute; /* Change position to absolute */
        top: 0; /* Position from top of container */
        left: 0; /* Position from left of container */
        z-index: -1;
    }
</style>
