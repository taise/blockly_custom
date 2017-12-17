Blockly.inject(
  'blocklyDiv',
  {
    toolbox: document.getElementById('toolbox'),
    maxBlocks: 3,
    grid: {
      spacing: 18,
      length: 3,
      colour: '#ccc',
      snap: true,
    },
    trashcan: true,
    zoom: {
      controls: true,
      wheel: true,
      startScale: 1.0,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2,
    },
  },
);
