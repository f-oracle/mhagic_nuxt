<template>
  <div>
    <section class="carousel" aria-label="Gallery">
      <ol class="carousel__viewport">
        <li id="carousel__slide1" tabindex="0" class="carousel__slide">
          <div class="carousel__snapper">
            <a href="#carousel__slide5" class="carousel__prev"
              >Go to last slide</a
            >
            <a href="#carousel__slide2" class="carousel__next"
              >Go to next slide</a
            >
          </div>
        </li>
        <li id="carousel__slide2" tabindex="0" class="carousel__slide">
          <div class="carousel__snapper"></div>
          <a href="#carousel__slide1" class="carousel__prev"
            >Go to previous slide</a
          >
          <a href="#carousel__slide3" class="carousel__next"
            >Go to next slide</a
          >
        </li>
        <li id="carousel__slide3" tabindex="0" class="carousel__slide">
          <div class="carousel__snapper"></div>
          <a href="#carousel__slide2" class="carousel__prev"
            >Go to previous slide</a
          >
          <a href="#carousel__slide4" class="carousel__next"
            >Go to next slide</a
          >
        </li>
        <li id="carousel__slide4" tabindex="0" class="carousel__slide">
          <div class="carousel__snapper"></div>
          <a href="#carousel__slide3" class="carousel__prev"
            >Go to previous slide</a
          >
          <a href="#carousel__slide5" class="carousel__next"
            >Go to first slide</a
          >
        </li>
        <li id="carousel__slide5" tabindex="0" class="carousel__slide">
          <div class="carousel__snapper"></div>
          <a href="#carousel__slide4" class="carousel__prev"
            >Go to previous slide</a
          >
          <a href="#carousel__slide1" class="carousel__next"
            >Go to first slide</a
          >
        </li>
      </ol>
      <aside class="carousel__navigation">
        <ol class="carousel__navigation-list">
          <div class="slidder">
            <img src="" alt="" />
            <div class="img-container">
              <div class="img__div">
                <img
                  class="img"
                  src="~assets/image/IMG_-fb4bb7@2x.png"
                  alt=""
                />
                <div class="img__div-text">
                  <p>@ eloks</p>
                  <p>Eloks Global Industries</p>
                </div>
              </div>

              <p>Week 5 Assignment</p>
              <p>How to Scale Your Business Growth Exponentailly.</p>
            </div>

            <div class="svg">
              <img src="~assets/image/star.png" width="20" height="20" alt="" />
              <img src="~assets/image/star.png" width="20" height="20" alt="" />
              <img src="~assets/image/star.png" width="20" height="20" alt="" />
              <img src="~assets/image/star.png" width="20" height="20" alt="" />
              <img src="~assets/image/star.png" width="20" height="20" alt="" />
            </div>
          </div>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide1" class="carousel__navigation-button"
              >Go to slide 1</a
            >
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide2" class="carousel__navigation-button"
              >Go to slide 2</a
            >
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide3" class="carousel__navigation-button"
              >Go to slide 3</a
            >
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide4" class="carousel__navigation-button"
              >Go to slide 4</a
            >
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide5" class="carousel__navigation-button"
              >Go to slide 5</a
            >
          </li>
        </ol>
      </aside>
      <a href="/review">
        <svg
          class="top-svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="black" fill-opacity="0.78" />
          <path
            d="M15.6464 24.6464C15.4512 24.8417 15.4512 25.1583 15.6464 25.3536L18.8284 28.5355C19.0237 28.7308 19.3403 28.7308 19.5355 28.5355C19.7308 28.3403 19.7308 28.0237 19.5355 27.8284L16.7071 25L19.5355 22.1716C19.7308 21.9763 19.7308 21.6597 19.5355 21.4645C19.3403 21.2692 19.0237 21.2692 18.8284 21.4645L15.6464 24.6464ZM33 24.5L16 24.5L16 25.5L33 25.5L33 24.5Z"
            fill="white"
          />
        </svg>
      </a>
    </section>
  </div>
</template>

<style lang="scss" scoped>
// slide scss
@keyframes tonext {
  75% {
    left: 0;
  }

  95% {
    left: 100%;
  }

  98% {
    left: 100%;
  }

  99% {
    left: 0;
  }
}

