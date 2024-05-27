<!-- CircleButtons.svelte -->
<script lang="ts">
    import { page } from "../stores";
    export let center;
    export let data;
    let numButtons = 6; // Number of buttons
    let buttonAngle = 360 / numButtons; // Angle between each button
    let outerRadius = 0; // Radius of the outer circle
    let innerRadius = 0; // Radius of the inner circle
    let spacingRadius = (260 + 110) / 4.4; // Radius for positioning buttons around the center
    let buttonRadius = 20; // Radius of each button
    let initialAngle = 25; // Initial angle for the first button
    let rotationSpeed = 0.1; // Speed of rotation
    let rotationActive = false; // Rotation state
    let factor = 0; // Factor for text size
    let scale = 0; // Scale for images
    let selected: number = -1; // Selected button
    let pages = [
        "traditional",
        "photography",
        "designs",
        "digital",
        "crafts",
        "yarn",
    ];
    let titles = [
        "Traditional Art",
        "Photography",
        "Designs",
        "Digital Art",
        "Crafts",
        "Yarn Art",
    ]; // Titles for each button
    let descriptions = [
        "Traditional art pieces I have made, such as paintings and drawings.",
        "Photographs I have taken, mostly of nature and animals.",
        "Designs I have created, such as notebooks and sketches.",
        "Digital art pieces I have made, such as digital paintings and drawings.",
        "Crafts I have made, such as decorated jars.",
        "Crochet pieces I have made, such as amigurumi.",
    ];

    // add 0.01 to initialAngle every 0.01 seconds
    setInterval(() => {
        initialAngle += rotationSpeed;
    }, 10);

    // Ease in and out the rotation speed
    function speedUpRotation() {
        if (rotationActive) return;
        rotationActive = true;

        let increment = 0.1; // Increment value for each step
        let interval = 20; // Interval for each step in milliseconds
        let duration = 1500; // Duration of the speed-up in milliseconds
        let steps = duration / interval; // Number of steps
        let currentStep = 0;

        let speedUpInterval = setInterval(() => {
            if (currentStep < steps / 2) {
                // Ease in
                rotationSpeed += increment;
            } else if (currentStep < steps) {
                // Ease out
                rotationSpeed -= increment;
            } else {
                clearInterval(speedUpInterval);
                rotationSpeed = 0.1;
                rotationActive = false;
            }
            currentStep++;
        }, interval);
    }

    function transitionOut() {
        if (selected === -1) return speedUpRotation();

        scale = 0;

        setTimeout(() => {
            outerRadius = 0;
            innerRadius = 0;
            factor = 0;

            setTimeout(() => {
                let outerCircle = document.querySelector(".outer-circle");
                if (outerCircle != null) {
                    outerCircle.remove();
                }

                setTimeout(() => {
                    page.set(pages[selected]);
                }, 500);
            }, 1850);
        }, 1000);
    }

    function transitionIn() {
        outerRadius = 260;
        innerRadius = 110;
        factor = 1;

        setTimeout(() => {
            scale = 1;
        }, 1850);
    }

    setTimeout(() => {
        transitionIn();
    }, 1);

    function select(index: number) {
        if (selected === index) {
            selected = -1;
        } else {
            selected = index;
        }

        document.querySelectorAll(".button img").forEach((button, i) => {
            if (i === selected) {
                button.style.filter =
                    "drop-shadow(1px 1px 0 #77DD77) drop-shadow(-1px 1px 0 #77DD77) drop-shadow(1px -1px 0 #77DD77) drop-shadow(-1px -1px 0 #77DD77) drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.235))";

                // Add rainbow to center div
                let centerDiv = document.querySelector(".center-button");
                if (centerDiv != null) {
                    centerDiv.classList.add("rainbow");
                }
            } else {
                button.style.filter =
                    "drop-shadow(1px 1px 0 white) drop-shadow(-1px 1px 0 white) drop-shadow(1px -1px 0 white) drop-shadow(-1px -1px 0 white) drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.235))";
            }
        });
    }
</script>

<div class="selected-info" style="--scale: {scale};">
    <div class="title">
        {selected === -1 ? "" : titles[selected]}
    </div>
    <div class="description">
        {selected === -1 ? "" : descriptions[selected]}
    </div>
</div>

<button
    class="center-button"
    style="background-color: transparent;  border: none;"
    on:click={transitionOut}
    tabindex="0"
>
    <svelte:component this={center} {...data} {factor} />
</button>

