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
        <div class="video-wrapper transition duration-500 ease-in-out">
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

        <div class="video-wrapper transition duration-500 ease-in-out">
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

        <div class="video-wrapper transition duration-500 ease-in-out">
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

        <div class="video-wrapper transition duration-500 ease-in-out">
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

        <div class="video-wrapper transition duration-500 ease-in-out">
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

        <div class="video-wrapper transition duration-500 ease-in-out">
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
    padding:2rem 5rem;
    & > p {
      font-size: 4rem;
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
    }
  }
}

.video-wrapper {
  margin: 5rem;
  background: #f78d8d;
  padding-top: 10rem;
  border-radius: 30px;
  width: 40rem;

  & video {
    // width: 40rem;
    cursor: pointer;

  }
  &-text {
    display: flex;
    padding: 3rem;
    background: #f78d8d;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    margin-top: -1rem;
    // opacity: 1;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
  &:after, &:before {
    content: '';
    position: absolute;
    top: 40%;
    left: 50%;
    display: none;
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


@media screen and (max-width: 414px){
  .review{
    &__horizontal{
      // background: red;
      top: 50rem;
    }
  }
  .video-wrapper{
    width: 50rem;
  }
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
@media screen and (max-width: 766px){
  .review{
&__horizontal{
  top: 10rem !important;
}
  }

}
@media screen and (max-width: 360px){
  .review{
&__horizontal{
  top: 10rem;
}
  }
    .footer{
& > p{
    font-size: 1.5rem;
}
    }
}
@media screen and (max-width:786px){
  .video-wrapper{
    width: 40rem;
  }
  .footer{
& > p{
  font-size: 1.2rem !important;
}
 }

}
@media screen and (max-width:1136px){
 .footer{
& > p{
  font-size: 1.5rem;
}
 }
 .footer__img {
   & > a{
 padding: 2rem;
   }
 }
}

@media screen and (max-width: 768px){
  .review{
    &__horizontal{
      // background: red;
      top: 20rem !important;
    }
  }
  .video-wrapper{
    width: 60rem;
  }
}
@media screen and (max-width: 774px){
   .footer{
& > p{
  font-size: 1.3rem;
}
   }
   .footer__img {
   & > a{
 padding: 1.2rem;
   }
 }
}
@media screen and (max-width: 1726px){

.review{
&__first-div{

& >p{
font-size: 2rem;
}
}
}
   .footer{
& > p{
  font-size: 1.3rem;
}
   }
   .footer__img {
   & > a{
 padding: 1.2rem;
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