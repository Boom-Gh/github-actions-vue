<template>
  <div>

    <h1>This is about page</h1>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <p>1</p>
      </van-swipe-item>
      <van-swipe-item><p>1</p><p>1</p><p>1</p></van-swipe-item>
      <van-swipe-item><p>1</p><p>1</p><p>1</p></van-swipe-item>
      <van-swipe-item><p>1</p><p>1</p></van-swipe-item>
      <van-swipe-item><p>1</p><p>1</p><p>1</p><p>1</p></van-swipe-item>
    </van-swipe>

  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
