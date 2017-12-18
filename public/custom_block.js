Blockly.Blocks.text_shuffle = {
  /**
   * Block for shuffle characters.
   * @this Blockly.Block
   */
  init() {
    this.jsonInit({
        message0: '%1をシャッフルする',
      args0: [
        {
          type: 'input_value',
          name: 'TEXT',
          check: 'String',
        },
      ],
      output: 'String',
      inputsInline: true,
      colour: 160,
      tooltip: '文字の順番をランダムでいれかえる',
    });
  },
};

Blockly.JavaScript.text_shuffle = function(block) {
  const args0 = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  const OPERATOR = ".split('').sort(function(){return 0.5-Math.random()}).join('')";
  return [args0 + OPERATOR, Blockly.JavaScript.ORDER_MEMBER];
};
