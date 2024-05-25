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
    let rotationSpeed = 0.1; // Speed of rotation
    let rotationActive = false; // Rotation state

    // add 0.01 to initialAngle every 0.01 seconds
    setInterval(() => {
        initialAngle += rotationSpeed;
    }, 10);

    // Function to calculate the spacing radius for positioning buttons around the center
    function calculateSpacingRadius() {
        return (outerRadius + innerRadius) / 4.4;
    }

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
</script>

<button
    class="center-div"
    style="background-color: transparent; outline: none; border: none;"
    on:click={speedUpRotation}
>
    <svelte:component this={center} {...data} />
</button>

<div
    class="outer-circle"
    style="--button-radius: {buttonRadius}; --outer-radius: {outerRadius}; --inner-radius: {innerRadius}; --initial-angle: {initialAngle -
        25}; --spacing-radius: {calculateSpacingRadius()}"
>
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
    @function calculate-size($factor, $amount, $m: 1, $vwm: 0.8, $vhm: 1.4) {
        @return calc(
            $factor * ($amount * (1vw * $vwm) + $amount * (1vh * $vhm)) / 2 * $m
        );
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

    .center-div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        text-align: center;
    }

    .center-div:hover {
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
        transform: scale(1) rotate(0deg);
        transition: transform 1s ease-in-out;
    }

    .button img:hover {
        transform: scale(1.1) rotate(360deg);
    }
</style>
