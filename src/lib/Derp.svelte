<div class="container">
    <div class="hitbox">
        <div class="center-content">
            <div class="cat">
                <span class="eyes left"></span>
                <span class="eyes right"></span>
                <span class="mouth"></span>
            </div>

            <div class="moon">
                <div class="sphere"></div>
            </div>

            <div class="cloud-container">
                <div class="cloud"></div>
                <div class="cloud"></div>
                <div class="cloud"></div>
                <div class="cloud"></div>
            </div>
        </div>
    </div>
</div>

<style>
    div {
        display: block;
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .hitbox {
        height: 400px;
        width: 600px;
        margin: auto;
        font-family: "Clicker Script", cursive;
    }

    .cloud {
        background: #ffffff;
        width: 90px;
        height: 42px;
        animation: clouds 40s infinite;
        -webkit-animation: clouds 40s infinite;
        margin-left: 0;
    }

    .cloud:before {
        border-radius: 50%;
        box-shadow:
            20px -20px 0 0 #ffffff,
            90px 0 0 0 #ffffff,
            60px -27px 0 8px #ffffff;
        content: "";
        position: absolute;
        width: 48px;
        height: 48px;
        left: -22px;
        bottom: 0;
        background: #ffffff;
    }

    .cloud:nth-child(1) {
        top: auto;
        bottom: 120px;
        opacity: 0.85;
    }
    .cloud:nth-child(2) {
        right: auto;
        left: 320px;
        opacity: 0.5;
    }
    .cloud:nth-child(3) {
        bottom: auto;
        top: 120px;
        right: auto;
        left: 80px;
        opacity: 0.75;
    }
    .cloud:nth-child(4) {
        bottom: auto;
        top: 20px;
        right: auto;
        left: 320px;
        opacity: 0.65;
    }

    .moon {
        height: 120px;
        width: 120px;
        background: #f4ed9e;
        border-radius: 60px;
        box-shadow: 0 0 60px 1px #ffffff;
        border: 1px solid #f2f1e0;
    }

    .moon:before {
        border-radius: 60px;
        box-shadow:
            10px -50px 0 0 #dbcd71,
            50px 0 0 0 #dbcd71,
            50px -37px 0 10px #dbcd71;
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        left: 30px;
        bottom: 10px;
        background: #dbcd71;
    }

    .cat {
        background: #ffffff;
        height: 60px;
        top: auto;
        bottom: 200px;
        width: 60px;
        z-index: 0;
        transition: all linear 1s;
        -webkit-transition: all linear 1s;
    }

    .cat:before,
    .cat:after {
        width: 0;
        height: 0;
        top: -10px;
        position: absolute;
        content: "";
    }

    .cat:before {
        border-left: 0px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 15px solid #ffffff;
        left: 0;
    }

    .cat:after {
        border-right: 0px solid transparent;
        border-left: 15px solid transparent;
        border-bottom: 15px solid #ffffff;
        right: 0;
    }

    .cat .eyes {
        position: absolute;
        height: 8px;
        width: 8px;
        background: #333;
        border-radius: 100%;
        top: 15px;
    }

    .cat .eyes.left {
        left: 12px;
    }
    .cat .eyes.right {
        right: 12px;
    }

    .cat .mouth {
        position: absolute;
        height: 4px;
        width: 60%;
        background: #333;
        border-radius: 0 0 30% 30%;
        top: 28px;
        margin: auto;
        left: 0;
        right: 0;
    }

    .hitbox:hover .cat {
        bottom: 240px;
    }

    @keyframes clouds {
        0% {
            margin-left: 0;
        }
        25% {
            margin-left: 100px;
        }
        50% {
            margin-left: 0;
        }
        75% {
            margin-left: 30px;
        }
        100% {
            margin-left: 0;
        }
    }

    @-webkit-keyframes clouds /*Safari and Chrome*/ {
        0% {
            margin-left: 0;
        }
        25% {
            margin-left: 100px;
        }
        50% {
            margin-left: 0;
        }
        75% {
            margin-left: 30px;
        }
        100% {
            margin-left: 0;
        }
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .hitbox {
        position: relative;
    }

    .center-content {
        display: flex;
        align-items: center;
    }
</style>
