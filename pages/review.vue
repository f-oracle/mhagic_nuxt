<template>
  <div class="review">
    <div class="review__first-div">
      <a class="login-a" href="/">
        <img src="~assets/image/backarrow.png" alt="" />
      </a>

      <p>Welcome,<br />Master Cheng</p>
    </div>
    <!-- ./review__first-div -->

    <div class="review__horizontal">
      <div class="review__horizontal-div">
        <div class="video-wrapper">
          <video controls>
            <source src="~assets/video/testvid.mp4" type="video/mp4" />
          </video>
          <div class="video-wrapper-text">
            <img src="~assets/image/IMG_-fb4bb7@2x.png" alt="" />
            <div class="user-info">
              <p>Angela Moses</p>
              <p>24 mins ago</p>
            </div>
          </div>
        </div>

        <div class="video-wrapper">
          <video controls>
            <source src="~assets/video/testvid.mp4" type="video/mp4" />
          </video>
          <div class="video-wrapper-text">
            <img src="~assets/image/IMG_-fb4bb7@2x.png" alt="" />
            <div class="user-info">
              <p>Angela Moses</p>
              <p>24 mins ago</p>
            </div>
          </div>
        </div>

        <div class="video-wrapper">
          <video controls>
            <source src="~assets/video/testvid.mp4" type="video/mp4" />
          </video>
          <div class="video-wrapper-text">
            <img src="~assets/image/IMG_-fb4bb7@2x.png" alt="" />
            <div class="user-info">
              <p>Angela Moses</p>
              <p>24 mins ago</p>
            </div>
          </div>
        </div>

        <div class="video-wrapper">
          <video controls>
            <source src="~assets/video/testvid.mp4" type="video/mp4" />
          </video>
          <div class="video-wrapper-text">
            <img src="~assets/image/IMG_-fb4bb7@2x.png" alt="" />
            <div class="user-info">
              <p>Angela Moses</p>
              <p>24 mins ago</p>
            </div>
          </div>
        </div>

        <div class="video-wrapper">
          <video controls>
            <source src="~assets/video/testvid.mp4" type="video/mp4" />
          </video>
          <div class="video-wrapper-text">
            <img src="~assets/image/IMG_-fb4bb7@2x.png" alt="" />
            <div class="user-info">
              <p>Angela Moses</p>
              <p>24 mins ago</p>
            </div>
          </div>
        </div>

        <div class="video-wrapper">
          <video controls>
            <source src="~assets/video/testvid.mp4" type="video/mp4" />
          </video>
          <div class="video-wrapper-text">
            <img src="~assets/image/IMG_-fb4bb7@2x.png" alt="" />
            <div class="user-info">
              <p>Angela Moses</p>
              <p>24 mins ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-div">
      <div class="footer">
        <p>You have 400 pending reviews</p>
        <div class="footer__img">
          <img src="~assets/image/avatar.png"  alt="" />
          <div class="judge-info">
            <p>Master Cheng</p>
            <p>Judge 1</p>
          </div>

          <a href="/slide"> Start Marking</a>
        </div>
      </div>
    </div>
 </div>
</template>
<style lang="scss" scoped>
.review {
  width: 100vw;
  min-height: 100vh;
  background: #f5f5f6;

  &__first-div {
    display: flex;
    padding:5rem 10rem;
    & > p {
      // background: red;
      font-size: 5rem;
      font-weight: 550;
      margin-left: 20rem;
    }
  }
  &__horizontal {
    display: flex;
    width: 100%;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;

    /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
    &-div {
      //    background: red;
      display: flex;
        transition: 1ms transform;
    }
  }
}

.video-wrapper {
  margin: 5rem;
  background: #f78d8d;
  padding-top: 5rem;
  border-radius: 30px;
    transition: 450ms all;
  transform-origin: center left;

  & video {
    width: 40rem;
    // border-top-left-radius: 10px;
    // border-top-right-radius: 10px;
    cursor: pointer;

  }
  &-text {
    display: flex;
    padding: 3rem;
    background: #f78d8d;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    margin-top: -1rem;
    opacity: 1;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
  transition: 450ms opacity;
  &:after, &:before {
    content: '';
    position: absolute;
    top: 40%;
    left: 50%;
    display: none;
  }
  &:after {
    margin-top: -25px;
    margin-left: -25px;
    width: 50px;
    height: 50px;
    // border: 3px solid #ecf0f1;
    line-height: 50px;
    text-align: center;
    border-radius: 100%;
    // background: rgba(0, 0, 0, 0.5);
    // z-index: 1;
  }
  &:before {
    // content: '▶';
    // color: #fff;
    left: 0;
    width: 100%;
    font-size: 35px;
    margin-left: 7px;
    margin-top: -19px;
    text-align: center;
    z-index: 2;
    cursor: pointer;
  }
    & img {
      width: 5rem;
    }
  }
  .user-info {
    margin-top: 1.2rem;
    margin-left: 1rem;
    & p:nth-child(1) {
      color: #fff;
      font-size: 1.5rem;
      font-weight: 600;
    }
    & p:nth-child(2) {
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
    }
  }
}

.login-a {
  & img {
    // background: red;
    width: 4rem;
  }
}
.footer-div {
  position: fixed;
  bottom: 0;
  left: 0;
  display: grid;
  place-items: center;
//   background: red;
  width: 100%;
  margin-top: 10rem;
}
.footer {
  background: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 50%;
  padding: 1rem 5rem;
  & > p{
    //   background: red;
      font-weight: 500;
      font-size: 2rem;
      padding-bottom: 2rem;

  }
 &__img{
     display: flex;
     & img{
         width: 4rem;
     }
     & a{
        background: #f78d8d;
        border-radius: 20px;
        font-size: 1.2rem;
        font-weight: bold;
        padding: 2rem 4rem;
        text-decoration: none;
        color: #fff;
        position: absolute;
        left: 60%;
        bottom: 3rem;
        cursor: pointer;
        transition: background-color 1500ms ease 2000ms;
     }
 }
}
.judge-info{
    margin-left: 1rem;
      & p:nth-child(1){
          font-size: 1.2rem;
          font-weight: 600;
      }
      & p:nth-child(2){
          font-size: 0.8rem;
          font-weight: s00;
      }
}


// animation
.review__horizontal-div:hover {
  transform: translate3d(150px, 0, 0);
  .video-wrapper {
    opacity: 0.3;
    &:hover {
      transform: scale(1);
      opacity: 1;
    }
  }
}

.video-wrapper:hover ~ .video-wrapper {
  transform: translate3d(100px, 0, 0);
}

.video-wrapper:hover .video-wrapper-text {
  opacity: 2;
}




@media screen and (max-width: 414px){
.footer{
    width: 70%;
}
.review {
  &__first-div {

    & > p {
      margin-left: 10rem;
    }
  }
}
}
.login-a{
    & svg{
        width: 2rem;
    }
}
@media screen and (max-width: 360px){
    .footer{
& > p{
    font-size: 1.5rem;
}
    }
}
</style>
<script>
  export default {
    head() {
      return {
        script: [
          {
             src: '/js/main.js'
          }
        ],
      }
    }
  }
</script>