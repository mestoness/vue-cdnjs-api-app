<template>
  <div class="container mt-5 pb-3 p-1">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
body {
  word-wrap: break-word;
}
</style>
