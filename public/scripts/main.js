console.log("sanity check - js")

var game = new Phaser.Game(320, 480, Phaser.CANVAS, 'game', { preload: preload })

function preload() {
  game.stage.backgroundColor = '#333'
  game.state.add('Boot', Ball.Boot)
}
