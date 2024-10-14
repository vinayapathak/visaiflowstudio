<script lang="ts" setup>
import { ref } from 'vue';
import { Panel, VueFlow, useVueFlow } from '@vue-flow/core';
import useStore from './store';
import Icon from './Icon.vue';
import Sidebar from './components/Sidebar.vue';

const store = useStore();
const sidebarOpen = ref(true);

const { onConnect, addEdges } = useVueFlow();

onConnect((params) => addEdges([params]));

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const runFlow = () => {
  console.log('Running the flow');
  // Implement the logic to run the flow here
};
</script>

<template>
  <div class="dndflow">
    <h1 class="visaiflow-heading">VisAIFlow - No Code AI</h1>
    <Sidebar :is-open="sidebarOpen" />
    <div class="vue-flow-wrapper">
      <VueFlow
        v-model:nodes="store.nodes"
        v-model:edges="store.edges"
        class="pinia-flow"
        :class="{ 'sidebar-open': sidebarOpen }"
        fit-view-on-init
      >
        <Panel position="top-right">
          <div class="buttons-panel">
            <button @click="toggleSidebar">
              <Icon :name="sidebarOpen ? 'chevron-left' : 'chevron-right'" />
            </button>
            <button @click="store.updatePositions">
              <Icon name="shuffle" />
            </button>
            <button @click="store.toggleClass">
              <Icon name="moon" />
            </button>
            <button @click="store.log">
              <Icon name="log" />
            </button>
            <button @click="store.reset">
              <Icon name="reset" />
            </button>
          </div>
        </Panel>
        <Panel position="bottom-right">
          <button class="run-button" @click="runFlow">Run</button>
        </Panel>
      </VueFlow>
    </div>
  </div>
</template>

<style scoped>
.dndflow {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.visaiflow-heading {
  background-color: #2d3748;
  color: white;
  padding: 10px;
  margin: 0;
  text-align: center;
  font-size: 24px;
}

.vue-flow-wrapper {
  flex-grow: 1;
  height: calc(100% - 50px); /* Adjust this value based on the heading height */
}

.pinia-flow {
  background-color: #1a192b;
}

.pinia-flow.sidebar-open {
  margin-left: 300px;
}

.run-button {
  background-color: #48bb78;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.run-button:hover {
  background-color: #38a169;
}
</style>