<div
    class="outer-circle"
    style="--scale: {scale}; --button-radius: {buttonRadius}; --outer-radius: {outerRadius}; --inner-radius: {innerRadius}; --initial-angle: {initialAngle -
        25}; --spacing-radius: {spacingRadius};"
>
    <div class="buttons">
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-missing-attribute -->
        {#each Array(numButtons) as _, index}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <a
                on:click={() => select(index)}
                class="button"
                style="transform: rotate({buttonAngle * index +
                    initialAngle}deg) translateX(calc(
            0.176 * (var(--spacing-radius) * 1vw + var(--spacing-radius) * 1vh) / 2
        ))"
            >
                <span
                    style="display: inline-block; transform: rotate({buttonAngle *
                        -index -
                        initialAngle}deg)"
                    ><img
                        src="images/button-{index + 1}.png"
                        alt="button-{index + 1}"
                    /></span
                >
            </a>
        {/each}
    </div>
    <img
        src="images/flower.png"
        alt="Flower Six Petals Black Outline - Flower With 6 Petals@clipartmax.com"
        class="flower"
    />
</div>

<style lang="scss">
    @function calculate-size($factor, $amount, $m: 1, $vwm: 0.8, $vhm: 1.4) {
        @return calc(
            $factor * ($amount * (1vw * $vwm) + $amount * (1vh * $vhm)) / 2 * $m
        );
    }

    .selected-info {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        color: white;
        font-size: calc((2em + 2.5vh + 2.5vw) / 3);
        font-family: "Inter", system-ui, Avenir, Helvetica, Arial, sans-serif;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        opacity: var(--scale);
        transition: opacity 2s ease-in-out;
    }

    .title {
        font-weight: bold;
        margin-top: auto;
        text-wrap: nowrap;
    }

    .flower {
        position: absolute;
        width: calculate-size(0.176, var(--outer-radius));
        height: calculate-size(0.2, var(--outer-radius));

        z-index: -1;
        filter: drop-shadow(1px 1px 0 #ddd) drop-shadow(-1px 1px 0 #ddd)
            drop-shadow(1px -1px 0 #ddd) drop-shadow(-1px -1px 0 #ddd)
            drop-shadow(0px 0px 7.5px rgba(0, 0, 0, 0.3));
        transform: rotate(calc(var(--initial-angle) * 1deg));
        transition:
            width 2s ease-in-out,
            height 2s ease-in-out;
        // animation: grow 2s ease-in-out forwards;
    }

    .outer-circle {
        position: absolute;
        width: calculate-size(0.156, var(--outer-radius));
        height: calculate-size(0.156, var(--outer-radius));

        /* Center the circle */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        border: 3px solid #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 0;
        box-shadow: 0px 0px 50px rgba(255, 255, 255, 0.5);
        transition:
            width 2s ease-in-out,
            height 2s ease-in-out;
    }

    .center-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        text-align: center;
        outline: none;
    }

    .center-button:focus {
        outline: none;
    }

    .center-button:focus-visible {
        outline: auto;
    }

    .center-button:hover {
        cursor: pointer;
    }

    .buttons {
        position: absolute;
        top: 50%;
        left: 0%;
        width: 100%;
        height: 100%;
        transform: translate(-5%, -2.5%);
    }

    .button {
        position: absolute;
        width: calculate-size(0.156, var(--button-radius));
        height: calculate-size(0.156, var(--button-radius));
        line-height: calculate-size(0.156, var(--button-radius));

        border-radius: 50%;
        text-align: center;
        text-decoration: none;
    }

    .button img {
        position: flex;
        width: calculate-size(0.156, var(--button-radius), 1.4);
        height: calculate-size(0.156, var(--button-radius), 1.4);

        filter: drop-shadow(1px 1px 0 white) drop-shadow(-1px 1px 0 white)
            drop-shadow(1px -1px 0 white) drop-shadow(-1px -1px 0 white)
            drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.235));
        transform: scale(var(--scale)) rotate(0deg);
        transition: transform 1s ease-in-out;
        // animation: grow 4s ease-in-out forwards;
    }

    // @keyframes grow {
    //     0% {
    //         transform: scale(0) rotate(calc(var(--initial-angle) * 1deg));
    //     }
    //     50% {
    //         transform: scale(0) rotate(calc(var(--initial-angle) * 1deg));
    //     }
    //     100% {
    //         transform: scale(var(--scale)) rotate(calc(var(--initial-angle) * 1deg));
    //     }
    // }

    .button img:hover {
        transform: scale(calc(var(--scale) * 1.1)) rotate(360deg);
    }
</style>
