<script lang="ts">
    import { page } from "./stores";
    import Circle from "./lib/Circle.svelte";
    import Swap from "./lib/Swap.svelte";

    const names = ["Hazel", "Aspen", "Biscuit"];
</script>

<main>
    {#if $page === "home"}
        <Circle center={Swap} data={{ items: names }} />
    {/if}
    <footer class="copyright">
        Copyright © 2024 Scribblie All Rights Reserved
    </footer>
</main>

<style>
    main {
        text-wrap: wrap;
        overflow: hidden;
    }

    :global(body) {
        background: linear-gradient(
            -45deg,
            #ff9aa2,
            #ffb7b2,
            #ffdac1,
            #e2f0cb,
            #b5ead7,
            #c7ceea
        );
        background-size: 400% 400%;
        animation: gradient 10s ease infinite;
        overflow: hidden;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .copyright {
        position: absolute;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
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
