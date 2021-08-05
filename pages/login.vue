<template>
  <div class="background">
    <div class="container background__container">
      <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
          <label for="name">Username</label>
          <input
            name="email"
            id="email"
            v-model="loginData.email"
            type="email"
            required
            placeholder="Type Here"
          />
          <label for="name">Password</label>
          <input
            id="password"
            v-model="loginData.password"
            type="password"
            required
            placeholder="8+ characters"
          />

          <div class="background__loginbtn">
            <div class="w-full grid justify-center my-6">
              <!-- <a type="submit" href="/review">Login</a> -->
              <button
                href=""
                type="submit"
                class="login-a started-a w-full py-6 rounded-full"
              >
                Login
              </button>
            </div>

            <div>
              <p>
                Forgot Password? <span><a href="">Click here</a></span>
              </p>
              <p>By continuing you agree to MHAGIC<br />Terms & conditon</p>
            </div>
          </div>

          <!-- <input type="submit"> -->
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginData: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.loginData
        });
        this.$router.push("/");
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  cursor: pointer;
  opacity: 3;

  &__container {
    background: #fff;
    z-index: 999999;
    width: 70rem;
    border-radius: 40px;
    display: grid;
    place-items: center;
    height: 70rem;

    & > div {
      width: 70%;
      margin-top: 5rem;

      & > h1 {
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
          font-weight: bold;
        }

        & input {
          padding: 2rem;
          border-radius: 50px;
          border: none;
          background: #eee;
          margin-bottom: 2.5rem;

          &::placeholder {
            color: grey;
            font-size: 1rem;
          }
        }
      }
    }
  }

  .login-a {
    background: rgba(247, 141, 141, 1);
    color: #ffff;
    font-size: 1.3rem;
    font-weight: 900;
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
        background: #f78d8d 0% 0% no-repeat padding-box;
        color: #fff;
        text-decoration: none;
        width: 100%;
        //font-family: Montserrat;
        font-size: 1.5rem;
        font-weight: 600;
      }
    }

    & > div:nth-last-child(1) {
      text-align: center;

      & p:nth-child(1) {
        color: black;
        font-size: 1.2rem;
        margin-bottom: 2rem;

        & span a {
          color: #f78d8d;
          text-decoration: none;
        }
      }

      & p:nth-child(2) {
        color: grey;
        font-size: 1.3rem;
        font-weight: 400;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
      background: #f78d8d 0% 0% no-repeat padding-box;
      color: #fff;
      text-decoration: none;
      width: 100%;
      height: 1rem;
      margin-top: 4rem;
    }

    &__svg {
      & > svg {
        width: 5rem;
      }
    }
  }
}

@media screen and (max-width: 320px) {
  .background {
    width: 100vw;
    height: 100vh;

    &__container {
      width: 90%;
    }

    &__loginbtn {
      & div:nth-child(1) a {
        width: 100%;
      }
    }
  }
}

@media screen and (min-width: 774px) {
  .background {
    width: 100vw;
    height: 100vh;
    &__container {
      width: 50rem;
      height: 60rem;
    }
  }
}
</style>