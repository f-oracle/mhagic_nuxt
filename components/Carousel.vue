<template>
  <div class="carousel">
    <slot> </slot>

    <button @click="next" class="next"><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" transform="rotate(-180 19 19)" fill="black" fill-opacity="0.81"/>
<path d="M24.3307 19L17.319 11.9883L15.6694 13.638L21.036 19.0047L15.6694 24.3713L17.319 26.0117L24.3307 19Z" fill="white"/>
</svg>
Next</button>
    <button @click="prev" class="prev">
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" fill="black" fill-opacity="0.81"/>
<path d="M13.6693 19L20.681 26.0117L22.3306 24.362L16.964 18.9953L22.3306 13.6287L20.681 11.9883L13.6693 19Z" fill="white"/>
</svg>
Prev</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    },
  },
};
</script>

<style>
.carousel {
  position: relative;
  width: 100%;
  height: 74rem;
  overflow: hidden;
  display: grid;
  place-items: center;
  margin-top: 5rem;
}

button {
  position: absolute;
  height: 50px;
  width: 40px;
  top: calc(50% - 20px);
  font-size: 1.2rem;
  font-weight: 600;
  /* background: rgba(0, 0, 0, 0.8); */
  /* border: none; */
  /* color: #fff; */
}
button:focus,
button:hover {
  outline: none;
  cursor: pointer;
}
.next {
  right: 2%;
}
.prev {
  left: 2%;
}
</style>