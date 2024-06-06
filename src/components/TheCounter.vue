<script setup lang="ts">
const props = defineProps<{
  initial: number;
}>();

const { count, inc, dec } = useCounter(props.initial);
</script>

<template>
  <div>
    {{ count }}
    <button @click="inc()">
      +
    </button>
    <button @click="dec()">
      -
    </button>
  </div>
</template>
