<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    export let items: string[] = [];
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

{#if items.length > 0}
    <div>
        {items[currentIndex]}
    </div>
{:else}
    <div>No items provided</div>
{/if}

<style>
    div {
        font-size: 5em;
        text-align: center;
        margin-top: 20px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
</style>
