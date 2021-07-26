<template>
  <div class="review">
    <header class="w-full px-16 py-16 text-2xl font-semibold">
      <div class="header w-full grid grid-cols-3">
        <ul class="header__div flex">
          <li class="mx-8">Home</li>
          <li class="mx-8">FAQ</li>
          <li class="mx-8">Contact</li>
        </ul>
        <div class="grid justify-center">
          <img class="logo-img" src="~assets/image/logo.png" alt="" />
        </div>
        <div class="grid justify-end items-center">
          <a href="" class="login-a rounded-full px-16 py-5">Sign in</a>
        </div>
      </div>
    </header>
    <section class="w-full relative grid justify-center">
      <div class="">
        <p class="grid justify-center mhagic-text text-xl font-medium my-12">
          this is mhagic
        </p>
        <p class="create-text text-7xl my-6 capitalize font-extrabold">
          you were born to create,
        </p>
        <p
          class="
            inspire-text
            text-7xl
            capitalize
            grid
            justify-center
            font-extrabold
          "
        >
          we are here to inspire.
        </p>
        <img class="ring1 absolute" src="~assets/image/ring1.png" alt="" />
        <img class="ring2 absolute" src="~assets/image/ring2.png" alt="" />
      </div>
    </section>

    <section class="w-full relative grid justify-center my-8">
      <div class="">
        <p class="sontent-1 grid justify-center text-center text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro nisi,
          tempore, voluptas, aut minus mollitia veritatis iusto hic odit ipsum
          earum. <br />
          Porro similique quos facere quas, sapiente expedita eum consectetur
          autem natus ratione delectus dolorum quibusdam nobis placeat, <br />
          ut id libero illo adipisci sunt modi magnam voluptate blanditiis
          quaerat quod.
        </p>
        <div class="w-full grid justify-center my-6">
          <button href="" class="started-a px-10 py-7 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </section>

    <section class="background relative">
      <img
        class="img12 w-1/4 z-40 absolute"
        src="~assets/image/Rectangle12.png"
        alt=""
      />
      <img
        class="img10 w-1/5 absolute"
        src="~assets/image/Rectangle10.png"
        alt=""
      />
      <img
        class="img13 w-1/5 absolute"
        src="~assets/image/Rectangle13.png"
        alt=""
      />
      <img
        class="img14 w-1/5 absolute"
        src="~assets/image/Rectangle14.png"
        alt=""
      />
      <img
        class="img15 absolute w-1/4"
        src="~assets/image/Rectangle15.png"
        alt=""
      />
      <img
        class="img16 w-1/5 absolute w-40"
        src="~assets/image/Rectangle16.png"
        alt=""
      />
      <img
        class="img17 w-1/5 absolute w-40"
        src="~assets/image/img17.png"
        alt=""
      />
    </section>
    <section class="whatmhagic relative  grid items-center">
      <div class="whatmahgic__div grid grid-cols-2">
        <div><img src="~assets/image/bluelight.png" alt="" /></div>
        <div> <p>what is mhagic?</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus,
          doloribus quo rem consequuntur alias illo dolorum. Harum eveniet
          mollitia dignissimos nihil animi enim cum expedita sapiente quasi aut
          vitae debitis quam, doloribus consectetur voluptatum sit commodi dicta
          magni, perspiciatis, modi possimus. Earum, recusandae eius! Voluptatum
          ad tenetur ut atque excepturi.
        </p></div>
      </div>
    </section>
  </div>
  <!-- review end -->
</template>

<style lang="scss" scoped>
.review {
  background: #070512;
  color: rgba(222, 226, 225, 0.86);
  width: 100vw;
  // height: 100vh;
}
.logo-img {
  width: 5rem;
}
.login-a {
  background: rgba(247, 141, 141, 1);
}
.started-a {
  background: rgba(247, 141, 141, 1);
}
.mhagic-text {
  background: -webkit-linear-gradient(left, #f0b622, #fa0a2a);
  background: -o-linear-gradient(right, #f0b622, #fa0a2a);
  background: -moz-linear-gradient(right, #f0b622, #fa0a2a);
  background: linear-gradient(right, #f0b622, #fa0a2a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
}
.create-text,
.inspire-text {
  color: #ffffff;
}
.ring1 {
  width: 20rem;
  right: 32%;
  top: 26%;
}
.ring2 {
  width: 20rem;
  right: 33.9%;
  top: 68%;
}
.background {
  background-image: url(~assets/image/_Group_.png);
  background-repeat: no-repeat;
  background-size: 100vw 40vh;
  height: 400px;
}
.img10 {
  top: 60%;
  // bottom: 30%;
  left: 0%;
}
.img12 {
  left: 12%;
  top: 20%;
}
.img13 {
  left: 20%;
  top: 100%;
}
.img14 {
  left: 40%;
  top: 100%;
}
.img15 {
  left: 37%;
  top: 30%;
}
.img16 {
  right: 0%;
  top: 80%;
}
.img17 {
  right: 20%;
  top: 30%;
}
@media (max-width: 320px) {
  .create-text,
  .inspire-text {
    @apply text-5xl;
  }
  .content-1 {
    @apply text-base;
  }
}
</style>