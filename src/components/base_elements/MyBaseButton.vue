<template>
  <button @click="clickButton"/>
</template>

<script>
export default {
  methods: {
    clickButton () {
      this.$emit('clickButton')
    }
  }
}
</script>
