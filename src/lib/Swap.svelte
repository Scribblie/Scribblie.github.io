<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    export let items: string[] = [];
    export let factor: number = 1;
    let currentIndex: number = 0;
    let interval: ReturnType<typeof setInterval> | undefined;

    function incrementIndex() {
        currentIndex = (currentIndex + 1) % items.length;
    }

    onMount(() => {
        interval = setInterval(incrementIndex, 1000);
    });

    onDestroy(() => {
        if (interval) clearInterval(interval);
    });
</script>

<div style="--factor: {factor}">
    {#if items.length > 0}
        <div>
            {items[currentIndex]}
        </div>
    {/if}
</div>

<style>
    div {
        color: #ffffff;
        font-size: calc(var(--factor) * (6vh + 6vw) / 2);
        text-align: center;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        transition: font-size 2s ease-in-out;
        /* animation: grow 2.5s ease-in-out forwards; */
    }

    /* @keyframes grow {
        0% {
            transform: scale(0);
        }
        25% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    } */
</style>
