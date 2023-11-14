<template>
  <div class="outer">
    <div class="img1" v-myLoading="true">
      <img src="./assets/png1.jpg" alt="" />
    </div>
    <div class="img2" v-myLoading="true">
      <img src="./assets/png1.jpg" alt="" />
    </div>
    <div class="img3" v-myLoading="true">
      <img src="./assets/png1.jpg" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.img1 {
  width: 200px;
  img {
    width: 100%;
  }
}
.img2 {
  width: 500px;
  img {
    width: 100%;
  }
}
.img3 {
  width: 800px;
  img {
    width: 100%;
  }
}
</style>
