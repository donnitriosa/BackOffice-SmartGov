<template>
  
</template>
<script>

export default {
  name: 'Logout',
  mounted () {
    localStorage.removeItem('email')
    localStorage.removeItem('username')
    this.$router.push('login')
  }
}
</script>
