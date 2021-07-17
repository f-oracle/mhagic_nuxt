<template>
    <div>
          <div class="review__image"></div>
    <div class="review">
        <div class="review__welcometxt">

            <a class="login-a" href="/">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="25" fill="black" fill-opacity="0.78" />
                    <path
                        d="M15.6464 24.6464C15.4512 24.8417 15.4512 25.1583 15.6464 25.3536L18.8284 28.5355C19.0237 28.7308 19.3403 28.7308 19.5355 28.5355C19.7308 28.3403 19.7308 28.0237 19.5355 27.8284L16.7071 25L19.5355 22.1716C19.7308 21.9763 19.7308 21.6597 19.5355 21.4645C19.3403 21.2692 19.0237 21.2692 18.8284 21.4645L15.6464 24.6464ZM33 24.5L16 24.5L16 25.5L33 25.5L33 24.5Z"
                        fill="white" />
                </svg>
            </a>



            <p>Welcome,<br>Master Cheng</p>
        </div>
        <div class="review__card">
            <div>
                <div>
                    <img src="~assets/image/bird1.jpg" alt="">
                    <div class="card-text">
                        <img src="~assets/image/IMG_-fb4bb7@2x.png" alt="">
                        <div>
                            <p>Angela Moses</p>
                            <p>24 mins ago</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="~assets/image/bird2.jpg" alt="">
                    <div class="card-text">
                        <img src="~assets/image/IMG_-fb4bb7@2x.png" alt="">
                        <div>
                            <p>Angela Moses</p>
                            <p>24 mins ago</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="~assets/image/bird3.jpg" alt="">
                    <div class="card-text">
                        <img src="~assets/image/IMG_-fb4bb7@2x.png" alt="">
                        <div>
                            <p>Angela Moses</p>
                            <p>24 mins ago</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="~assets/image/bird4.jpg" alt="">
                    <div class="card-text">
                        <img src="~assets/image/IMG_-fb4bb7@2x.png" alt="">
                        <div>
                            <p>Angela Moses</p>
                            <p>24 mins ago</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="~assets/image/bird5.jpg" alt="">
                    <div class="card-text">
                        <img src="~assets/image/IMG_-fb4bb7@2x.png" alt="">
                        <div>
                            <p>Angela Moses</p>
                            <p>24 mins ago</p>
                        </div>
                    </div>
                </div>

                <div>
                    <img src="~assets/image/bird5.jpg" alt="">
                    <div class="card-text">
                        <img src="~assets/image/IMG_-fb4bb7@2x.png" alt="">
                        <div>
                            <p>Angela Moses</p>
                            <p>24 mins ago</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
        <div class="footer">
            <p>You have 400 pending reviews</p>
            <div class="footer__div">
                <img src="~assets/image/avatar.png" width="60" height="60" alt="">
                <div>
                    <p>Master Cheng</p>
                    <p>Judge 1</p>
                </div>

                <a href="/slide"> Start Marking</a>
            </div>
        </div>
    </div>
    </div>
</template>
<style  lang="scss"  scoped>
.review {

    &__card {
        & img {
            width: 40rem;
            height: 45rem;
            border-radius: 50px;
            margin-left: 3rem;

        }

        position: absolute;
        top: 30%;
        width: 100%;
        //    position: relative;
        overflow-x: scroll;
        overflow-y: hidden;
        -ms-overflow-style: none;
        /* IE and Edge */
        scrollbar-width: none;

        /* Firefox */
        &::-webkit-scrollbar {
            display: none;

        }


        & div {
            display: flex;


        }

    }

    &__welcometxt {
        &>p {
            position: absolute;
            top: 10%;
            left: 20%;
            font-size: 5rem;
            font-family: montserrat;
            color: rgb(8, 4, 4);
            font-weight: 700;
        }

        &>svg {
            position: absolute;
            top: 12%;
            left: 10%;
        }
    }

}

.card-text {
    position: absolute;
    bottom: 10%;
    width: 30rem;
    margin-left: 2rem;


    & img {
        width: 6rem;
        height: 6rem;
    }

    & div {
        margin-left: 1.2rem;
        width: 20rem;
        display: block;

        & p:nth-child(1) {
            font-size: 1.5rem;
            font-weight: 700;
            width: 100%;
            color: #fff;
            font-family: montserrat;
            margin-top: 1.2rem;
        }

        & p:nth-child(2) {
            font-size: 1.5rem;
            font-weight: 200;
            width: 100%;
            color: #fff;
            font-family: montserrat;
        }
    }
}

.footer {
    position: absolute;
    background: white;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    bottom: 0%;
    left: 30%;
    width: 40%;
    padding: 5rem 5rem;

    &>p {
        font-size: 2rem;
        font-family: montserrat;
        font-weight: 500;
        margin-bottom: 4rem;
    }




    &__div {
        display: flex;

        & div {
            margin: 1.5rem 0 0 1rem;

            & p:nth-child(1) {
                font-size: 1.5rem;
                font-family: montserrat;
                font-weight: 700;

            }

            & p:nth-child(2) {
                font-family: montserrat;
                font-size: 1.2rem;
            }

            &~a {
                background: #F78D8D 0% 0% no-repeat padding-box;
                border-radius: 20px;
                font-size: 1.2rem;
                font-weight: bold;
                padding: 2rem 4rem;
                text-decoration: none;
                color: #fff;
                position: absolute;
                left: 70%;
                cursor: pointer;
            }
        }
    }

}

@media screen and (max-width: 320px) {
    .footer {
        width: 70%;
        left: 12%;

        &>p {
            font-size: 3rem;
        }

        &__div {
            & img {
                width: 5rem;
                height: 5rem;
                margin-top: 1rem;

            }


            & div {

                &~a {
                    padding: 2rem;

                }
            }
        }
    }
}

@media screen and (max-width: 1262px) {
    .footer {

        &__div {
            & img {
                width: 4rem;
                height: 4rem;
                margin-top: 1.5rem;
            }

            & div {
                &~a {
                    padding: 1rem;
                }
            }
        }
    }
}

@media screen and (max-width: 1014px) {
    .footer {

        &__div {

            & div {
                & p:nth-child(1) {
                    font-size: 1.2rem;
                }
            }
        }
    }

}

@media screen and (max-width: 1020px) {
    .footer {

        &>p {
            font-size: 1.5rem;
        }


    }

}

@media screen and (max-width: 1006px) {
    .footer {

        &>p {
            font-size: 1.5rem;
        }


    }

}

@media screen and (max-width: 826px) {
    .footer {

        &>p {
            font-size: 1.2rem;
        }


    }

}

@media screen and (max-width: 414px) {
    .footer {
        left: 12%;
        width: 70%;

        &>p {
            font-size: 2rem;
        }




    }

}

@media screen and (max-width: 768px) {
    .footer {
        left: 12%;
        width: 70%;

        &>p {
            font-size: rem;

        }




    }

}

.top-svg {
    position: absolute;
    top: 10%;
    left: 5%;

}

.login-a {
    position: absolute;
    top: 13%;
    left: 10%;
}

@media screen and (max-width: 768px) {
    .login-a {
        position: absolute;
        top: 11%;
        left: 2%;
    }
}

</style>