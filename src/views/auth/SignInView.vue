<script lang="ts" setup>
import AuthLayout from '../../components/auth/AuthLayout.vue'
</script>

<template>
  <AuthLayout>
    <div>hello from sign in</div>
    <p>
      <span>Don't have an account ? <router-link to="/signup">Sign up</router-link></span>
    </p>
  </AuthLayout>
</template>
