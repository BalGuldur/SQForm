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
    // Наименование тэга
    title: {
      type: String,
      required: true
    },
    // Условие
    condition: {
      type: String,
      required: true
    },
    // Значения
    values: {
      type: Array,
      required: true
    }
  }
}
</script>