@keyframes tostart {
  75% {
    left: 0;
  }

  95% {
    left: -300%;
  }

  98% {
    left: -300%;
  }

  99% {
    left: 0;
  }
}

@keyframes snap {
  96% {
    scroll-snap-align: center;
  }

  97% {
    scroll-snap-align: none;
  }

  99% {
    scroll-snap-align: none;
  }

  100% {
    scroll-snap-align: center;
  }
}

ol,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.carousel {
  position: relative;
  width: 100vw;
  height: 100vh;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;
}

.carousel__viewport {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  counter-reset: item;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.carousel__slide {
  position: relative;
  flex: 0 0 100%;
  width: 100%;
  background-image: url("~assets/image/bird1.jpg");
  background-repeat: no-repeat;
  background-size: 80vw 100vh;
  background-size: cover;
}

.carousel__slide:nth-child(2) {
  background-image: url("~assets/image/bird2.jpg");
}

.carousel__slide:nth-child(3) {
  background-image: url("~assets/image/bird3.jpg");
}

.carousel__slide:nth-child(4) {
  background-image: url("~assets/image/image.jpg");
}

.carousel__slide:nth-child(5) {
  background-image: url("~assets/image/bird5.jpg");
}

.carousel__slide:before {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -40%, 70px);

  font-size: 2em;
}

.carousel__snapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
  // display: none;
}

@media (hover: hover) {
  .carousel__snapper {
    animation-name: tonext, snap;
    animation-timing-function: ease;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }

  .carousel__slide:last-child .carousel__snapper {
    animation-name: tostart, snap;
  }
}

@media (prefers-reduced-motion: reduce) {
  .carousel__snapper {
    animation-name: none;
  }
}

.carousel:hover .carousel__snapper,
.carousel:focus-within .carousel__snapper {
  animation-name: none;
}

.carousel__navigation {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
}

.carousel__navigation-list,
.carousel__navigation-item {
  display: inline-block;
}

.carousel__navigation-button {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #333;
  background-clip: content-box;
  border: 0.25rem solid transparent;
  border-radius: 50%;
  font-size: 0;
  transition: transform 0.1s;
}

.carousel::before,
.carousel::after,
.carousel__prev,
.carousel__next {
  position: absolute;
  // margin-top: 37.5%;
  width: 7rem;
  height: 7rem;
  transform: translateY(-50%);
  border-radius: 50%;
  font-size: 0;
  outline: 0;
}

.carousel::before,
.carousel__prev {
  left: 20%;
  bottom: 1%;
}

.carousel::after,
.carousel__next {
  right: 20%;
  bottom: 4%;
}

.carousel::before,
.carousel::after {
  content: "";
  z-index: 1;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
  font-size: 2.5rem;
  line-height: 4rem;
  text-align: center;
  pointer-events: none;
}

.carousel::before {
  content: url("/dist/image/Group\ 6812.png");
}

.carousel::after {
  background-image: url("/dist/image/Group\ 6813.png");
}

.slidder {
  color: #fff;
  font-family: montserrat;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: left;
  display: flex;
  position: absolute;
  bottom: 350%;
  left: 30%;
}

.svg {
  position: absolute;
  bottom: 20%;
  left: 70%;
  display: flex;
  padding: 3rem;
  margin-right: 2rem;

  & img {
    margin-left: 1.2rem;
  }

  &__text {
    font-size: 1rem;
    font-weight: 100;
    color: #fff;
    font-family: montserrat;
    margin-left: 1rem;
    margin-top: 0.5rem;
  }
}

.svg__first {
  margin-right: 2rem;
  background: #f78d8d;
  padding: 0.5rem;
  border-radius: 30px;
  display: block;
  width: 4rem;
  height: 4rem;
}

.img {
  width: 4rem;
  height: 4rem;
  margin-bottom: 2rem;
}

.svg-last {
  display: block;
  margin-left: 2rem;

  & > svg {
    margin-right: 2rem;
    background: #f78d8d;
    padding: 0.5rem;
    border-radius: 30px;
    width: 4rem;
    height: 4rem;
  }
}

.img__div {
  display: flex;
  font-family: montserrat;

  &-text {
    font-size: 1rem;
    font-weight: 200;
    margin-left: 1rem;

    & p:first-child {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
}
</style>
