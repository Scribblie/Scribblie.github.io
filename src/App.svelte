<script lang="ts">
    import Circle from "./lib/Circle.svelte";
    import Swap from "./lib/Swap.svelte";

    const names = ["Hazel", "Aspen", "Biscuit"];
</script>

<main>
    <div class="bg-image"></div>
    <Circle center={Swap} data={{ items: names }} />
    <footer class="copyright">
        Copyright © 2024 Scribblie All Rights Reserved
    </footer>
</main>

<style>
    :global(html),
    :global(body) {
        height: 100vh;
        margin: 0;
        overflow: hidden;
    }

    main {
        position: relative;
    }

    .bg-image {
        background-image: url("https://img.freepik.com/free-vector/gradient-background-vector-spring-colors_53876-117271.jpg?w=1800&t=st=1716568366~exp=1716568966~hmac=22dcda3851a9ec51dbf475e787a214f6d9a9381fd5e9d3a4292b1b54372c6146");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }

    .copyright {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        padding: 1rem;
        color: white;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

        background: linear-gradient(
            to right,
            #6666ff,
            #0099ff,
            #00ff00,
            #ff3399,
            #6666ff
        );
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: rainbow_animation 6s ease-in-out infinite;
        background-size: 400% 100%;
    }

    @keyframes rainbow_animation {
        0%,
        100% {
            background-position: 0 0;
        }

        50% {
            background-position: 100% 0;
        }
    }
</style>
