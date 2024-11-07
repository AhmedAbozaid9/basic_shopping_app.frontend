<script lang="ts" setup></script>

<template>
  <div class="flex items-center w-full">
    <img
      src="/authBackground.jpg"
      alt="auth background"
      class="min-w-[45%] h-[100dvh] object-cover"
    />
    <div class="flex flex-col p-16 w-full">
      <slot />
    </div>
  </div>
</template>
