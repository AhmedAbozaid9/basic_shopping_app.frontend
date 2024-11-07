<script lang="ts" setup>
import { postSignIn } from '../../api/auth/postSignIn'
import AuthLayout from '../../components/auth/AuthLayout.vue'
import Button from 'primevue/button'
import { AxiosError } from 'axios'

import { ref } from 'vue'
const email = ref('')
const password = ref('')
const isLoading = ref(false)
const errorMessage = ref('')
const handleLogin = async (e: Event) => {
  e.preventDefault()
  try {
    isLoading.value = true
    const response = await postSignIn(email.value, password.value)
    if (response.status === 200) {
      console.log(response)
    }
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      if (err.message === 'Network Error') {
        errorMessage.value =
          "this won't work because the dev didn't host the backend, but trust me it works"
      }
    }
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <AuthLayout>
    <form @submit="handleLogin" class="p-6 border rounded-md flex flex-col gap-5">
      <h2 class="text-2xl sm:text-4xl font-bold mb-5">Sign in</h2>
      <input
        v-model="email"
        required
        type="email"
        class="w-full border-2 border-neutral-300 rounded-md py-2 px-3"
        placeholder="enter your email"
      />
      <input
        v-model="password"
        required
        type="password"
        class="w-full border-2 border-neutral-300 rounded-md py-2 px-3"
        placeholder="enter your password"
      />
      <h2 class="text-sm font-semibold text-red-400">{{ errorMessage }}</h2>
      <Button
        type="submit"
        class="!bg-black !text-white !py-2 !px-3 !rounded-md"
        label="Sign in"
        :loading="isLoading"
      />
    </form>
  </AuthLayout>
</template>
