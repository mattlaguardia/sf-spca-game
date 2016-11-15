var Ball = {
  _WIDTH: 320,
  _HEIGHT: 480
}
Ball.Boot = function(game) {}

Ball.Boot.prototype = {
  preload: function () {
    this.load.image('')
  },
  create: function () {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
		this.game.scale.pageAlignHorizontally = true
		this.game.scale.pageAlignVertically = true
		this.game.state.start('Preloader')
  }
}
