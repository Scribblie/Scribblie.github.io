<!-- CircleButtons.svelte -->
<script>
    export let center;
    export let data;
    let numButtons = 6; // Number of buttons
    let buttonAngle = 360 / numButtons; // Angle between each button
    let outerRadius = 260; // Radius of the outer circle
    let innerRadius = 110; // Radius of the inner circle
    let buttonRadius = 20; // Radius of each button
    let initialAngle = 25; // Initial angle for the first button

    // add 0.01 to initialAngle every 0.01 seconds
    setInterval(() => {
        initialAngle += 0.1;
    }, 10);

    // Function to calculate the spacing radius for positioning buttons around the center
    function calculateSpacingRadius() {
        return (outerRadius + innerRadius) / 4.4;
    }
</script>

<div
    class="outer-circle"
    style="--button-radius: {buttonRadius}; --outer-radius: {outerRadius}; --inner-radius: {innerRadius}; --initial-angle: {initialAngle -
        25}; --spacing-radius: {calculateSpacingRadius()}"
>
    <div class="inner-circle">
        <div class="center-div">
            <svelte:component this={center} {...data} />
        </div>
    </div>
    <div class="buttons">
        {#each Array(numButtons) as _, index}
            <a
                href="#"
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
    @function calculate-size($factor, $amount, $m: 1.0, $vwm: 0.80, $vhm: 1.40) {
        @return calc(
            $factor * ($amount * (1vw * $vwm) + $amount * (1vh * $vhm)) / 2 * $m
        );
    }

    .flower {
        position: absolute;
        width: calculate-size(0.176, var(--outer-radius));
        height: calculate-size(0.2, var(--outer-radius));

        z-index: -1;
        filter: drop-shadow(0px 0px 7.5px rgba(0, 0, 0, 0.183));
        transform: rotate(calc(var(--initial-angle) * 1deg));
    }

    .outer-circle {
        position: relative;
        width: calculate-size(0.156, var(--outer-radius));
        height: calculate-size(0.156, var(--outer-radius));

        border: 3px solid #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 0;
        box-shadow: 0px 0px 50px rgba(255, 255, 255, 0.5);
    }

    .inner-circle {
        position: absolute;
        width: calculate-size(0.156, var(--inner-radius));
        height: calculate-size(0.156, var(--inner-radius));

        border: 3px transparent #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
    }

    .center-div {
        text-align: center;
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
        transform: scale(1) rotate(0deg);
        transition: transform 1s ease-in-out;
    }

    .button img:hover {
        transform: scale(1.1) rotate(360deg);
    }
</style>
