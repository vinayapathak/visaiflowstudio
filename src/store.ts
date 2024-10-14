import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Edge, Node } from '@vue-flow/core';

const useStore = defineStore('vue-flow-pinia', () => {
  const nodes = ref<Node[]>([
    {
      id: '1',
      type: 'input',
      label: 'Input Dataset',
      position: { x: 250, y: 5 },
      class: 'light',
    },
    {
      id: '2',
      type: 'default',
      label: 'Models',
      position: { x: 250, y: 100 },
      class: 'light',
    },
    {
      id: '3',
      type: 'output',
      label: 'Output Metrics',
      position: { x: 250, y: 200 },
      class: 'light',
    },
  ]);

  const edges = ref<Edge[]>([
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3' },
  ]);

  const reset = () => {
    edges.value = [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3' },
    ];
    nodes.value = [
      {
        id: '1',
        type: 'input',
        label: 'Input Dataset',
        position: { x: 250, y: 5 },
        class: 'light',
      },
      {
        id: '2',
        type: 'default',
        label: 'Models',
        position: { x: 250, y: 100 },
        class: 'light',
      },
      {
        id: '3',
        type: 'output',
        label: 'Output Metrics',
        position: { x: 250, y: 200 },
        class: 'light',
      },
    ];
  };

  const log = () => {
    console.log('nodes', nodes.value, 'edges', edges.value);
  };

  const toggleClass = () => {
    nodes.value = nodes.value.map((node) => ({
      ...node,
      class: node.class === 'dark' ? 'light' : 'dark',
    }));
  };

  const updatePositions = () => {
    nodes.value = nodes.value.map((node) => ({
      ...node,
      position: {
        x: Math.random() * 400,
        y: Math.random() * 400,
      },
    }));
  };

  return {
    nodes,
    edges,
    reset,
    log,
    toggleClass,
    updatePositions,
  };
});

export default useStore;