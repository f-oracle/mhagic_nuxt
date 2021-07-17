<template>
<div class="success">
        <div class="container success__container">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="77"
                viewBox="0 0 81 77"
            >
                <defs>

                </defs>
                <g transform="translate(0 0)">
                    <path
                        class="a"
                        d="M46.679,3.314A7,7,0,0,1,56.193,6.4l1.47,2.963a7,7,0,0,0,5.251,3.814l3.273.482a7,7,0,0,1,5.882,8.1l-.552,3.254a7,7,0,0,0,2.007,6.174l2.36,2.309a7,7,0,0,1,0,10.008l-2.36,2.309a7,7,0,0,0-2.007,6.174l.552,3.254a7,7,0,0,1-5.882,8.1l-3.273.482a7,7,0,0,0-5.251,3.814L56.193,70.6a7,7,0,0,1-9.514,3.091l-2.935-1.535a7,7,0,0,0-6.488,0l-2.935,1.535A7,7,0,0,1,24.807,70.6l-1.47-2.963a7,7,0,0,0-5.251-3.814l-3.273-.482a7,7,0,0,1-5.882-8.1l.552-3.254a7,7,0,0,0-2.007-6.174L5.116,43.5a7,7,0,0,1,0-10.008l2.36-2.309a7,7,0,0,0,2.007-6.174l-.552-3.254a7,7,0,0,1,5.882-8.1l3.273-.482a7,7,0,0,0,5.251-3.814L24.807,6.4a7,7,0,0,1,9.514-3.091l2.935,1.535a7,7,0,0,0,6.488,0Z"
                        transform="translate(0 0)"
                    />
                    <path
                        class="b"
                        d="M113.391,108.472,93.284,128.578,82.025,117.4l4.584-4.5,6.675,6.595,15.522-15.522Z"
                        transform="translate(-57.025 -77.968)"
                    />
                </g>
            </svg>
            <p>You're Done!</p>
            <p>Thank you for judging prudently</p>
            <a href="">Go back</a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
// Done scss
.success {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    place-items: center;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    -webkit-background-size: cover;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
    cursor: pointer;
    opacity: 3;

    &__container {
        display: grid;
        place-items: center;
        background: #f5f5f6;
        width: 30%;
        line-height: 300%;
        padding: 4rem 0;
        border-radius: 50px;
        font-family: montserrat;

        &>p:nth-child(2) {
            font-size: 1.4rem;
            font-weight: 800;

        }

        &>p:nth-child(3) {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: 1.5rem;
        }

        &>a {
            padding: 0rem 6rem;
            border-radius: 40px;
            text-decoration: none;
            background: #f68d8c;
            color: #fff;
            font-size: 1.2rem;
            opacity: 1;
            text-align: center;
            cursor: pointer;
        }

    }

}

.a {
    fill: #1a1a26;
}

.b {
    fill: #f78d8d;
    stroke: #f68d8c;
    stroke-linecap: round;
    stroke-linejoin: round;
}

@media screen and (max-width: 832px) {
    .success {
        &__container {
            width: 50%;

            &>svg {
                width: 50px;
            }

            &>p:nth-child(3) {
                font-size: 1.4rem;
                font-weight: 300;
                margin-bottom: 1.5rem;
            }
        }
    }
}

@media screen and (max-width: 739px) {
    .success {
        &__container {
            width: 40%;
            line-height: 400%;

            &>svg {
                width: 50px;
            }

            &>p:nth-child(3) {
                font-size: 1.4rem;
                font-weight: 300;
                margin-bottom: 1.5rem;
            }
        }
    }
}


</style>