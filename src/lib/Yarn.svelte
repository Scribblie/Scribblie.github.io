<script lang="ts">
    import { page } from "../stores";
    let out = false;
    let artworks = ["whale_shork"];
    let titles = ["Whale Shork"]; // Titles for each button
    let descriptions = ["A derpy whale shork phone pouch."];

    function transitionOut() {}

    function transitionIn() {}

    setTimeout(() => {
        transitionIn();
    }, 1);
</script>

<div class="grid">
    {#each artworks as artwork, i}
        <div class="container" style="--i: {i}">
            <img
                src={`./images/yarn/${artwork}.png`}
                alt="{titles[i]}: {descriptions[i]}"
            />
            <div class="overlay">
                <div class="title">{titles[i]}</div>
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    @function calculate-size($factor, $amount, $m: 1, $vwm: 0.8, $vhm: 1.4) {
        @return calc(
            $factor * ($amount * (1vw * $vwm) + $amount * (1vh * $vhm)) / 2 * $m
        );
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 1em;
        width: 100%;
        height: 100%;
        padding: 1em;
    }

    .grid .container {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 1em;
        overflow: hidden; /* Ensure the overlay and title stay within the container */
        transition: transform 2s ease-in-out;
        max-height: 400px;
        max-width: 300px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }

    .grid .container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 1em;
    }

    .grid .overlay {
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 10%; /* Adjust the height as needed */
        background: rgba(0, 0, 0, 0.5); /* Slightly transparent black */
        pointer-events: none; /* Ensure it doesn't block interaction */
    }

    .grid .title {
        text-align: center;
        color: white;
        font-size: calc((3em + 1vh + 1vw) / 3);
        padding: 0.2em;
    }
</style>
