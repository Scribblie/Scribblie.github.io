<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { writable, type Writable } from "svelte/store";

    let currentIndex: Writable<number> = writable(0);
    let interval: number | undefined;

    export let items: string[] = [];

    function incrementIndex() {
        currentIndex.update((n) => (n + 1) % items.length);
    }

    onMount(() => {
        interval = setInterval(incrementIndex, 1000);
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

{#if items.length > 0}
    <div>
        {items[$currentIndex]}
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
