<template>
  <div class="container p-1 pb-3">
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
::-webkit-scrollbar-track {
    background-color: #D4D4D4;
    border-radius: 10px;
}
*::-webkit-scrollbar {
    width: 9px;
    background-color: #D4D4D4
}
*::-webkit-scrollbar-thumb {
    background-color: #A5A5A5;
    border-radius: 1px;
}
*::-webkit-scrollbar-corner {
    background-color: #ecf1f6
}


</style>
