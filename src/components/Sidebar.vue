<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits(['onDragStart']);

const onDragStart = (event: DragEvent, nodeType: string) => {
  emit('onDragStart', event, nodeType);
};
</script>

<template>
  <aside :class="{ open: isOpen }">
    <div class="description">You can drag these nodes to the pane on the right.</div>
    <div
      class="dndnode input"
      draggable
      @dragstart="onDragStart($event, 'input')"
    >
      Input Node
    </div>
    <div
      class="dndnode"
      draggable
      @dragstart="onDragStart($event, 'default')"
    >
      Default Node
    </div>
    <div
      class="dndnode output"
      draggable
      @dragstart="onDragStart($event, 'output')"
    >
      Output Node
    </div>
  </aside>
</template>

<style scoped>
aside {
  width: 300px;
  background-color: #fcfcfc;
  border-right: 1px solid #eee;
  padding: 15px 10px;
  font-size: 12px;
  transition: transform 0.3s ease-out;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 4;
  transform: translateX(-100%);
}

aside.open {
  transform: translateX(0);
}

.description {
  margin-bottom: 10px;
}

.dndnode {
  height: 20px;
  padding: 4px;
  border: 1px solid #1a192b;
  border-radius: 2px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
}

.dndnode.input {
  border-color: #0041d0;
}

.dndnode.output {
  border-color: #ff0072;
}
</style>