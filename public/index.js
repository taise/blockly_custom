const workspace = Blockly.inject(
  'blocklyDiv',
  {
    toolbox: document.getElementById('toolbox'),
    trashcan: true,
  },
);
function showCode() {
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  const pre = document.getElementById('jsCode');
  pre.innerHTML = Blockly.JavaScript.workspaceToCode(workspace);
}

document.getElementById('showCode').addEventListener('click', showCode, false);
