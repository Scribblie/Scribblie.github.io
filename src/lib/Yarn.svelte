<script lang="ts">
    import { page } from "../stores";
    let size = 0;
    let out = false;
    let imagesLoaded = 0;
    let artworks = [
        "whale_shork_pouch",
        "succulent_coasters",
        "dino_rawr",
        "ferret_noodle",
    ];
    let titles = [
        "Whale Shork Pouch",
        "Succulent Coasters",
        "Dino Raaawwwrrrrrr",
        "Ferret Noodle",
    ];
    let descriptions = [
        "A derpy whale shork phone pouch.",
        "A set of succulent coasters in a flower pot.",
        "A squishy dino that goes rawr.",
        "A ferret that's a fluffy noodle.",
    ];

    function transitionOut() {}

    function transitionIn() {
        size = 1;
    }

    function checkAllImagesLoaded() {
        imagesLoaded++;
        if (imagesLoaded === artworks.length) {
            transitionIn();
        }
    }

    setTimeout(() => {
        // Transition in only when all images have loaded
        for (let i = 0; i < artworks.length; i++) {
            const image = new Image();
            image.onload = checkAllImagesLoaded;
            image.src = `./images/yarn/${artworks[i]}.png`;
        }
    }, 100);
</script>

<div class="grid" style="--size: {size}">
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
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1em;
        width: 100%;
        height: 100%;
        padding: 1em;
        justify-content: center;
        align-content: center;
        place-items: center;
    }

    .grid .container {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: calc(var(--size) * 100%);
        height: calc(var(--size) * 100%);
        background: rgba(255, 255, 255, 0.5);
        border-radius: 1em;
        overflow: hidden; /* Ensure the overlay and title stay within the container */
        transition: transform 2s ease-in-out;
        max-height: 400px;
        max-width: 300px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        border: 3px solid white;

        transition:
            width 2s ease-in-out,
            height 2s ease-in-out;
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
        font-size: calc((var(--size)) * (3em + 1vh + 1vw) / 3);
        padding: 0.2em;
        transition: font-size 3s ease-in-out;
    }
</style>
