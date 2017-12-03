<template>
  <div>
    <span class="tagTitle">{{ title }} </span>
    <span class="tagCondition"> {{ condition }} </span>
    <span
      class="tagValue"
      v-for="value in values"
      :key="value">
      {{ value }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    condition: {
      type: String,
      required: true
    },
    values: {
      type: Array,
      required: true
    }
  }
}
</script>
