<script lang="ts" setup>
import AuthLayout from '../../components/auth/AuthLayout.vue'
import Button from 'primevue/button'

import { ref } from 'vue'

const isLoading = ref(true)
</script>

<template>
  <AuthLayout>
    <div class="p-6 border rounded-md flex flex-col gap-5">
      <h2 class="text-2xl sm:text-4xl font-bold mb-5">Sign in</h2>
      <input
        class="w-full border-2 border-neutral-300 rounded-md py-2 px-3"
        placeholder="enter your email"
      />
      <div class="relative">
        <input
          type="password"
          class="w-full border-2 border-neutral-300 rounded-md py-2 px-3"
          placeholder="enter your password"
        />
        <i class="pi pi-eye" style="font-size: 2rem"></i>
      </div>
      <Button
        class="!bg-black !text-white !py-2 !px-3 !rounded-md"
        label="Sign in"
        :loading="isLoading"
      />
    </div>
  </AuthLayout>
</template>
