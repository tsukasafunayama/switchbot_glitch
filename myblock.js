Blockly.defineBlocksWithJsonArray([
  {
    type: "go_left",
    message0: "左へ",
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "ひだりへすすむコマンド",
    helpUrl: "https://item.rakuten.co.jp/headfoot/n11d/",
  },
]);

Blockly.JavaScript["go_left"] = function (block) {
  var code = 'console.log("左へすすむ");\n';
  return code; /* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
  var toolbox = document.getElementById("toolbox");

  var options = {
    toolbox: toolbox,
    collapse: false,
    comments: false,
    disable: false,
    maxBlocks: Infinity,
    trashcan: false,
    horizontalLayout: false,
    toolboxPosition: "start",
    css: true,
    media: "https://blockly-demo.appspot.com/static/media/",
    rtl: false,
    scrollbars: false,
    sounds: true,
    oneBasedIndex: true,
  };

  /* Inject your workspace */
  var workspace = Blockly.inject("blocklyDiv", options);

  /* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

  /* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
  var workspaceBlocks = document.getElementById("workspaceBlocks");

  /* Load blocks to workspace. */
  Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
};
