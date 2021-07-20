<template>
  <div>
      <div>
          <a class="back-tag" href="/review">
            <img  src="~assets/image/backarrow.png" alt="">
          </a>

    <VueSlickCarousel v-bind="settings">
      <div> <video src="~assets/video/testvid.mp4" controls></video> </div>
      <div><video src="~assets/video/testvid.mp4" controls></video></div>
      <div><video src="~assets/video/testvid.mp4" controls></video></div>
      <div><video src="~assets/video/testvid.mp4" controls></video></div>
      <div> <video src="~assets/video/testvid.mp4" controls></video> </div>
    </VueSlickCarousel>
      </div>
        <div class="footer">
          <p>Week 5 Assignment</p>
          <p>How to Scale Your Business Growth Exponentially</p>
          <div class="svg">

      <div class="flex-div">
                                 <svg width="80" height="16" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#C4C4C4"/>
<path d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z" fill="#C4C4C4"/>
<path d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z" fill="#C4C4C4"/>
<path d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z" fill="#C4C4C4"/>
<path d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z" fill="#C4C4C4"/>
</svg>
<p>rate</p>
          </div>

<p><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 18C6.75001 18 4.15001 12.95 4.05001 12.7C4.00001 12.55 4.00001 12.4 4.05001 12.25C4.15001 12.05 6.75001 7 12.5 7C18.25 7 20.85 12.05 20.95 12.3C21 12.45 21 12.6 20.95 12.75C20.85 12.95 18.25 18 12.5 18ZM5.05001 12.5C5.60001 13.45 8.00001 17 12.5 17C17 17 19.35 13.45 19.95 12.5C19.4 11.55 17 8 12.5 8C8.00001 8 5.65001 11.55 5.05001 12.5Z" fill="white"/>
<path d="M12.5 17C10 17 8 15 8 12.5C8 10 10 8 12.5 8C15 8 17 10 17 12.5C17 15 15 17 12.5 17ZM12.5 9C10.55 9 9 10.55 9 12.5C9 14.45 10.55 16 12.5 16C14.45 16 16 14.45 16 12.5C16 10.55 14.45 9 12.5 9Z" fill="white"/>
<path d="M12.5 15C11.1 15 10 13.9 10 12.5C10 12.2 10.2 12 10.5 12C10.8 12 11 12.2 11 12.5C11 13.35 11.65 14 12.5 14C13.35 14 14 13.35 14 12.5C14 11.65 13.35 11 12.5 11C12.2 11 12 10.8 12 10.5C12 10.2 12.2 10 12.5 10C13.9 10 15 11.1 15 12.5C15 13.9 13.9 15 12.5 15Z" fill="white"/>
</svg>
3,6789 views</p>

          </div>



          <div class=img-div>
           <img src="~assets/image/Ellipse.png" alt="">
           <div class="p-text">
             <p>@TejuSkills</p>
           <p>Tajudeen Iberekodo</p>
           </div>

          </div>

        </div>
  </div>

</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


  export default {
    // name: 'MyComponent',
    components: { VueSlickCarousel },
     data() {
      return {
        settings: {
           "dots": true,
  "dotsClass": "slick-dots custom-dot-class",
  "edgeFriction": 0.35,
  "infinite": false,
  "speed": 500,
  "slidesToShow": 1,
  "slidesToScroll": 1,
  "arrows": true
        },
      }
    },
  }
</script>
<style lang="scss" scoped>

.slicker-slide{
    height: 100%;
}


video{
    position: relative;
    top: 10rem;
    left: 26rem;
    object-fit: contain;
    // width: 50%;

}
button.slick-prev:before, .slick-next:before {
    color:red !important;
    /* position: relative  !important; */
}
.slick-prev{
    /* position: relative !important; */
    bottom: 40rem;
}
.back-tag{
    position: absolute;
    cursor: pointer !important;
    & > img{
     width: 5rem;

    //  background: red !important;
     position: relative;
     top: 10rem;
     left: 5rem;
    }
}
.slick-prev{
position: relative;
}
.footer{
    border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 50%;
  padding: 1rem 5rem;
  background: #000000;
  color: white;
  position: relative;
bottom: -14.8rem;
left: 50rem;
padding: 3rem 5rem;
& svg{
    float: right;
}
}
.img-div{
    margin-top: 2rem;
    display: flex;

}
.p-text{
    margin-left: 2rem;
 & >p:nth-child(1){
     font-size: 1.3rem;
     font-weight: 600;

 }
  & >p:nth-child(2){
     font-size: 1rem;
     font-weight: 200;

 }
}
.svg{
    float: right;
}
.flex-div{
    display: grid;
    margin-bottom: 3rem;
& p{
    color: rgba(255, 186, 82, 1);

;
}
}
@media screen and (max-width:1440px){
.footer{
 position: relative;
bottom: -1rem;
left: 50rem;
padding: 3rem 5rem;
}
}

</style>