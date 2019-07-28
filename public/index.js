Array.prototype.clone = function() {
  return this.slice(0);
};

const workspace = Blockly.inject(
  'blocklyDiv',
  {
    toolbox: document.getElementById('toolbox'),
    trashcan: true,
  },
);

function repeatNumber(block) {
  if (block.type !== "controls_repeat") {
    throw "This block is NOT controls_repeat.";
  }

  var n = block.inputList[0].fieldRow[0].text_;
  var i = parseInt(n);
  if (isNaN(i)) {
    return 0;
  }
  return i;
};

function parseBlockTree(blocks, execList) {
  for (;;) {
    let block = blocks.pop();
    if(block === void 0) {
      return execList;
    }
    execList.push(block.type)

    switch (block.type) {
    case "controls_repeat":
      const n = repeatNumber(block);
      for (let i = 1; i <= n; i++) {
        execList = parseBlockTree(block.childBlocks_.clone(), execList);
      }
      break;
    default:
      if(block.childBlocks_.length > 0) {
        execList = parseBlockTree(block.childBlocks_.clone(), execList);
      }
      break;
    }
  }

  return execList;
}

function runCode() {
  let execList = [];
  const blocks = workspace.topBlocks_.clone();

  execList = parseBlockTree(blocks, execList);
  console.log("# Execution List")
  execList.forEach( (exec) => console.log(exec) );
}

document.getElementById('runCode').addEventListener('click', runCode, false);

