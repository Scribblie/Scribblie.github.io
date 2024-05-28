<div class="centered">
    <iframe title="Staggering Beauty" src="http://www.staggeringbeauty.com/"
    ></iframe>
</div>

<style lang="scss">
    @function calculate-size($factor, $amount, $m: 1, $vwm: 0.8, $vhm: 1.4) {
        @return calc(
            $factor * ($amount * (1vw * $vwm) + $amount * (1vh * $vhm)) / 2 * $m
        );
    }

    .centered {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: linear-gradient(
            to right,
            #ffdac1,
            #e2f0cb,
            #b5ead7,
            #c7ceea
        );
        background-size: 400% 400%;
        animation: gradient 10s ease infinite;
        overflow: hidden;
    }

    iframe {
        display: block;
        margin: 0 auto;
        border-radius: 1em;
        width: 100%;
        max-width: calculate-size(0.176, 250);
        height: 100%;
        max-height: calculate-size(0.2, 250);

        box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
    }
</style>
