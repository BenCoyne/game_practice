import Phaser from "phaser";

export default class Game extends Phaser.Scene {
	preload() {
		// this.load.spritesheet('myguy', 'src/assets/sprites/background.png', 11, 1);
		this.load.image("Jump", "src/assets/sprites/Jump.png");
		this.load.image("star", "star.png");
		this.load.image("background", "src/assets/sprites/background.png");
	}
	create() {
		// this.background = this.add.image(0, 0, "background");
		this.hero = this.add.image(0, 0, "Jump");
		this.cursors = this.input.keyboard.createCursorKeys();
	}

	update() {
		if (this.cursors.up.isDown) {
			console.log("move up");
			this.hero.y -= 2;
		} else if (this.cursors.down.isDown) {
			this.hero.y += 2;
		} else if (this.cursors.right.isDown) {
			this.hero.x += 2;
		} else if (this.cursors.left.isDown) {
			this.hero.x -= 2;
		}
	}
}
