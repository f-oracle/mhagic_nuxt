<template>
<div class="carousel">
<button class="carousel__button carousel__button--right">
<img src="~assets/image/next.png" alt="">
</button>

<div class="carousel__track-container">
<ul class="carousel__track">
<li class="carousel__slide">
   <video class="carousel__video" controls>
            <source src="~assets/video/testvid.mp4" type="video/mp4" />
          </video>
</li>
<li class="carousel__slide">
   <video class="carousel__video" controls>
            <source src="~assets/video/testvid.mp4" type="video/mp4" />
          </video>
</li>
<li class="carousel__slide">
   <video class="carousel__video" controls>
            <source src="~assets/video/testvid.mp4" type="video/mp4" />
          </video>
</li>
</ul>
</div>

<button class="carousel__button carousel__button--left">
<img src="~assets/image/prev.png" alt="">
</button>

<div class="carousel__nav">
<div class="carousel__indicators current-slide"></div>
<div class="carousel__indicators"></div>
<div class="carousel__indicators"></div>
</div>


</div>
</template>
<style lang="scss" scoped>
.carousel{
position: relative;
height: 600px;
width: 80%;
margin: 0 auto;
}
.carousel__video{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.carousel__track-container{
    background: #90ee90;
    // padding: 10px;
    height: 100%;
    position: relative;
}
.carousel__track{
    padding: 0;
    margin: 0;
    list-style: none;
}
.carousel__slide{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}
.carousel__button{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: 0;
    cursor: pointer;
}
.carousel__button--left{
    left: -100px;
}
.carousel__button--right{
    right: -100px;
}
.carousel__button img {
    width: 40px;
}
.carousel__nav{
    // background: pink;
    display: flex;
    justify-content: center;
    // height: 100px;
    justify-content: center;
    padding: 10px 0;
}
.carousel__indicators{
    border: 0;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: rgba(0,0,0,.3);
    margin: 0 15px;
}
.carousel__indicators.current-slide{
    background: rgba(0,0,0,.75);
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