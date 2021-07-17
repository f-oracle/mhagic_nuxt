<template>
<div class="background">
        <div class="container background__container">
            <div>
                <h1>Login</h1>
                <form>

                    <label for="name">Username</label>
                    <input type="text" name="email" required placeholder="Type Here" />
                    <label for="name">Password</label>
                    <input type="text" name="password" required placeholder="8+ characters" />

                    <div class="background__loginbtn">
                        <div>
                                   <a type="submit" href="/review">Login</a>
                                   <!-- <button type="submit">login</button> -->


                        </div>

                        <div>
                         <p>Forgot Password? <span><a href="">Click here</a></span></p>
                         <p>By continuing you agree to MHAGIC<br>Terms & conditon</p>
                        </div>
                    </div>

                    <!-- <input type="submit"> -->
                </form>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.background {
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
        background: #fff;
        z-index: 999999;
        width: 70rem;
        background: var(--unnamed-color-f5f5f6) 0% 0% no-repeat padding-box;
        background: #F5F5F6 0% 0% no-repeat padding-box;
        border-radius: 40px;
        display: grid;
        place-items: center;
        height: 70rem;

        &>div {
            width: 70%;
            margin-top: 5rem;

            &>h1 {
                font-family: Montserrat;
                font-weight: 700;
                font-size: 2.5rem;
                margin-bottom: 2.5rem;
            }

            form {
                display: grid;

                & label {
                    font-size: 1.2rem;
                    color: gray;
                    margin-bottom: 1rem;
                    font-family: Montserrat;
                    font-weight: bold;
                }

                & input {
                    padding: 2rem;
                    border-radius: 50px;
                    border: none;
                    background: #fff;
                    margin-bottom: 2.5rem;

                    &::placeholder {
                        color: grey;
                        font-family: montserrat;
                        font-size: 1rem;
                    }

                }

            }

        }

    }

    &__loginbtn {

        & div:nth-child(1) {
            width: 100%;
            display: inline-flex;
            margin-bottom: 3rem;


            & a {
                padding: 2rem;
                text-align: center;
                border-radius: 50px;
                background: #F78D8D 0% 0% no-repeat padding-box;
                color: #fff;
                text-decoration: none;
                width: 100%;
                font-family: montserrat;
                font-size: 1.5rem;
                font-weight: 600;

            }
        }

        &>div:nth-last-child(1) {
            text-align: center;

            & p:nth-child(1) {
                color: black;
                font-size: 1.2rem;
                margin-bottom: 2rem;

                & span a {
                    color: #F78D8D;
                    text-decoration: none;
                }


            }

            & p:nth-child(2) {
                color: grey;
                font-size: 1.3rem;
                font-weight: 400;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

            }
        }
    }

    &__svg {
        & svg:nth-child(1) {
            margin-right: 3rem;
            margin-left: 2rem;
        }
    }

}

@media screen and (max-width: 768px) {
    .background {

        &__loginbtn div:nth-child(1) a {
            padding: 3rem 0 5rem 0;
            text-align: center;
            border-radius: 50px;
            background: #F78D8D 0% 0% no-repeat padding-box;
            color: #fff;
            text-decoration: none;
            width: 100%;
            height: 1rem;
            margin-top: 4rem;

        }

        &__svg {
            &>svg {
                width: 5rem;
            }
        }
    }



}

@media screen and (max-width: 320px) {
    .background {
        width: 105vw;
        height: 105vh;

        &__container {
            width: 60rem;
        }

        &__loginbtn {
            & div:nth-child(1) a {
                width: 100%;
            }
        }
    }
}

@media screen and (max-width: 280px) {
    .background {
        width: 120vw;
        height: 120vh;
    }
}
</style>