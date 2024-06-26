<script lang="ts">
    import { page } from "../stores";
    let out = false;
    let imagesLoaded = 0;
    let loading = 0;
    let loaded: number | undefined;
    let artworks = [
        "whale_shork_pouch",
        "succulent_coasters",
        "ferret_noodle",
        "dino_rawr",
    ];
    let titles = [
        "Whale Shork Pouch",
        "Succulent Coasters",
        "Ferret Noodle",
        "Dino Raaawwwrrrrrr",
    ];
    let descriptions = [
        "A derpy whale shork phone pouch.",
        "A set of succulent coasters in a flower pot.",
        "A ferret that's a fluffy noodle.",
        "A squishy dino that goes rawr.",
    ];
    let dates = [
        { year: 2024, month: 5, day: 26 },
        { year: 2024, month: 5, day: 14 },
        { year: 2024, month: 4, day: 23 },
        { year: 2024, month: 3, day: 29 },
    ];

    function checkAllImagesLoaded(index: number) {
        const container = document.querySelector(
            `.container:nth-child(${imagesLoaded + 1})`,
        );

        if (loaded === undefined) {
            loaded = index - 1;
        }

        if (loading > 0 || loaded !== index - 1) {
            setTimeout(() => checkAllImagesLoaded(index), 100);
            return;
        }

        if (container) {
            container.style.setProperty("--size", 1);

            loading++;
            setTimeout(() => {
                loading--;
                loaded = index;
            }, 500);
            setTimeout(() => {
                container.style.setProperty("--size-2", 1);
            }, 2000);
        }

        imagesLoaded++;
    }

    setTimeout(() => {
        for (let i = 0; i < artworks.length; i++) {
            checkAllImagesLoaded(i);
        }
    }, 100);
</script>

<div class="grid" style="--size: 0; --size-2: 0">
    {#each artworks as artwork, i}
        <div class="container" style="--i: {i}">
            <div class="image-container">
                <img
                    alt="{titles[i]}: {descriptions[i]}"
                    src={`./images/yarn/thumbnail/${artwork}.jpg`}
                />
                <div class="date-container">
                    {dates[i].day}/{dates[i].month}/{dates[i].year}
                </div>
            </div>
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
        height: fit-content; /* Adjust the height as needed */
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

    .grid .container .image-container {
        position: relative;
    }

    .grid .container .date-container {
        position: absolute;
        top: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.8);
        border-bottom-left-radius: 10px;
        padding: 5px 10px;
        font-size: calc((var(--size-2)) * (2em + 0.25vh + 0.25vw) / 3);
        color: black;
        font-family: "Courier New", Courier, monospace;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        transition: font-size 3s ease-in-out;
    }
</style>
